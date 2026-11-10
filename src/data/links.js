// Dados do DevLinks — passados aos componentes via Props.
// O Figma não define URLs: troque os hrefs abaixo pelos seus links reais.
import githubLight from '../assets/social-github-light.svg'
import githubDark from '../assets/social-github-dark.svg'
import instagramLight from '../assets/social-instagram-light.svg'
import instagramDark from '../assets/social-instagram-dark.svg'
import youtubeLight from '../assets/social-youtube-light.svg'
import youtubeDark from '../assets/social-youtube-dark.svg'
import linkedinLight from '../assets/social-linkedin-light.svg'
import linkedinDark from '../assets/social-linkedin-dark.svg'

export const profile = {
  username: '@GleissonPDias',
}

export const links = [
  {
    id: 'curso',
    label: 'Inscreva-se no meu Curso',
    href: 'https://github.com/GleissonPDias',
  },
  {
    id: 'ebook',
    label: 'Baixe meu e-book',
    href: 'https://github.com/GleissonPDias',
  },
  {
    id: 'portfolio',
    label: 'Veja meu portfólio',
    href: 'https://github.com/GleissonPDias',
  },
  {
    id: 'conheca',
    label: 'Conheça meu curso',
    href: 'https://github.com/GleissonPDias',
  },
]

export const socials = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/GleissonPDias',
    iconLight: githubLight,
    iconDark: githubDark,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    iconLight: instagramLight,
    iconDark: instagramDark,
  },
  {
    id: 'youtube',
    label: 'YouTube',
    href: 'https://www.youtube.com/',
    iconLight: youtubeLight,
    iconDark: youtubeDark,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    iconLight: linkedinLight,
    iconDark: linkedinDark,
  },
]
