// TypeScript ports of the TUF Gaming design-system components used by the result pages
// (source: project/_ds/.../_ds_bundle.js). Behaviour and styling are kept identical.
import { useState, type CSSProperties, type ReactNode, type ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

const H: Record<ButtonSize, string> = { sm: 'var(--control-h-sm)', md: 'var(--control-h-md)', lg: 'var(--control-h-lg)' };
const P: Record<ButtonSize, string> = { sm: '0 14px', md: '0 22px', lg: '0 30px' };
const FS: Record<ButtonSize, string> = { sm: '13px', md: '15px', lg: '17px' };

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  style?: CSSProperties;
}

export function Button({ variant = 'primary', size = 'md', disabled = false, iconLeft, iconRight, fullWidth = false, children, style, ...rest }: ButtonProps) {
  const [hov, setHov] = useState(false);
  const [down, setDown] = useState(false);
  const v = {
    primary: { bg: hov ? 'var(--accent-hover)' : 'var(--accent)', fg: 'var(--on-accent)', bd: 'transparent' },
    secondary: { bg: hov ? 'var(--steel-0)' : 'var(--steel-100)', fg: 'var(--graphite-950)', bd: 'transparent' },
    outline: { bg: hov ? 'rgba(255,255,255,.06)' : 'transparent', fg: 'var(--fg-1)', bd: hov ? 'var(--fg-1)' : 'var(--border-strong)' },
    ghost: { bg: hov ? 'rgba(255,255,255,.06)' : 'transparent', fg: hov ? 'var(--accent)' : 'var(--fg-1)', bd: 'transparent' }
  }[variant];
  return (
    <button
      type="button"
      disabled={disabled}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => { setHov(false); setDown(false); }}
      onMouseDown={() => setDown(true)}
      onMouseUp={() => setDown(false)}
      style={{
        display: fullWidth ? 'flex' : 'inline-flex',
        width: fullWidth ? '100%' : undefined,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        height: H[size],
        padding: P[size],
        background: variant === 'primary' && down ? 'var(--accent-press)' : v.bg,
        color: v.fg,
        border: '1px solid ' + v.bd,
        borderRadius: 0,
        clipPath: variant === 'ghost' ? undefined : 'var(--clip-chamfer-sm)',
        font: '700 ' + FS[size] + '/1 var(--font-display)',
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        transform: down ? 'translateY(1px)' : 'none',
        transition: 'background var(--dur-fast) var(--ease-hard),color var(--dur-fast),border-color var(--dur-fast)',
        ...style
      }}
      {...rest}
    >
      {iconLeft}{children}{iconRight}
    </button>
  );
}

export interface TagProps {
  children?: ReactNode;
  selected?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
}

export function Tag({ children, selected = false, onClick, style }: TagProps) {
  const [h, setH] = useState(false);
  return (
    <span
      onClick={onClick}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      role={onClick ? 'button' : undefined}
      aria-pressed={onClick ? selected : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } } : undefined}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        height: 26,
        whiteSpace: 'nowrap',
        flex: 'none',
        padding: '0 10px',
        border: '1px solid ' + (selected ? 'var(--accent)' : h && onClick ? 'var(--fg-2)' : 'var(--border-strong)'),
        color: selected ? 'var(--accent)' : 'var(--fg-2)',
        background: selected ? 'rgba(249,116,0,.08)' : 'transparent',
        font: 'var(--text-label)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        cursor: onClick ? 'pointer' : 'default',
        ...style
      }}
    >
      {children}
    </span>
  );
}

type BadgeTone = 'accent' | 'neutral' | 'dark' | 'success' | 'danger' | 'warning';

export function Badge({ tone = 'accent', children, style }: { tone?: BadgeTone; children?: ReactNode; style?: CSSProperties }) {
  const t = {
    accent: ['var(--accent)', 'var(--on-accent)'],
    neutral: ['var(--steel-100)', 'var(--graphite-950)'],
    dark: ['var(--graphite-700)', 'var(--fg-1)'],
    success: ['var(--success)', 'var(--graphite-950)'],
    danger: ['var(--danger)', '#fff'],
    warning: ['var(--warning)', 'var(--graphite-950)']
  }[tone];
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      height: 22,
      padding: '0 8px 0 10px',
      background: t[0],
      color: t[1],
      clipPath: 'polygon(6px 0,100% 0,100% 100%,0 100%,0 6px)',
      font: '700 12px/1 var(--font-display)',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      ...style
    }}>
      {children}
    </span>
  );
}

export function HazardStripe({ orientation = 'horizontal', thickness = 12, length = '100%', style }: {
  orientation?: 'horizontal' | 'vertical';
  thickness?: number | string;
  length?: number | string;
  style?: CSSProperties;
}) {
  const hz = orientation === 'horizontal';
  return (
    <div aria-hidden="true" style={{
      width: hz ? length : thickness,
      height: hz ? thickness : length,
      background: 'var(--hazard-stripes)',
      flex: 'none',
      ...style
    }} />
  );
}
