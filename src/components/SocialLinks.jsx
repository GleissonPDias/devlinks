export default function SocialLinks({ items, theme }) {
  return (
    <nav className="w-full p-6 flex justify-center" aria-label="Redes sociais">
      <ul className="flex gap-4 m-0 p-0 list-none">
        {items.map((item) => (
          <li key={item.id}>
            <a
              className="block w-10 h-10 rounded-full transition-colors duration-150 hover:bg-[var(--highlight)] focus-visible:outline-2 focus-visible:outline-[var(--text)] focus-visible:outline-offset-2"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
            >
              <img
                className="block"
                src={theme === 'dark' ? item.iconDark : item.iconLight}
                alt=""
                width="40"
                height="40"
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
