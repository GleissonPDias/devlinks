import avatarLight from '../assets/avatar-light.jpg'
import avatarDark from '../assets/avatar-dark.jpg'

export default function Profile({ username, theme }) {
  const avatar = theme === 'dark' ? avatarDark : avatarLight

  return (
    <header className="w-full p-6 flex flex-col items-center gap-2">
      <img
        className="block w-28 h-28 object-cover rounded-full border border-[var(--stroke)]"
        src={avatar}
        alt={`Foto de perfil de ${username}`}
        width="112"
        height="112"
      />
      <p className="m-0 text-base leading-6 font-normal text-[var(--text)]">
        {username}
      </p>
    </header>
  )
}
