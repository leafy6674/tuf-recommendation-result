// 1a Tier board — ranked comparison table; edit answers in the sidebar to re-rank.
import type { CSSProperties, ReactNode } from 'react';
import { Badge, Button, HazardStripe } from '../ds';
import { BudgetTags, FpsTags, GameTags, LocalModelTags, LocalTags, Marker, PlatformTags, ScreenTags, type Status } from '../answers';
import { GAMES, LOCAL_MODELS } from '../data';
import { pct, ranked, useApp, type Score } from '../state';

const mono = (size: number, color: string, spacing = '.14em'): CSSProperties => ({ font: `400 ${size}px/1 var(--font-mono)`, letterSpacing: spacing, color });
const chips: CSSProperties = { display: 'flex', flexWrap: 'wrap', gap: 6 };
const field: CSSProperties = { display: 'flex', flexDirection: 'column', gap: 8 };
const group: CSSProperties = { padding: 16, display: 'flex', flexDirection: 'column', gap: 16 };
const GRID = '200px repeat(4,minmax(0,1fr))';

type Cell = [text: string, sub?: string, status?: Status];
interface Row { label: string; sub: string; n: string[]; d: string[]; cell: (c: Score) => Cell }

function Field({ label, color, children }: { label: string; color: string; children: ReactNode }) {
  return <div style={field}><div style={mono(12, color)}>{label}</div><div style={chips}>{children}</div></div>;
}

function SpecRows({ rows, cols, selIdx, light }: { rows: Row[]; cols: Score[]; selIdx: number; light?: boolean }) {
  const line = light ? 'var(--steel-150)' : 'var(--graphite-700)';
  const mute = light ? 'var(--graphite-500)' : 'var(--fg-3)';
  const nTag: CSSProperties = light ? { border: '1px solid var(--hazard-700)', color: 'var(--hazard-700)' } : { border: '1px solid var(--hazard-500)', color: 'var(--hazard-500)' };
  const dTag: CSSProperties = light
    ? { border: '1px solid var(--graphite-950)', background: 'var(--graphite-950)', color: 'var(--steel-0)' }
    : { border: '1px solid var(--steel-0)', background: 'var(--steel-0)', color: 'var(--graphite-950)' };
  const src: CSSProperties = { font: '400 11px/1 var(--font-mono)', padding: '2px 5px' };
  return <>
    {rows.map(r => (
      <div key={r.label} style={{ display: 'grid', gridTemplateColumns: GRID, borderBottom: '1px solid ' + line }}>
        <div style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0 }}>
          <div style={{ font: '600 16px/1.2 var(--font-display)' }}>{r.label}</div>
          <div style={{ display: 'flex', gap: 4, alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ font: '400 11px/1 var(--font-mono)', color: mute, marginRight: 2 }}>{r.sub}</span>
            {r.n.map(t => <span key={'n' + t} style={{ ...src, ...nTag }}>{t}</span>)}
            {r.d.map(t => <span key={'d' + t} style={{ ...src, ...dTag }}>{t}</span>)}
          </div>
        </div>
        {cols.map((c, i) => {
          const [text, sub = '', status = null] = r.cell(c);
          return (
            <div key={c.m.id} style={{ padding: '12px 14px', display: 'flex', gap: 10, alignItems: 'flex-start', background: i === selIdx ? 'rgba(249,116,0,.08)' : 'transparent', minWidth: 0 }}>
              <Marker status={status} style={{ marginTop: 6 }} />
              <div style={{ minWidth: 0 }}>
                <div style={{ font: '500 15px/1.3 var(--font-body)' }}>{text}</div>
                <div style={{ font: '400 12px/1.3 var(--font-body)', color: light ? 'var(--graphite-600)' : 'var(--fg-3)' }}>{sub}</div>
              </div>
            </div>
          );
        })}
      </div>
    ))}
  </>;
}

export function TierBoard() {
  const { s, L, set, reset, fmt, gameLabel } = useApp();
  const A = ranked(s, 0.5);
  const selId = s.aSel ?? A[0].m.id;
  const selIdx = A.findIndex(c => c.m.id === selId);
  const aS = A[selIdx];
  const selGames = GAMES.filter(g => s.games.includes(g.id));
  const selLm = s.local ? LOCAL_MODELS.filter(l => s.lm.includes(l.id)) : [];

  const night: Row[] = [
    { label: 'GPU', sub: L.gpuSub, n: ['01', '02'], d: ['04'], cell: c => [c.m.gpu, c.m.tgp + ' TGP'] },
    ...selGames.map<Row>(g => ({
      label: gameLabel(g), sub: L.fpsSub, n: ['01', '02'], d: [],
      cell: c => { const f = c.fps.find(f => f.g.id === g.id)!; return [f.v + ' FPS', f.capped ? L.engineCap : '', f.pass ? 'pass' : 'fail']; }
    })),
    { label: L.screenL, sub: 'REFRESH', n: ['02'], d: [], cell: c => [c.m.panel, (c.hzOk ? '≥ ' : '< ') + L.targetW + s.fps + ' FPS', c.hzOk ? 'pass' : 'fail'] }
  ];
  const day: Row[] = [
    { label: 'VRAM', sub: L.vramSub, n: ['01'], d: ['04'], cell: c => [c.m.vram + 'GB', c.lms.length ? L.q8fits + c.q8n + '/' + c.lms.length : '', c.lms.length ? (c.q8n === c.lms.length ? 'pass' : 'part') : null] },
    ...selLm.map<Row>(l => ({
      label: l.label, sub: L.localInf, n: [], d: ['04'],
      cell: c => c.m.vram >= l.q8 ? [L.q8ok, L.need + l.q8 + 'GB', 'pass'] : c.m.vram >= l.q4 ? [L.q4only, L.q8need + l.q8 + 'GB', 'part'] : [L.short, L.need + l.q4 + 'GB', 'fail']
    })),
    { label: 'CPU', sub: L.cpuSub, n: [], d: ['03', '04'], cell: c => [c.m.cpu, c.m.cores + L.cores, c.coreOk ? 'pass' : 'fail'] },
    { label: 'RAM', sub: L.ramSub, n: [], d: ['03', '04'], cell: c => [c.m.ram + 'GB DDR5', c.ramOk ? '' : L.rec32, c.ramOk ? 'pass' : 'fail'] },
    { label: 'SSD', sub: L.storage, n: [], d: ['03'], cell: c => [c.m.ssd + ' PCIe 4.0', '', null] }
  ];
  const gen: Row[] = [
    { label: L.sizeL, sub: 'SIZE · WEIGHT', n: [], d: [], cell: c => [c.m.screen + '″ · ' + c.m.weight + 'kg', '', c.scOk ? 'pass' : 'fail'] },
    { label: L.priceL, sub: 'PRICE', n: [], d: [], cell: c => [fmt(c.price), c.over > 0 ? L.overP + fmt(c.over) : L.inBudget, c.over > 0 ? 'fail' : 'pass'] }
  ];
  const secBar: CSSProperties = { display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', background: 'var(--graphite-850)', borderTop: '1px solid var(--graphite-700)', ...mono(12, 'var(--hazard-500)') };

  return (
    <div style={{ background: 'var(--graphite-950)', color: 'var(--fg-1)', fontFamily: 'var(--font-body)' }}>
      <div style={{ height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px', borderBottom: '1px solid var(--graphite-700)', background: 'var(--graphite-900)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <span style={{ font: '800 28px/1 var(--font-display)', letterSpacing: '.02em' }}>TUF</span>
          <span style={mono(12, 'var(--fg-3)')}>{L.crumbReq} <span style={{ color: 'var(--hazard-500)' }}>{L.result}</span></span>
        </div>
        <Button variant="ghost" size="sm" onClick={reset}>{L.retake}</Button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '320px minmax(0,1fr)' }}>
        <aside style={{ borderRight: '1px solid var(--graphite-700)', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 16, background: 'var(--graphite-900)' }}>
          <div>
            <div style={mono(13, 'var(--hazard-500)', '.18em')}>{L.answers}</div>
            <div style={{ fontSize: 13, color: 'var(--fg-3)', marginTop: 8 }}>{L.clickRerank}</div>
          </div>
          <div style={{ ...group, border: '1px solid var(--graphite-700)', background: 'var(--graphite-950)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, font: '700 18px/1 var(--font-display)' }}>
              <span style={{ width: 10, height: 10, border: '1px solid var(--hazard-500)', transform: 'rotate(45deg)', boxSizing: 'border-box' }} />{L.nightGroup}
            </div>
            <Field label={L.q1} color="var(--hazard-500)"><GameTags /></Field>
            <Field label={L.q2} color="var(--hazard-500)"><FpsTags /></Field>
          </div>
          <div style={{ ...group, border: '1px solid var(--steel-150)', background: 'var(--steel-50)', color: 'var(--graphite-950)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, font: '700 18px/1 var(--font-display)' }}>
              <span style={{ width: 10, height: 10, background: 'var(--graphite-950)', transform: 'rotate(45deg)' }} />{L.dayGroup}
            </div>
            <Field label={L.q3} color="var(--hazard-700)"><PlatformTags /></Field>
            <div style={field}>
              <div style={mono(12, 'var(--hazard-700)')}>{L.q4}</div>
              <div style={chips}><LocalTags /></div>
              {s.local && <div style={chips}><LocalModelTags /></div>}
            </div>
          </div>
          <div style={{ ...group, border: '1px solid var(--graphite-700)', background: 'var(--graphite-950)' }}>
            <Field label={L.budget} color="var(--fg-3)"><BudgetTags /></Field>
            <Field label={L.screen} color="var(--fg-3)"><ScreenTags /></Field>
          </div>
        </aside>

        <div style={{ padding: '28px 32px 32px', display: 'flex', flexDirection: 'column', gap: 20, minWidth: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16 }}>
            <div>
              <div style={mono(13, 'var(--hazard-500)', '.18em')}>{L.cands}</div>
              <h1 style={{ margin: '10px 0 0', font: '800 56px/.92 var(--font-display)', textTransform: 'uppercase' }}>{L.pickRig}</h1>
            </div>
            <div style={{ display: 'flex', gap: 16, ...mono(12, 'var(--fg-2)', 'normal') }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Marker status="pass" />{L.pass}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Marker status="part" />{L.part}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Marker status="fail" />{L.fail}</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'grid', gridTemplateColumns: GRID, gap: 8, paddingBottom: 12 }}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 6, paddingBottom: 4, font: '400 11px/1.5 var(--font-mono)', letterSpacing: '.1em', color: 'var(--fg-3)' }}>
                <span>{L.drivenBy}</span>
                <div style={{ display: 'flex', gap: 4 }}>
                  <span style={{ padding: '1px 5px', border: '1px solid var(--hazard-500)', color: 'var(--hazard-500)' }}>{L.nS}</span>
                  <span style={{ padding: '1px 5px', background: 'var(--steel-0)', color: 'var(--graphite-950)' }}>{L.dS}</span>
                  <span style={{ padding: '1px 5px', border: '1px solid var(--graphite-500)', color: 'var(--fg-2)' }}>{L.gS}</span>
                </div>
              </div>
              {A.map((c, i) => {
                const sel = i === selIdx, pick = () => set({ aSel: c.m.id });
                return (
                  <div key={c.m.id} onClick={pick} style={{ position: 'relative', padding: '16px 14px', border: '1px solid ' + (sel ? 'var(--hazard-500)' : 'var(--graphite-700)'), background: 'var(--graphite-900)', display: 'flex', flexDirection: 'column', gap: 10, cursor: 'pointer', minWidth: 0, transition: 'border-color 120ms' }}>
                    <div style={{ position: 'absolute', left: -1, right: -1, top: -1, height: 3, background: sel ? 'var(--hazard-500)' : 'transparent' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: 22 }}>
                      <span style={mono(12, 'var(--fg-3)')}>#0{i + 1}</span>
                      {i === 0 && <Badge>{L.topPick}</Badge>}
                    </div>
                    <div style={{ height: 84, background: 'radial-gradient(ellipse at 50% 60%,var(--graphite-700),transparent 70%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src="assets/laptop-front.png" alt="" style={{ maxHeight: 76, maxWidth: '88%', objectFit: 'contain' }} />
                    </div>
                    <div style={{ font: '700 20px/1.05 var(--font-display)', textTransform: 'uppercase' }}>{c.m.name}</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <span style={{ font: '600 15px/1.2 var(--font-body)' }}>{fmt(c.price)}</span>
                      {c.over > 0 && <span style={{ font: '400 12px/1.2 var(--font-mono)', color: 'var(--signal-red)' }}>+{fmt(c.over)}{L.overSuffix}</span>}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                      <span style={{ font: '800 40px/1 var(--font-display)', color: sel ? 'var(--hazard-500)' : 'var(--fg-1)' }}>{pct(c.match)}</span>
                      <span style={mono(11, 'var(--fg-3)')}>% MATCH</span>
                    </div>
                    <div style={{ height: 4, background: 'var(--graphite-700)' }}>
                      <div style={{ height: 4, width: pct(c.match) + '%', background: 'var(--hazard-500)', transition: 'width 420ms var(--ease-out)' }} />
                    </div>
                    <Button variant={sel ? 'primary' : 'outline'} size="sm" fullWidth onClick={e => { e.stopPropagation(); pick(); }}>{sel ? L.sel : L.choose}</Button>
                  </div>
                );
              })}
            </div>

            <div style={secBar}>{L.secNight} <span style={{ color: 'var(--fg-3)' }}>01 · 02</span></div>
            <SpecRows rows={night} cols={A} selIdx={selIdx} />

            <div style={{ background: 'var(--steel-50)', color: 'var(--graphite-950)', marginTop: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', background: 'var(--steel-100)', borderBottom: '1px solid var(--steel-150)', ...mono(12, 'var(--hazard-700)') }}>
                {L.secDay} <span style={{ color: 'var(--graphite-500)' }}>03 · 04</span>
              </div>
              <SpecRows rows={day} cols={A} selIdx={selIdx} light />
            </div>

            <div style={{ ...secBar, marginTop: 12, color: 'var(--fg-2)' }}>{L.secGen}</div>
            <SpecRows rows={gen} cols={A} selIdx={selIdx} />
          </div>
        </div>
      </div>

      <HazardStripe thickness={8} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 32px', background: 'var(--graphite-900)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
          <span style={mono(12, 'var(--fg-3)')}>{L.selected}</span>
          <span style={{ font: '700 26px/1 var(--font-display)', textTransform: 'uppercase' }}>{aS.m.name}</span>
          <span style={{ font: '600 18px/1 var(--font-body)', color: 'var(--fg-2)' }}>{fmt(aS.price)}</span>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <Button variant="outline">{L.fullSpecs}</Button>
          <Button>{L.addCart}</Button>
        </div>
      </div>
    </div>
  );
}
