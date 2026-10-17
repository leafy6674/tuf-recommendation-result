// Answer chip groups shared by the result pages (questions 01–04, budget, screen size).
import type { CSSProperties } from 'react';
import { Tag } from './ds';
import { BUDGETS_TWD, BUDGETS_USD, FPS_TARGETS, GAMES, LOCAL_MODELS, PLATFORMS, SCREENS } from './data';
import { useApp } from './state';

/** Tag style override for chips placed on light (Day / steel) surfaces. */
const light = (sel: boolean): CSSProperties => sel
  ? { color: 'var(--hazard-700)', borderColor: 'var(--hazard-700)', background: 'var(--hazard-50)' }
  : { color: 'var(--graphite-700)', borderColor: 'var(--steel-300)', background: 'transparent' };

export function GameTags() {
  const { s, toggle, gameLabel } = useApp();
  return <>{GAMES.map(g => <Tag key={g.id} selected={s.games.includes(g.id)} onClick={() => toggle('games', g.id)}>{gameLabel(g)}</Tag>)}</>;
}

export function FpsTags() {
  const { s, set } = useApp();
  return <>{FPS_TARGETS.map(f => <Tag key={f} selected={s.fps === f} onClick={() => set({ fps: f })}>{f} FPS</Tag>)}</>;
}

export function PlatformTags() {
  const { s, toggle } = useApp();
  return <>{PLATFORMS.map(p => { const on = s.plats.includes(p); return <Tag key={p} selected={on} onClick={() => toggle('plats', p)} style={light(on)}>{p}</Tag>; })}</>;
}

export function LocalTags() {
  const { s, set, L } = useApp();
  return <>
    <Tag selected={s.local} onClick={() => set({ local: true })} style={light(s.local)}>{L.yes}</Tag>
    <Tag selected={!s.local} onClick={() => set({ local: false })} style={light(!s.local)}>{L.no}</Tag>
  </>;
}

export function LocalModelTags() {
  const { s, toggle } = useApp();
  return <>{LOCAL_MODELS.map(l => { const on = s.lm.includes(l.id); return <Tag key={l.id} selected={on} onClick={() => toggle('lm', l.id)} style={light(on)}>{l.label}</Tag>; })}</>;
}

export function BudgetTags() {
  const { en, budget, setBudget } = useApp();
  return <>{(en ? BUDGETS_USD : BUDGETS_TWD).map(b => <Tag key={b.v} selected={budget === b.v} onClick={() => setBudget(b.v)}>{b.l}</Tag>)}</>;
}

export function ScreenTags() {
  const { s, toggle } = useApp();
  return <>{SCREENS.map(n => <Tag key={n} selected={s.screens.includes(n)} onClick={() => toggle('screens', n)}>{n}″</Tag>)}</>;
}

export type Status = 'pass' | 'part' | 'fail' | null;

const MARK: Record<'pass' | 'part' | 'fail', [string, string]> = {
  pass: ['var(--signal-green)', 'var(--signal-green)'],
  fail: ['transparent', 'var(--signal-red)'],
  part: ['transparent', 'var(--hazard-500)']
};

/** Rotated-square status marker (the design system uses diamonds, never circles). */
export function Marker({ status, size = 9, style }: { status: Status; size?: number; style?: CSSProperties }) {
  const [bg, bd] = status ? MARK[status] : ['transparent', 'transparent'];
  return <span style={{ width: size, height: size, flex: 'none', transform: 'rotate(45deg)', boxSizing: 'border-box', background: bg, border: '1.5px solid ' + bd, ...style }} />;
}
