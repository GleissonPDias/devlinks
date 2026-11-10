import iconSun from '../assets/icon-sun.svg'
import iconMoon from '../assets/icon-moon.svg'

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'
  const icon = isDark ? iconMoon : iconSun
  const label = isDark ? 'Ativar modo claro' : 'Ativar modo escuro'

  return (
    <button
      type="button"
      className="theme-toggle"
      role="switch"
      aria-checked={isDark}
      aria-label={label}
      title={label}
      onClick={onToggle}
    >
      <span className="theme-toggle__track" aria-hidden="true">
        <span className="theme-toggle__handle">
          <img src={icon} alt="" width="16" height="16" />
        </span>
      </span>
    </button>
  )
}
