// Shared answers + view state. All three result pages read the same answers and scoring,
// so editing an answer on one page re-ranks the others.
import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { DOCKER, GAMES, LOCAL_MODELS, MODELS, type Game, type LocalModel, type Model } from './data';
import { STRINGS, type Lang, type Strings } from './i18n';

export interface Answers {
  games: string[];
  fps: number;
  plats: string[];
  local: boolean;
  lm: string[];
  /** NT$ and US$ budgets are kept separately so switching language preserves both. */
  budget: number;
  budgetUsd: number;
  screens: number[];
}

export interface ViewState {
  /** 1a: selected column (null = top-ranked). */
  aSel: string | null;
  /** 1b: Day / Night shift and focused model (null = top-ranked). */
  bMode: 'day' | 'night';
  bModel: string | null;
  /** 1c: Day priority 0–100 and the two pinned models (A, B). */
  wDay: number;
  pick: string[];
}

export type AppState = Answers & ViewState & { lang: Lang };

const INIT: Answers & ViewState = {
  games: ['cp', 'er', 'bm', 'cs'], fps: 60, plats: ['PyTorch', 'CUDA', 'Hugging Face', DOCKER], local: true, lm: ['llama', 'qwen'],
  budget: 55000, budgetUsd: 1700, screens: [16], aSel: null, bMode: 'night', bModel: null, wDay: 50, pick: ['a16', 'a18']
};

type ListKey = 'games' | 'plats' | 'lm' | 'screens';

export interface FpsResult { g: Game; v: number; capped: boolean; pass: boolean }

export interface Score {
  m: Model;
  price: number;
  fps: FpsResult[];
  passN: number;
  nGames: number;
  hzOk: boolean;
  night: number;
  day: number;
  lms: LocalModel[];
  q8n: number;
  q4n: number;
  ramOk: boolean;
  coreOk: boolean;
  needRam: boolean;
  over: number;
  scOk: boolean;
  match: number;
}

export function score(s: AppState, m: Model, w: number): Score {
  const en = s.lang === 'en';
  const games = GAMES.filter(g => s.games.includes(g.id));
  const fps = games.map(g => {
    const raw = g.base * m.idx;
    const v = Math.round(Math.min(g.cap ?? 9999, raw));
    return { g, v, capped: !!g.cap && raw >= g.cap, pass: v >= s.fps };
  });
  const passN = fps.filter(f => f.pass).length;
  const hzOk = m.hz >= s.fps;
  const night = (games.length ? passN / games.length : 1) * 0.85 + (hzOk ? 0.15 : 0);
  const lms = s.local ? LOCAL_MODELS.filter(l => s.lm.includes(l.id)) : [];
  const q8n = lms.filter(l => m.vram >= l.q8).length, q4n = lms.filter(l => m.vram >= l.q4).length;
  const vramS = lms.length ? (q4n / lms.length) * 0.5 + (q8n / lms.length) * 0.5 : (m.vram >= 8 ? 1 : 0.8);
  const needRam = s.local || s.plats.includes(DOCKER);
  const ramOk = m.ram >= 32 || !needRam, coreOk = m.cores >= 16 || s.plats.length < 4;
  const day = 0.5 * vramS + 0.3 * (ramOk ? 1 : 0.5) + 0.2 * (coreOk ? 1 : 0.7);
  const budget = en ? s.budgetUsd : s.budget, price = en ? m.usd : m.price;
  const over = price - budget, bFit = over <= 0 ? 1 : Math.max(0, 1 - over / (budget * 0.27));
  const scOk = !s.screens.length || s.screens.includes(m.screen);
  const match = (w * day + (1 - w) * night) * (0.7 + 0.3 * bFit) * (0.8 + 0.2 * (scOk ? 1 : 0.6));
  return { m, price, fps, passN, nGames: games.length, hzOk, night, day, lms, q8n, q4n, ramOk, coreOk, needRam, over, scOk, match };
}

export function ranked(s: AppState, w: number): Score[] {
  return MODELS.map(m => score(s, m, w)).sort((a, b) => b.match - a.match);
}

interface Ctx {
  s: AppState;
  L: Strings;
  en: boolean;
  set: (patch: Partial<AppState> | ((s: AppState) => Partial<AppState>)) => void;
  toggle: (k: ListKey, v: string | number) => void;
  reset: () => void;
  fmt: (n: number) => string;
  priceOf: (m: Model) => number;
  budget: number;
  setBudget: (v: number) => void;
  gameLabel: (g: Game) => string;
}

const AppCtx = createContext<Ctx | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [s, setS] = useState<AppState>({ ...INIT, lang: 'zh' });
  const set = useCallback<Ctx['set']>(p => setS(prev => ({ ...prev, ...(typeof p === 'function' ? p(prev) : p) })), []);
  const toggle = useCallback((k: ListKey, v: string | number) => setS(prev => {
    const list = prev[k] as (string | number)[];
    return { ...prev, [k]: list.includes(v) ? list.filter(x => x !== v) : [...list, v] };
  }), []);
  // Retake clears answers and view state but keeps the current language.
  const reset = useCallback(() => setS(prev => ({ ...INIT, lang: prev.lang })), []);
  const value = useMemo<Ctx>(() => {
    const en = s.lang === 'en';
    return {
      s, L: STRINGS[s.lang], en, set, toggle, reset,
      fmt: n => (en ? '$' : 'NT$') + n.toLocaleString('en-US'),
      priceOf: m => (en ? m.usd : m.price),
      budget: en ? s.budgetUsd : s.budget,
      setBudget: v => set(en ? { budgetUsd: v } : { budget: v }),
      gameLabel: g => (en && g.en ? g.en : g.label)
    };
  }, [s, set, toggle, reset]);
  return <AppCtx.Provider value={value}>{children}</AppCtx.Provider>;
}

export function useApp(): Ctx {
  const c = useContext(AppCtx);
  if (!c) throw new Error('useApp must be used inside <AppProvider>');
  return c;
}

export const pct = (x: number) => Math.round(x * 100);
