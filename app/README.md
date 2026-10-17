# TUF Recommendation Result

React + TypeScript (Vite) implementation of `project/Recommendation Result.dc.html`: three result-page ideas
on one canvas, all reading one shared set of answers.

- **1a Tier board:** `src/views/TierBoard.tsx`
- **1b Two shifts:** `src/views/TwoShifts.tsx`
- **1c Balance:** `src/views/Balance.tsx`

```sh
npm install
npm run dev      # local dev server
npm run build    # typecheck + production build to dist/
```

## Layout

- `src/state.tsx`: shared answers, view state and language, plus the match scoring (`score`, `ranked`). Retake resets everything except the language.
- `src/data.ts`: models, games, platforms, local LLMs, budgets. **Every spec, FPS figure, VRAM need and price is a placeholder from the design.**
- `src/i18n.ts`: 中文 · NT$ and EN · USD copy. US$ prices are set per model, not converted.
- `src/answers.tsx`: answer chip groups and the diamond status marker.
- `src/ds/`: TypeScript ports of the TUF design-system components used here (Button, Tag, Badge, HazardStripe).
- `src/styles/`: design-system tokens, copied unchanged except that fonts load via `<link>` in `index.html`.
