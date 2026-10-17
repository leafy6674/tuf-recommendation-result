import { Balance } from './views/Balance';
import { TierBoard } from './views/TierBoard';
import { TwoShifts } from './views/TwoShifts';
import { useApp } from './state';
import type { Lang } from './i18n';

const LANGS: { k: Lang; label: string }[] = [{ k: 'zh', label: '中文 · NT$' }, { k: 'en', label: 'EN · USD' }];

function LangSwitch() {
  const { s, L, set } = useApp();
  return (
    <div className="lang-switch">
      <span className="lang-switch__label">{L.langSwitch}</span>
      <div className="lang-switch__group" role="radiogroup" aria-label={L.langSwitch}>
        {LANGS.map(o => (
          <button key={o.k} type="button" role="radio" aria-checked={s.lang === o.k} className="lang-switch__opt" onClick={() => set({ lang: o.k })}>{o.label}</button>
        ))}
      </div>
    </div>
  );
}

const OPTIONS = [
  { id: '1a', label: 'Tier board — ranked comparison table; edit answers in the sidebar to re-rank', View: TierBoard },
  { id: '1b', label: 'Two shifts — one rig at a time; flip Day / Night to see AI fit or game FPS', View: TwoShifts },
  { id: '1c', label: 'Balance — slide Day ↔ Night priority and budget; rows re-rank live; pin two to compare', View: Balance }
];

export function App() {
  const { s } = useApp();
  return (
    <div lang={s.lang === 'en' ? 'en' : 'zh-Hant'}>
      <LangSwitch />
      <section className="dv-turn" id="t1">
        <div className="dv-thd"><a className="dv-tid" href="#t1">1</a><span className="dv-tname">推薦結果 · Recommendation result — three interaction ideas</span></div>
        <p className="dv-intro">All three pages read the same answers (01–04, budget, screen size) and the same scoring, so editing an answer in one page updates the others. Day content sits on steel, Night on graphite, as in the requirements map. Specs, FPS and prices are placeholders.</p>
        <div className="dv-opts">
          {OPTIONS.map(({ id, label, View }) => (
            <div key={id} className="dv-opt" id={id}>
              <div className="dv-olabel"><a className="dv-oid" href={'#' + id}>{id}</a>{label}</div>
              <div className="dv-card"><View /></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
