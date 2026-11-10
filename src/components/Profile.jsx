import avatarLight from '../assets/avatar-light.jpg'
import avatarDark from '../assets/avatar-dark.jpg'

export default function Profile({ username, theme }) {
  const avatar = theme === 'dark' ? avatarDark : avatarLight

  return (
    <header className="profile">
      <img
        className="profile__avatar"
        src={avatar}
        alt={`Foto de perfil de ${username}`}
        width="112"
        height="112"
      />
      <p className="profile__username">{username}</p>
    </header>
  )
}
