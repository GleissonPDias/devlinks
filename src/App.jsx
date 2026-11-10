import { useEffect, useState } from 'react'
import Profile from './components/Profile'
import LinkButton from './components/LinkButton'
import ThemeToggle from './components/ThemeToggle'
import SocialLinks from './components/SocialLinks'
import { profile, links, socials } from './data/links'

function App() {
  // O tema inicial já foi aplicado pelo script no index.html
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || 'light',
  )

  // Persiste a escolha do tema no localStorage
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  function handleToggleTheme() {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return (
    <>
      <div className="background" aria-hidden="true" />

      <main className="container">
        <Profile username={profile.username} theme={theme} />

        <ThemeToggle theme={theme} onToggle={handleToggleTheme} />

        <nav className="links" aria-label="Links">
          {links.map((link) => (
            <LinkButton key={link.id} label={link.label} href={link.href} />
          ))}
        </nav>

        <SocialLinks items={socials} theme={theme} />

        <footer className="footer">Feito com ♥ pela/por</footer>
      </main>
    </>
  )
}

export default App
