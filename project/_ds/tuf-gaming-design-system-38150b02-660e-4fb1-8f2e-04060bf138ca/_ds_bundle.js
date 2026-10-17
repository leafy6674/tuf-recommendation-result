/* @ds-bundle: {"format":4,"namespace":"TUFGamingDesignSystem_38150b","components":[{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"HazardStripe","sourcePath":"components/display/HazardStripe.jsx"},{"name":"Tabs","sourcePath":"components/display/Tabs.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/display/Badge.jsx":"a5710d35e8a8","components/display/Card.jsx":"a10c76401158","components/display/HazardStripe.jsx":"48e1394d7310","components/display/Tabs.jsx":"845ff95e8f81","components/display/Tag.jsx":"c50dd5c4b1c4","components/feedback/Dialog.jsx":"921d7436a7af","components/feedback/Toast.jsx":"382793a85d09","components/feedback/Tooltip.jsx":"47763d7497c9","components/forms/Button.jsx":"2f250cc7b471","components/forms/Checkbox.jsx":"ef2e955da57c","components/forms/IconButton.jsx":"97d7ff0e671b","components/forms/Input.jsx":"8b84e7036705","components/forms/Radio.jsx":"d95aa7009b66","components/forms/Select.jsx":"007972f575f6","components/forms/Switch.jsx":"eb7a12e094f7","ui_kits/storefront/Home.jsx":"e607c834ba01","ui_kits/storefront/Nav.jsx":"b40cc20a91a2","ui_kits/storefront/Product.jsx":"1faeee11ba44","ui_kits/storefront/Shared.jsx":"cf855d5c0112"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TUFGamingDesignSystem_38150b = window.TUFGamingDesignSystem_38150b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/display/Badge.jsx
try { (() => {
function Badge({
  tone = 'accent',
  children,
  style
}) {
  const t = {
    accent: ['var(--accent)', 'var(--on-accent)'],
    neutral: ['var(--steel-100)', 'var(--graphite-950)'],
    dark: ['var(--graphite-700)', 'var(--fg-1)'],
    success: ['var(--success)', 'var(--graphite-950)'],
    danger: ['var(--danger)', '#fff'],
    warning: ['var(--warning)', 'var(--graphite-950)']
  }[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
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
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function Card({
  image,
  eyebrow,
  title,
  description,
  footer,
  badge,
  interactive = false,
  children,
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-1)',
      border: '1px solid ' + (interactive && h ? 'var(--accent)' : 'var(--border-subtle)'),
      clipPath: 'var(--clip-chamfer-tr)',
      transition: 'border-color var(--dur-base) var(--ease-hard)',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      zIndex: 1
    }
  }, badge), image && /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4/3',
      background: 'radial-gradient(ellipse at 50% 60%,var(--graphite-700),var(--surface-1) 70%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '86%',
      height: '86%',
      objectFit: 'contain',
      transform: interactive && h ? 'scale(1.04)' : 'none',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      flex: 1
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-label)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--accent)'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 22px/1.1 var(--font-display)',
      textTransform: 'uppercase',
      color: 'var(--fg-1)'
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px/1.5 var(--font-body)',
      color: 'var(--fg-2)'
    }
  }, description), children, footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 12,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, footer)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 0,
      top: 0,
      width: 14,
      height: 14,
      background: interactive && h ? 'var(--accent)' : 'var(--border-strong)',
      clipPath: 'polygon(0 0,100% 0,100% 100%)'
    }
  }));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/HazardStripe.jsx
try { (() => {
function HazardStripe({
  orientation = 'horizontal',
  thickness = 12,
  length = '100%',
  style
}) {
  const hz = orientation === 'horizontal';
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      width: hz ? length : thickness,
      height: hz ? thickness : length,
      background: 'var(--hazard-stripes)',
      flex: 'none',
      ...style
    }
  });
}
Object.assign(__ds_scope, { HazardStripe });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/HazardStripe.jsx", error: String((e && e.message) || e) }); }

// components/display/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 0,
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, items.map(it => {
    const id = typeof it === 'string' ? it : it.value;
    const lb = typeof it === 'string' ? it : it.label;
    const on = id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(id),
      style: {
        position: 'relative',
        background: 'none',
        border: 0,
        padding: '14px 20px',
        cursor: 'pointer',
        color: on ? 'var(--fg-1)' : 'var(--fg-3)',
        font: '700 15px/1 var(--font-display)',
        letterSpacing: '.1em',
        textTransform: 'uppercase'
      }
    }, lb, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -1,
        height: 3,
        background: on ? 'var(--accent)' : 'transparent'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function Tag({
  children,
  selected = false,
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
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
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  actions,
  onClose,
  width = 480
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(5,5,6,.72)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: '100%',
      background: 'var(--surface-1)',
      border: '1px solid var(--border-strong)',
      boxShadow: 'var(--shadow-2)',
      clipPath: 'var(--clip-chamfer-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: 'var(--hazard-stripes)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 24px 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 26px/1.05 var(--font-display)',
      textTransform: 'uppercase'
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Close",
    onClick: onClose,
    style: {
      background: 'none',
      border: 0,
      color: 'var(--fg-3)',
      fontSize: 22,
      lineHeight: 1,
      cursor: 'pointer',
      padding: 0
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 24px 24px',
      font: '400 15px/1.55 var(--font-body)',
      color: 'var(--fg-2)'
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10,
      padding: '16px 24px',
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--surface-2)'
    }
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  tone = 'info',
  title,
  children,
  onClose,
  style
}) {
  const c = {
    info: 'var(--info)',
    success: 'var(--success)',
    warning: 'var(--warning)',
    danger: 'var(--danger)',
    accent: 'var(--accent)'
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start',
      width: 360,
      maxWidth: '100%',
      padding: '14px 16px',
      background: 'var(--surface-3)',
      border: '1px solid var(--border-strong)',
      boxShadow: 'var(--shadow-2)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      marginTop: 5,
      flex: 'none',
      background: c,
      transform: 'rotate(45deg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 15px/1.2 var(--font-display)',
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--fg-1)'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px/1.45 var(--font-body)',
      color: 'var(--fg-2)',
      marginTop: 3
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      background: 'none',
      border: 0,
      color: 'var(--fg-3)',
      cursor: 'pointer',
      fontSize: 18,
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  children,
  placement = 'top'
}) {
  const [o, setO] = React.useState(false);
  const top = placement === 'top';
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setO(true),
    onMouseLeave: () => setO(false),
    onFocus: () => setO(true),
    onBlur: () => setO(false),
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, children, o && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      [top ? 'bottom' : 'top']: 'calc(100% + 8px)',
      transform: 'translateX(-50%)',
      whiteSpace: 'nowrap',
      padding: '6px 10px',
      background: 'var(--steel-50)',
      color: 'var(--graphite-950)',
      font: '500 12px/1.2 var(--font-body)',
      zIndex: 50,
      boxShadow: 'var(--shadow-1)'
    }
  }, content, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '50%',
      [top ? 'top' : 'bottom']: '100%',
      marginLeft: -5,
      borderLeft: '5px solid transparent',
      borderRight: '5px solid transparent',
      [top ? 'borderTop' : 'borderBottom']: '5px solid var(--steel-50)'
    }
  })));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const H = {
  sm: 'var(--control-h-sm)',
  md: 'var(--control-h-md)',
  lg: 'var(--control-h-lg)'
};
const P = {
  sm: '0 14px',
  md: '0 22px',
  lg: '0 30px'
};
const FS = {
  sm: '13px',
  md: '15px',
  lg: '17px'
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  iconLeft,
  iconRight,
  fullWidth = false,
  children,
  style,
  ...rest
}) {
  const [hov, setHov] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const v = {
    primary: {
      bg: hov ? 'var(--accent-hover)' : 'var(--accent)',
      fg: 'var(--on-accent)',
      bd: 'transparent'
    },
    secondary: {
      bg: hov ? 'var(--steel-0)' : 'var(--steel-100)',
      fg: 'var(--graphite-950)',
      bd: 'transparent'
    },
    outline: {
      bg: hov ? 'rgba(255,255,255,.06)' : 'transparent',
      fg: 'var(--fg-1)',
      bd: hov ? 'var(--fg-1)' : 'var(--border-strong)'
    },
    ghost: {
      bg: hov ? 'rgba(255,255,255,.06)' : 'transparent',
      fg: hov ? 'var(--accent)' : 'var(--fg-1)',
      bd: 'transparent'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => {
      setHov(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    style: {
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
      opacity: disabled ? .4 : 1,
      transform: down ? 'translateY(1px)' : 'none',
      transition: 'background var(--dur-fast) var(--ease-hard),color var(--dur-fast),border-color var(--dur-fast)',
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled = false
}) {
  const [c, setC] = React.useState(!!defaultChecked);
  const on = checked ?? c;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      font: '400 15px/1.3 var(--font-body)',
      color: 'var(--fg-1)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: e => {
      setC(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: on ? 'var(--accent)' : 'var(--surface-2)',
      border: '1px solid ' + (on ? 'var(--accent)' : 'var(--border-strong)')
    }
  }, on && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 11,
      borderRight: '2px solid var(--on-accent)',
      borderBottom: '2px solid var(--on-accent)',
      transform: 'translateY(-1px) rotate(45deg)'
    }
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon,
  label,
  variant = 'outline',
  size = 'md',
  disabled = false,
  style,
  ...rest
}) {
  const [hov, setHov] = React.useState(false);
  const s = {
    sm: 32,
    md: 44,
    lg: 56
  }[size];
  const bg = variant === 'solid' ? hov ? 'var(--accent-hover)' : 'var(--accent)' : hov ? 'rgba(255,255,255,.08)' : 'transparent';
  const fg = variant === 'solid' ? 'var(--on-accent)' : hov ? 'var(--accent)' : 'var(--fg-1)';
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      width: s,
      height: s,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: bg,
      color: fg,
      border: variant === 'outline' ? '1px solid ' + (hov ? 'var(--fg-2)' : 'var(--border-strong)') : '1px solid transparent',
      borderRadius: 0,
      clipPath: variant === 'ghost' ? undefined : 'var(--clip-chamfer-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      padding: 0,
      transition: 'all var(--dur-fast) var(--ease-hard)',
      ...style
    }
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  iconLeft,
  style,
  inputStyle,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  const bd = error ? 'var(--danger)' : f ? 'var(--accent)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-label)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--fg-2)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: 'var(--control-h-md)',
      padding: '0 14px',
      background: 'var(--surface-2)',
      border: '1px solid ' + bd,
      boxShadow: f ? 'inset 0 -2px 0 var(--accent)' : 'none',
      color: 'var(--fg-3)',
      transition: 'border-color var(--dur-fast)'
    }
  }, iconLeft, /*#__PURE__*/React.createElement("input", _extends({
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      flex: 1,
      minWidth: 0,
      background: 'none',
      border: 0,
      outline: 'none',
      color: 'var(--fg-1)',
      font: '400 15px/1 var(--font-body)',
      ...inputStyle
    }
  }, rest))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12px/1.3 var(--font-body)',
      color: error ? 'var(--danger)' : 'var(--fg-3)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  name,
  checked,
  onChange,
  label,
  value,
  disabled = false
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      whiteSpace: 'nowrap',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      font: '400 15px/1.3 var(--font-body)',
      color: 'var(--fg-1)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid ' + (checked ? 'var(--accent)' : 'var(--border-strong)'),
      background: 'var(--surface-2)',
      transform: 'rotate(45deg) scale(.82)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      background: 'var(--accent)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  value,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-label)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--fg-2)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    value: value,
    onChange: onChange,
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: 'var(--control-h-md)',
      padding: '0 40px 0 14px',
      background: 'var(--surface-2)',
      border: '1px solid var(--border-strong)',
      borderRadius: 0,
      color: 'var(--fg-1)',
      font: '500 15px/1 var(--font-body)',
      cursor: 'pointer'
    }
  }, rest), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      width: 8,
      height: 8,
      borderRight: '2px solid var(--accent)',
      borderBottom: '2px solid var(--accent)',
      transform: 'translateY(-70%) rotate(45deg)',
      pointerEvents: 'none'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled = false
}) {
  const [c, setC] = React.useState(!!defaultChecked);
  const on = checked ?? c;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      font: '400 15px/1.3 var(--font-body)',
      color: 'var(--fg-1)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: on,
    disabled: disabled,
    onChange: e => {
      setC(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 44,
      height: 22,
      flex: 'none',
      background: on ? 'var(--accent)' : 'var(--surface-3)',
      border: '1px solid ' + (on ? 'var(--accent)' : 'var(--border-strong)'),
      transition: 'background var(--dur-base) var(--ease-hard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: on ? 24 : 2,
      width: 16,
      height: 16,
      background: on ? 'var(--graphite-950)' : 'var(--steel-300)',
      transition: 'left var(--dur-base) var(--ease-hard)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Home.jsx
try { (() => {
function Hero({
  go
}) {
  const {
    Button,
    HazardStripe
  } = DS;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: 640,
      overflow: 'hidden',
      background: 'url(../../assets/imagery/tuf-container-wallpaper.jpg) center/cover'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg,rgba(10,10,11,.92) 0%,rgba(10,10,11,.7) 38%,rgba(10,10,11,0) 70%)'
    }
  }), /*#__PURE__*/React.createElement(HazardStripe, {
    orientation: "vertical",
    thickness: 22,
    length: 120,
    style: {
      position: 'absolute',
      left: 0,
      top: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      height: '100%',
      padding: '0 var(--gutter)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "2026 lineup"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: 'var(--text-hero)',
      textTransform: 'uppercase',
      maxWidth: 620
    }
  }, "Built for the long game."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 460,
      font: '400 18px/1.55 var(--font-body)',
      color: 'var(--fg-2)'
    }
  }, "Military-grade tested chassis, high-refresh displays and cooling that holds clocks through marathon sessions."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go('product')
  }, "Shop TUF A14"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    onClick: () => go('durability')
  }, "See the tests"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 'var(--gutter)',
      bottom: 28,
      font: '600 13px/1 var(--font-display)',
      letterSpacing: 'var(--tracking-stencil)',
      color: 'var(--graphite-700)',
      writingMode: 'vertical-rl'
    }
  }, "STAY TOUGH"));
}
function Lineup({
  go,
  add
}) {
  const {
    Card,
    Badge,
    Button,
    Tag
  } = DS;
  const [f, setF] = React.useState('All');
  const sizes = ['All', '14"', '15.6"', '16"', '17.3"'];
  const list = PRODUCTS.filter(p => f === 'All' || p.size === f);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '96px var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 24,
      marginBottom: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Gaming laptops"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '12px 0 0',
      font: 'var(--text-h1)',
      textTransform: 'uppercase'
    }
  }, "Pick your rig")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, sizes.map(s => /*#__PURE__*/React.createElement(Tag, {
    key: s,
    selected: f === s,
    onClick: () => setF(s)
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))',
      gap: 20
    }
  }, list.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    onClick: () => go('product')
  }, /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    image: p.img,
    eyebrow: p.size + ' · ' + p.gpu,
    title: p.name,
    description: p.cpu + ' · ' + p.hz + ' display',
    badge: p.badge && /*#__PURE__*/React.createElement(Badge, null, p.badge),
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '700 22px/1 var(--font-display)'
      }
    }, "$", p.price.toLocaleString()), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: e => {
        e.stopPropagation();
        add(p);
      }
    }, "Add"))
  })))));
}
function Durability() {
  const tests = [['Drop', 'Repeated drops onto plywood from desk height'], ['Vibration', 'Hours of continuous multi-axis vibration'], ['Temperature', 'Operation from −32 °C to 60 °C'], ['Humidity', 'Extended runs at 95% relative humidity']];
  return /*#__PURE__*/React.createElement("section", {
    id: "durability",
    style: {
      background: 'var(--corrugation),var(--graphite-900)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '96px var(--gutter)',
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "MIL-STD-810H"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '12px 0 16px',
      font: 'var(--text-h1)',
      textTransform: 'uppercase'
    }
  }, "Tested past the point of normal."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--text-body)',
      color: 'var(--fg-2)',
      maxWidth: 440
    }
  }, "Every chassis design goes through a battery of military-standard tests before it ships.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 1,
      background: 'var(--border-subtle)',
      border: '1px solid var(--border-subtle)'
    }
  }, tests.map(([h, d], i) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      background: 'var(--surface-1)',
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-label)',
      color: 'var(--accent)',
      letterSpacing: '.12em'
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 26px/1 var(--font-display)',
      textTransform: 'uppercase',
      margin: '14px 0 8px'
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px/1.5 var(--font-body)',
      color: 'var(--fg-2)'
    }
  }, d))))));
}
function Home({
  go,
  add
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    go: go
  }), /*#__PURE__*/React.createElement(Lineup, {
    go: go,
    add: add
  }), /*#__PURE__*/React.createElement(Durability, null));
}
Object.assign(window, {
  Home,
  Durability
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Nav.jsx
try { (() => {
function Nav({
  go,
  cartCount,
  page
}) {
  const {
    IconButton
  } = DS;
  const link = (id, l) => /*#__PURE__*/React.createElement("a", {
    onClick: () => go(id),
    style: {
      cursor: 'pointer',
      color: page === id ? 'var(--fg-1)' : 'var(--fg-2)',
      font: '600 14px/1 var(--font-display)',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      borderBottom: page === id ? '2px solid var(--accent)' : '2px solid transparent',
      padding: '22px 0'
    }
  }, l);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      height: 'var(--nav-h)',
      background: 'rgba(10,10,11,.86)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      height: '100%',
      padding: '0 var(--gutter)',
      display: 'flex',
      alignItems: 'center',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go('home'),
    style: {
      cursor: 'pointer',
      font: '800 30px/1 var(--font-display)',
      color: 'var(--fg-1)',
      textDecoration: 'none',
      letterSpacing: '.02em'
    }
  }, "TUF"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28
    }
  }, link('home', 'Laptops'), link('product', 'TUF A14'), link('durability', 'Durability')), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    label: "Search",
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: "search"
    })
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    label: "Cart",
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: "shopping-cart"
    }),
    onClick: () => go('cart')
  }), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 4,
      right: 2,
      minWidth: 16,
      height: 16,
      padding: '0 4px',
      background: 'var(--accent)',
      color: 'var(--on-accent)',
      font: '700 11px/16px var(--font-display)',
      textAlign: 'center'
    }
  }, cartCount)))));
}
function Footer() {
  const col = (h, items) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-label)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--fg-3)'
    }
  }, h), items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    style: {
      color: 'var(--fg-2)',
      font: '400 14px/1.3 var(--font-body)',
      cursor: 'pointer'
    }
  }, i)));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--graphite-950)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10,
      background: 'var(--hazard-stripes)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '56px var(--gutter) 40px',
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 40px/1 var(--font-display)'
    }
  }, "TUF"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 15px/1 var(--font-display)',
      letterSpacing: 'var(--tracking-stencil)',
      color: 'var(--fg-3)',
      marginTop: 12
    }
  }, "STAY TOUGH.")), col('Shop', ['Laptops', 'Accessories', 'Deals']), col('Support', ['Drivers', 'Warranty', 'Contact']), col('Company', ['About', 'Newsroom', 'Careers'])), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '16px var(--gutter) 32px',
      font: '400 12px/1.4 var(--font-body)',
      color: 'var(--fg-3)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, "Specifications and prices are illustrative placeholders."));
}
Object.assign(window, {
  Nav,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Product.jsx
try { (() => {
function Product({
  add
}) {
  const {
    Button,
    Tabs,
    Tag,
    Badge,
    Select,
    Radio,
    Tooltip,
    HazardStripe
  } = DS;
  const p = PRODUCTS[0];
  const [tab, setTab] = React.useState('Overview');
  const [gpu, setGpu] = React.useState('4060');
  const [ram, setRam] = React.useState('16GB DDR5');
  const price = p.price + (gpu === '4070' ? 250 : 0) + (ram === '32GB DDR5' ? 120 : 0);
  const specs = [['Processor', 'AMD Ryzen 7 8845HS'], ['Graphics', 'NVIDIA GeForce RTX ' + gpu + ' Laptop GPU'], ['Display', '14" 2.5K 165Hz, 100% sRGB'], ['Memory', ram], ['Storage', '1TB PCIe 4.0 NVMe SSD'], ['Battery', '76Wh'], ['Weight', '1.46 kg']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '40px var(--gutter) 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-label)',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--fg-3)',
      marginBottom: 24
    }
  }, "Laptops / 14\" / ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-1)'
    }
  }, p.name)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.3fr) minmax(0,1fr)',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'radial-gradient(ellipse at 50% 55%,var(--graphite-700),var(--surface-1) 65%)',
      border: '1px solid var(--border-subtle)',
      aspectRatio: '1/0.82',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      clipPath: 'var(--clip-chamfer-tr)'
    }
  }, /*#__PURE__*/React.createElement(HazardStripe, {
    orientation: "vertical",
    thickness: 14,
    length: 70,
    style: {
      position: 'absolute',
      left: 0,
      top: 0
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: p.img,
    style: {
      width: '82%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, null, "New"), /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "In stock")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: '700 clamp(36px,4.4vw,64px)/0.92 var(--font-display)',
      textTransform: 'uppercase'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, null, "MIL-STD-810H"), /*#__PURE__*/React.createElement(Tag, null, "165Hz"), /*#__PURE__*/React.createElement(Tooltip, {
    content: "Routes the dGPU straight to the display"
  }, /*#__PURE__*/React.createElement(Tag, null, "MUX Switch"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-label)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--fg-2)'
    }
  }, "Graphics"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '12px 24px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "gpu",
    checked: gpu === '4060',
    onChange: () => setGpu('4060'),
    label: "RTX 4060"
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "gpu",
    checked: gpu === '4070',
    onChange: () => setGpu('4070'),
    label: "RTX 4070 (+$250)"
  }))), /*#__PURE__*/React.createElement(Select, {
    label: "Memory",
    options: ['16GB DDR5', '32GB DDR5'],
    value: ram,
    onChange: e => setRam(e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12,
      paddingTop: 12,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '800 44px/1 var(--font-display)'
    }
  }, "$", price.toLocaleString()), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 14px/1 var(--font-body)',
      color: 'var(--fg-3)'
    }
  }, "incl. VAT")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    onClick: () => add({
      ...p,
      price,
      name: p.name + ' · ' + gpu + ' · ' + ram
    })
  }, "Add to cart"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline"
  }, "Compare")))), /*#__PURE__*/React.createElement(Tabs, {
    items: ['Overview', 'Specs', 'Support'],
    value: tab,
    onChange: setTab,
    style: {
      marginTop: 64
    }
  }), tab === 'Specs' && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, specs.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'grid',
      gridTemplateColumns: '220px 1fr',
      padding: '16px 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-label)',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--fg-3)',
      paddingTop: 3
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 16px/1.4 var(--font-body)'
    }
  }, v)))), tab === 'Overview' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20,
      marginTop: 32
    }
  }, [['165Hz', '2.5K display'], ['76Wh', 'battery'], ['1.46kg', 'chassis weight']].map(([a, b]) => /*#__PURE__*/React.createElement("div", {
    key: a,
    style: {
      borderLeft: '2px solid var(--accent)',
      padding: '4px 0 4px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 48px/1 var(--font-display)'
    }
  }, a), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-label)',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--fg-3)',
      marginTop: 8
    }
  }, b)))), tab === 'Support' && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--fg-2)',
      marginTop: 24
    }
  }, "Drivers, manuals and warranty registration for ", p.name, "."));
}
function Cart({
  items,
  remove,
  go
}) {
  const {
    Button,
    IconButton
  } = DS;
  const total = items.reduce((s, i) => s + i.price, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880,
      margin: '0 auto',
      padding: '56px var(--gutter) 96px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 32px',
      font: 'var(--text-h1)',
      textTransform: 'uppercase'
    }
  }, "Cart"), items.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 48,
      border: '1px dashed var(--border-strong)',
      textAlign: 'center',
      color: 'var(--fg-2)'
    }
  }, "Your cart is empty.", /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => go('home')
  }, "Browse laptops"))) : /*#__PURE__*/React.createElement(React.Fragment, null, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '96px 1fr auto auto',
      gap: 20,
      alignItems: 'center',
      padding: '16px 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 72,
      background: 'var(--surface-2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: it.img,
    style: {
      width: '88%',
      height: '88%',
      objectFit: 'contain'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 18px/1.2 var(--font-display)',
      textTransform: 'uppercase'
    }
  }, it.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 20px/1 var(--font-display)'
    }
  }, "$", it.price.toLocaleString()), /*#__PURE__*/React.createElement(IconButton, {
    size: "sm",
    variant: "ghost",
    label: "Remove",
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: "x",
      s: 16
    }),
    onClick: () => remove(i)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-label)',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--fg-3)'
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '800 40px/1 var(--font-display)'
    }
  }, "$", total.toLocaleString())), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg"
  }, "Checkout"))));
}
Object.assign(window, {
  Product,
  Cart
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Product.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Shared.jsx
try { (() => {
const DS = window.TUFGamingDesignSystem_38150b;
function Icon({
  n,
  s = 18,
  sw = 2
}) {
  const r = React.useRef();
  React.useEffect(() => {
    if (!window.lucide || !r.current) return;
    r.current.innerHTML = '';
    const el = document.createElement('i');
    el.setAttribute('data-lucide', n);
    r.current.appendChild(el);
    lucide.createIcons({
      attrs: {
        width: s,
        height: s,
        'stroke-width': sw
      }
    });
  }, [n, s]);
  return /*#__PURE__*/React.createElement("span", {
    ref: r,
    style: {
      display: 'inline-flex',
      width: s,
      height: s,
      flex: 'none'
    }
  });
}
const Eyebrow = ({
  children,
  color = 'var(--accent)'
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    font: 'var(--text-label)',
    letterSpacing: 'var(--tracking-caps)',
    textTransform: 'uppercase',
    color
  }
}, '// ', children);
const PRODUCTS = [{
  id: 'a14',
  name: 'TUF Gaming A14',
  size: '14"',
  gpu: 'RTX 4060',
  cpu: 'Ryzen 7',
  hz: '165Hz',
  price: 1099,
  img: '../../assets/imagery/laptop-front.png',
  badge: 'New'
}, {
  id: 'f15',
  name: 'TUF Gaming F15',
  size: '15.6"',
  gpu: 'RTX 4050',
  cpu: 'Core i7',
  hz: '144Hz',
  price: 999,
  img: '../../assets/imagery/laptop-pair-dark.png'
}, {
  id: 'a16',
  name: 'TUF Gaming A16',
  size: '16"',
  gpu: 'RTX 4070',
  cpu: 'Ryzen 9',
  hz: '165Hz',
  price: 1399,
  img: '../../assets/imagery/laptop-front.png',
  badge: '-10%'
}, {
  id: 'f17',
  name: 'TUF Gaming F17',
  size: '17.3"',
  gpu: 'RTX 4060',
  cpu: 'Core i7',
  hz: '144Hz',
  price: 1199,
  img: '../../assets/imagery/laptop-pair-dark.png'
}];
Object.assign(window, {
  DS,
  Icon,
  Eyebrow,
  PRODUCTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.HazardStripe = __ds_scope.HazardStripe;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

})();
