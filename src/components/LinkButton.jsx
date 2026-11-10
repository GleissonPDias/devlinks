export default function LinkButton({ label, href }) {
  return (
    <a
      className="flex items-center justify-center px-[23px] py-[15px] border border-[var(--stroke)] rounded-lg bg-[var(--surface)] backdrop-blur-sm text-[var(--text)] text-base leading-6 font-medium text-center no-underline transition-colors duration-150 hover:bg-[var(--surface-hover)] hover:border-[var(--stroke-strong)] hover:shadow-[inset_0_0_0_0.5px_var(--stroke-strong)] focus-visible:outline-2 focus-visible:outline-[var(--text)] focus-visible:outline-offset-2"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  )
}
