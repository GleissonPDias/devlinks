export default function SocialLinks({ items, theme }) {
  return (
    <nav className="social" aria-label="Redes sociais">
      <ul className="social__list">
        {items.map((item) => (
          <li key={item.id}>
            <a
              className="social__link"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
            >
              <img
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
