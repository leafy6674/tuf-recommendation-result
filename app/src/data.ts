// Catalogue and answer options. All specs, FPS figures, VRAM needs and prices are
// placeholders from the design prototype — replace with real figures before launch.

export interface Model {
  id: string;
  name: string;
  cpu: string;
  cores: number;
  gpu: string;
  /** Relative GPU performance index, multiplied into game base FPS. */
  idx: number;
  vram: number;
  ram: number;
  ssd: string;
  screen: number;
  panel: string;
  hz: number;
  weight: number;
  tgp: string;
  /** NT$ price. */
  price: number;
  /** US$ price (set per model, not converted). */
  usd: number;
}

export interface Game {
  id: string;
  label: string;
  en?: string;
  /** Estimated FPS at 2.5K high on the baseline GPU (idx 1.0). */
  base: number;
  /** Engine frame cap, if any. */
  cap?: number;
}

export interface LocalModel {
  id: string;
  label: string;
  /** VRAM needed (GB) at Q4 / Q8 quantisation. */
  q4: number;
  q8: number;
}

export interface BudgetOption {
  v: number;
  l: string;
}

export const MODELS: Model[] = [
  { id: 'a14', name: 'TUF Gaming A14', cpu: 'Ryzen AI 7 350', cores: 8, gpu: 'RTX 5060', idx: 1.0, vram: 8, ram: 32, ssd: '1TB', screen: 14, panel: '2.5K 165Hz', hz: 165, weight: 1.46, tgp: '100W', price: 46900, usd: 1499 },
  { id: 'f16', name: 'TUF Gaming F16', cpu: 'Core i7-14650HX', cores: 16, gpu: 'RTX 5060', idx: 1.05, vram: 8, ram: 16, ssd: '1TB', screen: 16, panel: '2.5K 165Hz', hz: 165, weight: 2.2, tgp: '115W', price: 42900, usd: 1349 },
  { id: 'a16', name: 'TUF Gaming A16', cpu: 'Ryzen 9 8940HX', cores: 16, gpu: 'RTX 5070', idx: 1.22, vram: 8, ram: 32, ssd: '1TB', screen: 16, panel: '2.5K 165Hz', hz: 165, weight: 2.2, tgp: '115W', price: 52900, usd: 1649 },
  { id: 'a18', name: 'TUF Gaming A18', cpu: 'Ryzen 9 8940HX', cores: 16, gpu: 'RTX 5070 Ti', idx: 1.5, vram: 12, ram: 32, ssd: '2TB', screen: 18, panel: '2.5K 240Hz', hz: 240, weight: 2.8, tgp: '140W', price: 64900, usd: 1999 }
];

export const GAMES: Game[] = [
  { id: 'cp', label: 'Cyberpunk 2077', base: 55 },
  { id: 'er', label: 'Elden Ring', base: 62, cap: 60 },
  { id: 'rdr', label: 'Red Dead Redemption 2', base: 62 },
  { id: 'w3', label: 'The Witcher 3', base: 85 },
  { id: 'gta', label: 'GTA V', base: 140 },
  { id: 'bm', label: '黑神話：悟空', en: 'Black Myth: Wukong', base: 48 },
  { id: 'cs', label: 'Counter-Strike 2', base: 220 },
  { id: 'hl', label: 'Half-Life 2', base: 300 }
];

export const PLATFORMS = ['PyTorch', 'TensorFlow', 'CUDA', 'Hugging Face', 'LangChain', 'OpenAI / Claude API', 'Jupyter', 'Docker / WSL2'];
export const DOCKER = 'Docker / WSL2';

export const LOCAL_MODELS: LocalModel[] = [
  { id: 'llama', label: 'Llama 3 8B', q4: 5.5, q8: 9.0 },
  { id: 'qwen', label: 'Qwen 7B', q4: 5.0, q8: 8.4 },
  { id: 'mistral', label: 'Mistral 7B', q4: 4.8, q8: 8.0 },
  { id: 'gemma', label: 'Gemma', q4: 6.0, q8: 10.2 }
];

export const FPS_TARGETS = [30, 60, 120, 144];

export const BUDGETS_TWD: BudgetOption[] = [{ v: 45000, l: '≤ NT$45K' }, { v: 55000, l: '≤ NT$55K' }, { v: 65000, l: '≤ NT$65K' }, { v: 80000, l: '≤ NT$80K' }];
export const BUDGETS_USD: BudgetOption[] = [{ v: 1400, l: '≤ $1,400' }, { v: 1700, l: '≤ $1,700' }, { v: 2000, l: '≤ $2,000' }, { v: 2500, l: '≤ $2,500' }];

/** Budget slider range for page 1c. */
export const BUDGET_SLIDER = {
  zh: { min: 35000, max: 80000, step: 1000 },
  en: { min: 1000, max: 2600, step: 50 }
};

export const SCREENS = [14, 16, 18];
