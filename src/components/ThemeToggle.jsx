import iconSun from '../assets/icon-sun.svg'
import iconMoon from '../assets/icon-moon.svg'

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'
  const icon = isDark ? iconMoon : iconSun
  const label = isDark ? 'Ativar modo claro' : 'Ativar modo escuro'

  return (
    <button
      type="button"
      className="group relative w-16 h-10 p-0 border-0 bg-transparent rounded-full cursor-pointer backdrop-blur-[2px] focus-visible:outline-2 focus-visible:outline-[var(--text)] focus-visible:outline-offset-2"
      role="switch"
      aria-checked={isDark}
      aria-label={label}
      title={label}
      onClick={onToggle}
    >
      <span
        className="absolute top-1/2 left-0 -translate-y-1/2 w-16 h-6 rounded-full bg-[var(--surface)] border border-[var(--stroke)] backdrop-blur-[4px]"
        aria-hidden="true"
      />
      <span
        className={`absolute top-1/2 -translate-y-1/2 flex w-8 h-8 p-2 rounded-full bg-white shadow-[var(--handle-shadow)] transition duration-200 ease group-hover:shadow-[var(--handle-shadow),0_0_0_8px_var(--highlight)] ${isDark ? 'left-0' : 'left-8'}`}
      >
        <img src={icon} alt="" width="16" height="16" />
      </span>
    </button>
  )
}
