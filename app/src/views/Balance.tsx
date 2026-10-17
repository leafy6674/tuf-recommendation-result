// 1c Balance — slide Day ↔ Night priority and budget; rows re-rank live; pin two to compare.
import type { CSSProperties } from 'react';
import { Button, HazardStripe } from '../ds';
import { BUDGET_SLIDER, MODELS, type Model } from '../data';
import { pct, ranked, useApp } from '../state';

const MAX_BAR = 460, ROW_H = 104;

const mono = (size: number, color: string, spacing = '.14em'): CSSProperties => ({ font: `400 ${size}px/1 var(--font-mono)`, letterSpacing: spacing, color });

export function Balance() {
  const { s, L, en, set, reset, fmt, priceOf, budget, setBudget } = useApp();
  const w = s.wDay / 100;
  const C = ranked(s, w);
  // Bars fill to their track as that side's weight approaches 50%+.
  const fD = Math.min(1, 2 * w), fN = Math.min(1, 2 * (1 - w));
  const slider = BUDGET_SLIDER[s.lang];
  const togglePick = (id: string) => set(st => ({ pick: st.pick.includes(id) ? st.pick.filter(x => x !== id) : [...st.pick, id].slice(-2) }));

  const pair = s.pick.length === 2 ? s.pick.map(id => MODELS.find(m => m.id === id)!) : null;
  const diff = pair ? ([
    ['GPU', m => m.gpu + ' · ' + m.tgp, m => m.idx, 1],
    ['VRAM', m => m.vram + 'GB', m => m.vram, 1],
    ['CPU', m => m.cpu + ' · ' + m.cores + 'C', m => m.cores, 1],
    ['RAM', m => m.ram + 'GB', m => m.ram, 1],
    ['SSD', m => m.ssd, m => parseInt(m.ssd), 1],
    [L.display, m => m.screen + '″ ' + m.panel, m => m.hz, 1],
    [L.weight, m => m.weight + ' kg', m => m.weight, -1],
    [L.price, m => fmt(priceOf(m)), m => priceOf(m), -1]
  ] as [string, (m: Model) => string, (m: Model) => number, number][]).map(([k, f, v, dir]) => {
    const [ma, mb] = pair;
    const a = v(ma) * dir, b = v(mb) * dir;
    return { k, a: f(ma), b: f(mb), aWin: a > b, bWin: b > a, same: a === b && f(ma) === f(mb) };
  }) : [];

  return (
    <div style={{ position: 'relative', background: 'linear-gradient(90deg,var(--steel-100) 50%,var(--graphite-900) 50%)', color: 'var(--fg-1)', fontFamily: 'var(--font-body)' }}>
      <div style={{ position: 'absolute', left: 'calc(50% - 1px)', top: 64, bottom: 0, width: 2, background: 'var(--hazard-500)' }} />
      <div style={{ position: 'relative', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px', borderBottom: '1px solid var(--graphite-700)', background: 'var(--graphite-950)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <span style={{ font: '800 28px/1 var(--font-display)', letterSpacing: '.02em' }}>TUF</span>
          <span style={mono(12, 'var(--fg-3)')}>{L.resultEyebrow} · <span style={{ color: 'var(--hazard-500)' }}>{L.balance}</span></span>
        </div>
        <Button variant="ghost" size="sm" onClick={reset}>{L.retake}</Button>
      </div>

      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 0 16px' }}>
        <div style={{ width: 720, border: '1px solid var(--hazard-500)', background: 'var(--graphite-950)', clipPath: 'var(--clip-chamfer-tr)' }}>
          <div style={{ background: 'var(--hazard-500)', color: 'var(--graphite-950)', padding: '14px 24px', textAlign: 'center' }}>
            <div style={{ font: '400 12px/1 var(--font-mono)', letterSpacing: '.18em' }}>{L.twoShifts}</div>
            <div style={{ font: '800 40px/1 var(--font-display)', marginTop: 6 }}>{L.whichShift}</div>
          </div>
          <div style={{ padding: '20px 28px 24px', display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ font: '700 22px/1 var(--font-display)' }}>{L.dawn} <span style={{ color: 'var(--steel-0)' }}>{s.wDay}%</span></span>
                <span style={mono(11, 'var(--fg-3)')}>{L.priority}</span>
                <span style={{ font: '700 22px/1 var(--font-display)' }}><span style={{ color: 'var(--hazard-500)' }}>{100 - s.wDay}%</span> {L.reaper}</span>
              </div>
              {/* rtl so dragging left increases Day weight, matching the Day side of the page. */}
              <input type="range" aria-label={L.priority} min={0} max={100} step={5} value={s.wDay} onChange={e => set({ wDay: +e.target.value })}
                style={{ width: '100%', accentColor: '#f97400', direction: 'rtl', cursor: 'pointer' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', ...mono(11, 'var(--fg-3)', '.1em') }}><span>{L.leanDay}</span><span>{L.leanNight}</span></div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 16, borderTop: '1px solid var(--graphite-700)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={mono(11, 'var(--fg-3)')}>{L.budgetCap}</span>
                <span style={{ font: '700 22px/1 var(--font-display)' }}>{fmt(budget)}</span>
              </div>
              <input key={en ? 'usd' : 'twd'} type="range" aria-label={L.budgetCap} min={slider.min} max={slider.max} step={slider.step} value={budget} onChange={e => setBudget(+e.target.value)}
                style={{ width: '100%', accentColor: '#f97400', cursor: 'pointer' }} />
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '16px 0 8px' }}>
        <div style={{ textAlign: 'right', paddingRight: 150, ...mono(12, 'var(--hazard-700)') }}>{L.dayFit} ←</div>
        <div style={{ paddingLeft: 150, ...mono(12, 'var(--hazard-500)') }}>→ {L.nightFit}</div>
      </div>
      <div style={{ position: 'relative', height: 416 }}>
        {MODELS.map(m => {
          const r = C.findIndex(x => x.m.id === m.id), c = C[r];
          const pi = s.pick.indexOf(m.id), picked = pi >= 0;
          const bar = (side: 'right' | 'left', width: number, bg: string): CSSProperties => ({ position: 'absolute', [side]: 'calc(50% + 130px)', top: 24, height: 26, width: Math.round(width) + 'px', background: bg, transition: 'width 420ms var(--ease-out)' });
          return (
            <div key={m.id} style={{ position: 'absolute', left: 0, right: 0, top: r * ROW_H, height: 96, transition: 'top 420ms var(--ease-out)' }}>
              <div style={bar('right', c.day * MAX_BAR, 'var(--steel-200)')} />
              <div style={bar('right', c.day * fD * MAX_BAR, 'var(--graphite-800)')} />
              <div style={{ position: 'absolute', right: 'calc(50% + 130px)', top: 58, ...mono(12, 'var(--graphite-700)', '.06em'), whiteSpace: 'nowrap' }}>
                DAY {pct(c.day)} · VRAM {m.vram}GB · RAM {m.ram}GB · {m.cores}C
              </div>
              <div style={bar('left', c.night * MAX_BAR, 'var(--graphite-700)')} />
              <div style={bar('left', c.night * fN * MAX_BAR, 'var(--hazard-500)')} />
              <div style={{ position: 'absolute', left: 'calc(50% + 130px)', top: 58, ...mono(12, 'var(--fg-2)', '.06em'), whiteSpace: 'nowrap' }}>
                NIGHT {pct(c.night)} · {m.gpu} · {c.passN}/{c.nGames}{L.gamesGe}{s.fps} FPS
              </div>
              <div role="button" aria-pressed={picked} tabIndex={0} onClick={() => togglePick(m.id)} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); togglePick(m.id); } }}
                style={{ position: 'absolute', left: 'calc(50% - 120px)', width: 240, top: 4, height: 80, boxSizing: 'border-box', padding: '10px 14px', background: picked ? 'var(--hazard-500)' : 'var(--graphite-950)', color: picked ? 'var(--graphite-950)' : 'var(--fg-1)', border: '1px solid ' + (picked ? 'var(--hazard-500)' : 'var(--graphite-600)'), cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', clipPath: 'var(--clip-chamfer-sm)', transition: 'background 120ms var(--ease-hard)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ font: '400 11px/1 var(--font-mono)', letterSpacing: '.14em' }}>#0{r + 1} {picked ? '· ' + (pi === 0 ? 'A' : 'B') : ''}</span>
                  <span style={{ font: '800 26px/1 var(--font-display)' }}>{pct(c.match)}%</span>
                </div>
                <div style={{ font: '700 19px/1 var(--font-display)', textTransform: 'uppercase' }}>{m.name}</div>
                <div style={{ font: '400 11px/1 var(--font-mono)', color: picked ? 'var(--graphite-900)' : c.over > 0 ? 'var(--signal-red)' : 'var(--fg-3)' }}>
                  {c.over > 0 ? fmt(c.price) + L.overC + fmt(c.over) : fmt(c.price) + L.inC}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ position: 'relative', textAlign: 'center', padding: '4px 0 28px' }}>
        <span style={{ ...mono(11, 'var(--fg-3)'), background: 'var(--graphite-950)', padding: '6px 12px', border: '1px solid var(--graphite-700)' }}>{L.clickTwo}</span>
      </div>

      <HazardStripe thickness={8} style={{ position: 'relative' }} />
      {pair ? (
        <div style={{ position: 'relative', padding: '28px 0 36px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 200px 1fr', alignItems: 'end', paddingBottom: 12 }}>
            <div style={{ textAlign: 'right', paddingRight: 28, color: 'var(--graphite-950)' }}>
              <div style={mono(12, 'var(--hazard-700)')}>A</div>
              <div style={{ font: '800 34px/1 var(--font-display)', textTransform: 'uppercase', marginTop: 6 }}>{pair[0].name}</div>
            </div>
            <div style={{ textAlign: 'center' }}><span style={{ font: '800 22px/1 var(--font-display)', background: 'var(--hazard-500)', color: 'var(--graphite-950)', padding: '6px 14px' }}>VS</span></div>
            <div style={{ paddingLeft: 28 }}>
              <div style={mono(12, 'var(--hazard-500)')}>B</div>
              <div style={{ font: '800 34px/1 var(--font-display)', textTransform: 'uppercase', marginTop: 6 }}>{pair[1].name}</div>
            </div>
          </div>
          {diff.map(d => {
            const mk = (on: boolean, col: string) => <span style={{ width: 9, height: 9, transform: 'rotate(45deg)', background: on ? col : 'transparent' }} />;
            return (
              <div key={d.k} style={{ display: 'grid', gridTemplateColumns: '1fr 200px 1fr', alignItems: 'center', opacity: d.same ? 0.45 : 1 }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 10, padding: '10px 28px', borderBottom: '1px solid var(--steel-200)', color: 'var(--graphite-950)', font: '500 16px/1.3 var(--font-body)' }}>
                  {mk(d.aWin, 'var(--hazard-700)')}{d.a}
                </div>
                <div style={{ textAlign: 'center', ...mono(11, 'var(--fg-2)', '.12em'), background: 'var(--graphite-950)', padding: '12px 0', borderBottom: '1px solid var(--graphite-700)' }}>{d.k}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 28px', borderBottom: '1px solid var(--graphite-700)', font: '500 16px/1.3 var(--font-body)' }}>
                  {d.b}{mk(d.bWin, 'var(--hazard-500)')}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '40px 0' }}>
          <div style={{ textAlign: 'right', paddingRight: 28, color: 'var(--graphite-600)' }}>{L.pickOne}</div>
          <div style={{ paddingLeft: 28, color: 'var(--fg-3)' }}>{L.picked} {s.pick.length} / 2</div>
        </div>
      )}
    </div>
  );
}
