export type Lang = 'zh' | 'en';

const ZH = {
  crumbReq: '// 需求圖 REQUIREMENTS →', result: '推薦結果 RESULT', retake: '重新填寫 RETAKE', answers: '// 你的需求 YOUR ANSWERS', clickRerank: '點選即重新排名 · Click to re-rank',
  nightGroup: '夜間 NIGHT · 3D 遊戲', dayGroup: '日間 DAY · AI 開發', q1: '01 // 遊戲 GAMES', q2: '02 // 最低 FPS', q3: '03 // 平台 PLATFORM', q4: '04 // 本機 LOCAL AI', budget: '預算 BUDGET', screen: '尺寸 SCREEN SIZE',
  cands: '// 4 台候選 CANDIDATES · 依匹配度排序', pickRig: '選你的機台 Pick your rig', pass: '達標', part: '部分', fail: '未達', drivenBy: '需求來源 DRIVEN BY', nS: '夜', dS: '日', gS: '共',
  secNight: '// 夜間 NIGHT · 3D 遊戲', secDay: '// 日間 DAY · AI 開發', secGen: '// 共通 GENERAL · 預算 · 尺寸', selected: '已選 SELECTED', fullSpecs: '查看規格 FULL SPECS', addCart: '加入購物車 ADD TO CART',
  resultEyebrow: '// 推薦結果 RESULT', switchShift: '切換班別 SWITCH SHIFT', dayShiftEyebrow: '// 日間班 DAY SHIFT · AI 開發', nightShiftEyebrow: '// 夜間班 NIGHT SHIFT · 3D 遊戲', dawn: '晨曦執政官', reaper: '暗夜死神',
  match: '總匹配 MATCH', dayFit: '日間適配 DAY FIT', nightFit: '夜間適配 NIGHT FIT', fpsEyebrow: '01 · 02 // 預估 FPS ESTIMATED', fpsTitle: '2.5K · 高畫質 HIGH', target: '目標 TARGET', noGames: '選擇遊戲以預估 FPS · Pick games to estimate FPS',
  vramEyebrow: '04 // 本機 AI · VRAM', vramTitle: '小型開源模型能不能跑？', runtime: '執行環境 RUNTIME · Ollama / LM Studio', noLocal: '改用雲端 API — VRAM 不是關鍵 · Cloud API, VRAM is not the constraint', selectRig: '選這台 SELECT RIG',
  balance: '權衡 BALANCE', twoShifts: '// 兩個班，一台機 TWO SHIFTS, ONE RIG', whichShift: '你更看重哪一班？', priority: '優先權重 PRIORITY', leanDay: '← 偏重 AI 開發 DAY', leanNight: 'NIGHT 偏重 3D 遊戲 →', budgetCap: '預算上限 BUDGET',
  clickTwo: '點選機台釘選比較 · CLICK TWO RIGS TO COMPARE', pickOne: '再選一台 · Pick one more', picked: '已選',
  yes: '是 YES · 本機', no: '否 NO · 雲端 API', overSuffix: ' 超出預算', sel: '已選 SELECTED', choose: '選擇 SELECT', gpuSub: '顯示卡', fpsSub: '預估 FPS', engineCap: '引擎上限 engine cap', screenL: '螢幕', targetW: '目標 ',
  vramSub: '顯示記憶體', q8fits: 'Q8 可跑 ', q8ok: 'Q8 可跑', q4only: '僅 Q4 only', need: '需 ', q8need: 'Q8 需 ', short: '不足', localInf: '本機推論', cpuSub: '處理器', cores: ' 核心 cores', ramSub: '記憶體', rec32: '建議 32GB', storage: '儲存',
  sizeL: '尺寸', priceL: '價格', overP: '超出 +', inBudget: '預算內 in budget', shiftDay: '日間 DAY', shiftDaySub: '晨曦執政官 · AI 開發', shiftNight: '夜間 NIGHT', shiftNightSub: '暗夜死神 · 3D 遊戲', coreShort: '核',
  display: '螢幕 DISPLAY', weight: '重量 WEIGHT', gamesPass: ' 款達標', capNote: '引擎上限 ENGINE CAP 60', atTarget: '達標 AT TARGET', below: '未達 BELOW TARGET', q4o: '僅 Q4', ramHint: 'Docker / 本機 AI 建議 32GB', ssdSub: '模型 + 資料集',
  overB: '超出預算 +', inB: '預算內 IN BUDGET', altDay: '看日間班 DAY SHIFT', altNight: '看夜間班 NIGHT SHIFT', overC: ' · 超出 +', inC: ' · 預算內', gamesGe: ' 款 ≥ ', price: '價格 PRICE',
  langSwitch: 'LANGUAGE · CURRENCY', topPick: 'Top pick',
  hz: (hz: number, ok: boolean, f: number) => '螢幕 ' + hz + 'Hz ' + (ok ? '≥' : '<') + ' 目標 ' + f + ' FPS · Display refresh ' + (ok ? 'covers' : 'below') + ' target'
};

export type Strings = typeof ZH;

const EN: Strings = {
  crumbReq: '// REQUIREMENTS →', result: 'RESULT', retake: 'RETAKE', answers: '// YOUR ANSWERS', clickRerank: 'Click any answer to re-rank',
  nightGroup: 'NIGHT · 3D GAMING', dayGroup: 'DAY · AI DEV', q1: '01 // GAMES', q2: '02 // MIN FPS', q3: '03 // PLATFORM', q4: '04 // LOCAL AI', budget: 'BUDGET', screen: 'SCREEN SIZE',
  cands: '// 4 CANDIDATES · SORTED BY MATCH', pickRig: 'Pick your rig', pass: 'Pass', part: 'Partial', fail: 'Miss', drivenBy: 'DRIVEN BY', nS: 'N', dS: 'D', gS: 'G',
  secNight: '// NIGHT · 3D GAMING', secDay: '// DAY · AI DEV', secGen: '// GENERAL · BUDGET · SIZE', selected: 'SELECTED', fullSpecs: 'FULL SPECS', addCart: 'ADD TO CART',
  resultEyebrow: '// RESULT', switchShift: 'SWITCH SHIFT', dayShiftEyebrow: '// DAY SHIFT · AI DEV', nightShiftEyebrow: '// NIGHT SHIFT · 3D GAMING', dawn: 'DAWN ARCHON', reaper: 'REAPER',
  match: 'MATCH', dayFit: 'DAY FIT', nightFit: 'NIGHT FIT', fpsEyebrow: '01 · 02 // ESTIMATED FPS', fpsTitle: '2.5K · HIGH PRESET', target: 'TARGET', noGames: 'Pick games to estimate FPS',
  vramEyebrow: '04 // LOCAL AI · VRAM', vramTitle: 'Can it run small open models?', runtime: 'RUNTIME · Ollama / LM Studio', noLocal: 'Cloud API selected. VRAM is not the constraint.', selectRig: 'SELECT RIG',
  balance: 'BALANCE', twoShifts: '// TWO SHIFTS, ONE RIG', whichShift: 'WHICH SHIFT MATTERS MORE?', priority: 'PRIORITY', leanDay: '← LEAN AI DEV', leanNight: 'LEAN 3D GAMING →', budgetCap: 'BUDGET CAP',
  clickTwo: 'CLICK TWO RIGS TO COMPARE', pickOne: 'Pick one more', picked: 'Selected',
  yes: 'YES · LOCAL', no: 'NO · CLOUD API', overSuffix: ' over budget', sel: 'SELECTED', choose: 'SELECT', gpuSub: 'GRAPHICS', fpsSub: 'EST. FPS', engineCap: 'engine cap', screenL: 'Display', targetW: 'target ',
  vramSub: 'VIDEO MEMORY', q8fits: 'Q8 fits ', q8ok: 'Q8 fits', q4only: 'Q4 only', need: 'needs ', q8need: 'Q8 needs ', short: 'Too small', localInf: 'LOCAL INFERENCE', cpuSub: 'PROCESSOR', cores: ' cores', ramSub: 'MEMORY', rec32: '32GB recommended', storage: 'STORAGE',
  sizeL: 'Size', priceL: 'Price', overP: 'Over by +', inBudget: 'In budget', shiftDay: 'DAY', shiftDaySub: 'DAWN ARCHON · AI DEV', shiftNight: 'NIGHT', shiftNightSub: 'REAPER · 3D GAMING', coreShort: 'C',
  display: 'DISPLAY', weight: 'WEIGHT', gamesPass: ' games at target', capNote: 'ENGINE CAP 60', atTarget: 'AT TARGET', below: 'BELOW TARGET', q4o: 'Q4 only', ramHint: '32GB recommended for Docker / local AI', ssdSub: 'Models + datasets',
  overB: 'Over budget +', inB: 'IN BUDGET', altDay: 'DAY SHIFT', altNight: 'NIGHT SHIFT', overC: ' · over +', inC: ' · in budget', gamesGe: ' games ≥ ', price: 'PRICE',
  langSwitch: 'LANGUAGE · CURRENCY', topPick: 'Top pick',
  hz: (hz, ok, f) => 'Display ' + hz + 'Hz ' + (ok ? '≥' : '<') + ' target ' + f + ' FPS'
};

export const STRINGS: Record<Lang, Strings> = { zh: ZH, en: EN };
