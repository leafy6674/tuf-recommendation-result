// 1b Two shifts — one rig at a time; flip Day / Night to see AI fit or game FPS.
import type { CSSProperties } from 'react';
import { Button, HazardStripe } from '../ds';
import { FpsTags, GameTags, LocalModelTags, LocalTags, Marker, PlatformTags } from '../answers';
import { pct, ranked, useApp } from '../state';

/** Axis maxima for the FPS and VRAM bar charts. */
const MAX_FPS = 160, MAX_VRAM = 16;

const THEME = {
  night: { bg: 'var(--graphite-950)', panel: 'var(--graphite-900)', bd: 'var(--graphite-700)', fg: 'var(--fg-1)', sub: 'var(--fg-2)', mute: 'var(--fg-3)', acc: 'var(--hazard-500)', stage: 'radial-gradient(ellipse at 50% 58%,var(--graphite-700),var(--graphite-900) 68%)' },
  day: { bg: 'var(--steel-50)', panel: 'var(--steel-0)', bd: 'var(--steel-150)', fg: 'var(--graphite-950)', sub: 'var(--graphite-600)', mute: 'var(--graphite-500)', acc: 'var(--hazard-700)', stage: 'radial-gradient(ellipse at 50% 58%,var(--steel-0),var(--steel-150) 70%)' }
};

const mono = (size: number, color: string, spacing = '.14em'): CSSProperties => ({ font: `400 ${size}px/1 var(--font-mono)`, letterSpacing: spacing, color });

export function TwoShifts() {
  const { s, L, set, fmt, gameLabel } = useApp();
  const night = s.bMode === 'night';
  const th = THEME[s.bMode];
  const A = ranked(s, 0.5);
  const B = A.find(c => c.m.id === (s.bModel ?? A[0].m.id))!;
  const m = B.m;

  const shifts = [
    { label: L.shiftDay, sub: L.shiftDaySub, on: !night, mode: 'day' as const },
    { label: L.shiftNight, sub: L.shiftNightSub, on: night, mode: 'night' as const }
  ];
  const stats = [
    { k: 'GPU', v: 'NVIDIA ' + m.gpu + ' · ' + m.vram + 'GB' },
    { k: 'CPU', v: m.cpu + ' · ' + m.cores + L.coreShort },
    { k: L.display, v: m.screen + '″ ' + m.panel },
    { k: 'RAM / SSD', v: m.ram + 'GB · ' + m.ssd },
    { k: L.weight, v: m.weight + ' kg' }
  ];
  const checks = [
    { k: 'CPU', v: m.cpu, sub: m.cores + L.cores, ok: B.coreOk },
    { k: 'RAM', v: m.ram + 'GB DDR5', sub: B.needRam ? L.ramHint : '', ok: B.ramOk },
    { k: 'SSD', v: m.ssd + ' PCIe 4.0', sub: L.ssdSub, ok: true },
    { k: 'CUDA', v: 'NVIDIA ' + m.gpu, sub: 'PyTorch / TensorFlow', ok: true }
  ];
  const tile: CSSProperties = { background: th.panel, padding: '14px 16px' };
  const tileVal: CSSProperties = { font: '800 40px/1 var(--font-display)', marginTop: 8 };

  return (
    <div style={{ background: th.bg, color: th.fg, fontFamily: 'var(--font-body)', transition: 'background 200ms var(--ease-hard),color 200ms var(--ease-hard)' }}>
      <div style={{ height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px', borderBottom: '1px solid ' + th.bd, background: th.panel, transition: 'background 200ms var(--ease-hard)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <span style={{ font: '800 28px/1 var(--font-display)', letterSpacing: '.02em' }}>TUF</span>
          <span style={mono(12, th.mute)}>{L.resultEyebrow}</span>
        </div>
        <div role="tablist" style={{ display: 'flex', border: '1px solid ' + th.bd }}>
          {shifts.map(x => (
            <div key={x.mode} role="tab" aria-selected={x.on} tabIndex={0} onClick={() => set({ bMode: x.mode })} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); set({ bMode: x.mode }); } }}
              style={{ minWidth: 180, padding: '9px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, cursor: 'pointer', background: x.on ? 'var(--hazard-500)' : 'transparent', color: x.on ? 'var(--graphite-950)' : th.sub, transition: 'background 120ms var(--ease-hard)' }}>
              <span style={{ font: '700 18px/1 var(--font-display)', letterSpacing: '.06em' }}>{x.label}</span>
              <span style={{ font: '400 11px/1 var(--font-mono)', letterSpacing: '.08em' }}>{x.sub}</span>
            </div>
          ))}
        </div>
        <span style={{ ...mono(12, th.mute), width: 200, textAlign: 'right' }}>{L.switchShift}</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,minmax(0,1fr))', gap: 1, background: th.bd, borderBottom: '1px solid ' + th.bd }}>
        {A.map((c, i) => {
          const on = c === B, fg = on ? th.fg : th.mute;
          return (
            <div key={c.m.id} onClick={() => set({ bModel: c.m.id })} style={{ position: 'relative', padding: '14px 20px', background: on ? th.panel : th.bg, cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
              <div style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 3, background: on ? th.acc : 'transparent' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5, minWidth: 0 }}>
                <span style={mono(11, th.mute)}>#0{i + 1} · {fmt(c.price)}</span>
                <span style={{ font: '700 18px/1 var(--font-display)', textTransform: 'uppercase', color: fg }}>{c.m.name}</span>
              </div>
              <span style={{ font: '800 26px/1 var(--font-display)', color: fg }}>{pct(c.match)}%</span>
            </div>
          );
        })}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,1fr)', gap: 40, padding: 40 }}>
        <div style={{ position: 'relative', aspectRatio: '1/0.72', background: th.stage, border: '1px solid ' + th.bd, display: 'flex', alignItems: 'center', justifyContent: 'center', clipPath: 'var(--clip-chamfer-tr)' }}>
          <HazardStripe orientation="vertical" thickness={14} length={70} style={{ position: 'absolute', left: 0, top: 0 }} />
          <img src="assets/laptop-front.png" alt="" style={{ width: '80%' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, minWidth: 0 }}>
          {night ? (
            <div>
              <div style={mono(13, 'var(--hazard-500)', '.18em')}>{L.nightShiftEyebrow}</div>
              <div style={{ font: '800 60px/.92 var(--font-display)', marginTop: 12, color: 'var(--steel-100)', letterSpacing: '.14em', textShadow: '0 10px 18px rgba(255,59,48,.4)', transform: 'skewX(8deg)', transformOrigin: 'left bottom' }}>{L.reaper}</div>
            </div>
          ) : (
            <div>
              <div style={mono(13, 'var(--hazard-700)', '.18em')}>{L.dayShiftEyebrow}</div>
              <div style={{ font: '800 60px/.92 var(--font-display)', marginTop: 12, color: 'var(--graphite-950)', WebkitTextStroke: '6px var(--signal-yellow)', paintOrder: 'stroke fill', letterSpacing: '.04em', transform: 'skewX(-8deg)', transformOrigin: 'left bottom' }}>{L.dawn}</div>
            </div>
          )}
          <h2 style={{ margin: 0, font: '800 44px/1 var(--font-display)', textTransform: 'uppercase' }}>{m.name}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1, background: th.bd, border: '1px solid ' + th.bd }}>
            <div style={tile}><div style={mono(11, th.mute)}>{L.match}</div><div style={tileVal}>{pct(B.match)}<span style={{ fontSize: 20 }}>%</span></div></div>
            <div style={tile}><div style={mono(11, th.mute)}>{L.dayFit}</div><div style={{ ...tileVal, color: night ? th.fg : th.acc }}>{pct(B.day)}</div></div>
            <div style={tile}><div style={mono(11, th.mute)}>{L.nightFit}</div><div style={{ ...tileVal, color: night ? th.acc : th.fg }}>{pct(B.night)}</div></div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {stats.map(x => (
              <div key={x.k} style={{ display: 'grid', gridTemplateColumns: '140px 1fr', padding: '11px 0', borderBottom: '1px solid ' + th.bd }}>
                <span style={{ font: '400 12px/1.6 var(--font-mono)', letterSpacing: '.12em', color: th.mute }}>{x.k}</span>
                <span style={{ font: '500 16px/1.4 var(--font-body)' }}>{x.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {night ? (
        <div style={{ margin: '0 40px 40px', border: '1px solid var(--graphite-700)', background: 'var(--graphite-900)', clipPath: 'var(--clip-chamfer-tr)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 20, padding: '20px 24px', borderBottom: '1px solid var(--graphite-700)' }}>
            <div>
              <div style={mono(13, 'var(--hazard-500)')}>{L.fpsEyebrow}</div>
              <div style={{ font: '700 28px/1.1 var(--font-display)', marginTop: 6 }}>{L.fpsTitle} · {B.passN + '/' + B.nGames + L.gamesPass}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end' }}>
              <span style={mono(11, 'var(--fg-3)')}>{L.target}</span>
              <div style={{ display: 'flex', gap: 6 }}><FpsTags /></div>
            </div>
          </div>
          <div style={{ padding: '16px 24px', borderBottom: '1px solid var(--graphite-700)', display: 'flex', flexWrap: 'wrap', gap: 6 }}><GameTags /></div>
          {B.nGames > 0 ? (
            <div style={{ position: 'relative', padding: '20px 24px 12px' }}>
              <div style={{ position: 'absolute', top: 8, bottom: 0, left: 264, right: 136, pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', top: 0, bottom: 0, left: (s.fps / MAX_FPS * 100) + '%', width: 2, background: 'var(--hazard-500)', transition: 'left 200ms var(--ease-hard)' }}>
                  <span style={{ position: 'absolute', bottom: '100%', left: 6, font: '400 11px/1 var(--font-mono)', color: 'var(--hazard-500)', whiteSpace: 'nowrap' }}>▼ {s.fps} FPS</span>
                </div>
              </div>
              {B.fps.map(f => (
                <div key={f.g.id} style={{ display: 'grid', gridTemplateColumns: '240px minmax(0,1fr) 136px', alignItems: 'center', padding: '10px 0' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 3, paddingRight: 12 }}>
                    <span style={{ font: '600 17px/1.15 var(--font-display)' }}>{gameLabel(f.g)}</span>
                    <span style={mono(11, f.pass ? 'var(--fg-3)' : 'var(--signal-red)', '.08em')}>{f.capped ? L.capNote : f.pass ? L.atTarget : L.below}</span>
                  </div>
                  <div style={{ height: 16, background: 'var(--graphite-700)' }}>
                    <div style={{ height: 16, width: Math.min(100, f.v / MAX_FPS * 100) + '%', background: f.pass ? 'var(--hazard-500)' : 'var(--graphite-500)', transition: 'width 420ms var(--ease-out)' }} />
                  </div>
                  <div style={{ paddingLeft: 16, display: 'flex', alignItems: 'baseline', gap: 4 }}>
                    <span style={{ font: '800 28px/1 var(--font-display)' }}>{f.v}</span>
                    <span style={mono(11, 'var(--fg-3)', 'normal')}>FPS</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ padding: '32px 24px', color: 'var(--fg-3)' }}>{L.noGames}</div>
          )}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 24px', borderTop: '1px solid var(--graphite-700)', fontSize: 14, color: 'var(--fg-2)' }}>
            <Marker status={B.hzOk ? 'pass' : 'fail'} />{L.hz(m.hz, B.hzOk, s.fps)}
          </div>
        </div>
      ) : (
        <div style={{ margin: '0 40px 40px', border: '1px solid var(--steel-150)', background: 'var(--steel-0)', color: 'var(--graphite-950)', clipPath: 'var(--clip-chamfer-tr)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 20, padding: '20px 24px', borderBottom: '1px solid var(--steel-150)' }}>
            <div>
              <div style={mono(13, 'var(--hazard-700)')}>{L.vramEyebrow}</div>
              <div style={{ font: '700 28px/1.1 var(--font-display)', marginTop: 6 }}>{L.vramTitle}</div>
            </div>
            <div style={{ display: 'flex', gap: 6 }}><LocalTags /></div>
          </div>
          {s.local ? <>
            <div style={{ padding: '16px 24px', borderBottom: '1px solid var(--steel-150)', display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center' }}>
              <LocalModelTags />
              <span style={{ ...mono(11, 'var(--graphite-500)', '.08em'), marginLeft: 8 }}>{L.runtime}</span>
            </div>
            <div style={{ position: 'relative', padding: '28px 24px 8px' }}>
              <div style={{ position: 'absolute', top: 10, bottom: 30, left: 264, right: 144, pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', top: 0, bottom: 0, left: (m.vram / MAX_VRAM * 100) + '%', width: 2, background: 'var(--hazard-700)', transition: 'left 200ms var(--ease-hard)' }}>
                  <span style={{ position: 'absolute', bottom: '100%', left: 6, font: '400 11px/1 var(--font-mono)', color: 'var(--hazard-700)', whiteSpace: 'nowrap' }}>▼ {m.vram}GB VRAM</span>
                </div>
              </div>
              {B.lms.map(l => {
                const q8 = m.vram >= l.q8, q4 = m.vram >= l.q4;
                return (
                  <div key={l.id} style={{ display: 'grid', gridTemplateColumns: '240px minmax(0,1fr) 144px', alignItems: 'center', padding: '10px 0' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 3, paddingRight: 12 }}>
                      <span style={{ font: '600 17px/1.15 var(--font-display)' }}>{l.label}</span>
                      <span style={mono(11, 'var(--graphite-500)', '.06em')}>Q4 {l.q4}GB · Q8 {l.q8}GB</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 3, background: 'var(--steel-100)', padding: '3px 0' }}>
                      <div style={{ height: 8, width: (l.q8 / MAX_VRAM * 100) + '%', background: 'var(--steel-300)' }} />
                      <div style={{ height: 8, width: (l.q4 / MAX_VRAM * 100) + '%', background: 'var(--graphite-800)' }} />
                    </div>
                    <div style={{ paddingLeft: 16, font: '700 18px/1 var(--font-display)', color: q8 ? 'var(--graphite-950)' : q4 ? 'var(--hazard-700)' : 'var(--signal-red)' }}>{q8 ? L.q8ok : q4 ? L.q4o : L.short}</div>
                  </div>
                );
              })}
              <div style={{ display: 'grid', gridTemplateColumns: '240px minmax(0,1fr) 144px', paddingTop: 6 }}>
                <span style={{ font: '400 11px/1 var(--font-mono)', color: 'var(--graphite-500)', display: 'flex', gap: 12, alignItems: 'center' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span style={{ width: 10, height: 6, background: 'var(--graphite-800)' }} />Q4</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span style={{ width: 10, height: 6, background: 'var(--steel-300)' }} />Q8</span>
                </span>
                <div style={{ display: 'flex', justifyContent: 'space-between', font: '400 11px/1 var(--font-mono)', color: 'var(--graphite-500)' }}>
                  <span>0</span><span>4</span><span>8</span><span>12</span><span>16GB</span>
                </div>
                <span />
              </div>
            </div>
          </> : (
            <div style={{ padding: '28px 24px', color: 'var(--graphite-600)' }}>{L.noLocal}</div>
          )}
          <div style={{ padding: '20px 24px', borderTop: '1px solid var(--steel-150)', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={mono(13, 'var(--hazard-700)')}>{L.q3}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}><PlatformTags /></div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,minmax(0,1fr))', gap: 1, background: 'var(--steel-150)', border: '1px solid var(--steel-150)', marginTop: 4 }}>
              {checks.map(x => (
                <div key={x.k} style={{ background: 'var(--steel-50)', padding: '12px 14px', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <Marker status={x.ok ? 'pass' : 'fail'} style={{ marginTop: 5 }} />
                  <div>
                    <div style={mono(11, 'var(--graphite-500)', '.12em')}>{x.k}</div>
                    <div style={{ font: '600 15px/1.3 var(--font-body)', marginTop: 5 }}>{x.v}</div>
                    <div style={{ fontSize: 12, color: 'var(--graphite-600)' }}>{x.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', borderTop: '1px solid ' + th.bd, background: th.panel }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
          <span style={{ font: '800 40px/1 var(--font-display)' }}>{fmt(B.price)}</span>
          <span style={mono(12, B.over > 0 ? 'var(--signal-red)' : th.mute, 'normal')}>{B.over > 0 ? L.overB + fmt(B.over) : L.inB}</span>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <Button variant="outline" size="lg" onClick={() => set({ bMode: night ? 'day' : 'night' })} style={night ? undefined : { color: 'var(--graphite-950)', borderColor: 'var(--graphite-500)' }}>
            {night ? L.altDay : L.altNight}
          </Button>
          <Button size="lg">{L.selectRig}</Button>
        </div>
      </div>
    </div>
  );
}
