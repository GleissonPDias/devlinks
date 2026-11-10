# Referência do Figma — DevLinks

Extraído via Figma MCP (arquivo duplicado para a conta do projeto:
`wvB4r72mqsMYNFLEex5r0v`; original: `zxErkHjdi0J3yZmZdUMnQE`).

## Telas

| Tela | Frame | Resolução |
|------|-------|-----------|
| Light — Desktop | `58:455` | 1440 × 1024 |
| Light — Mobile | `1:13` | 360 × 800 |
| Dark — Desktop | `58:415` | 1440 × 1024 |
| Dark — Mobile | `1:113` | 360 × 800 |

Style Guide: node `1437:350` (🎨 Style Guide).

## Componentes identificados

| Componente | Medidas | Estados |
|------------|---------|---------|
| Avatar | 112 × 112 (foto redonda) | light e dark (fotos diferentes) |
| @usuário | Inter Regular 16/24 | — |
| Switch | 64 × 40 (track 64 × 24, handle 32 × 32, ícone 16) | Default, Hover/pressed; light = sol à direita, dark = lua à esquerda |
| Button | altura 56, padding 16/24, radius 8, largura total | Default, Hover/pressed |
| Social links | 40 × 40, gap 16 | Default, Hover (círculo highlight) |
| Footer | Inter Regular 14/24 | — |

## Layout

- Container: 588 px (desktop, centralizado) / 100% (mobile), topo em **56 px**
- Profile: padding 24, gap 8
- Links: padding 24, gap 16
- Social: padding 24, gap 16, centralizado
- Footer: padding 24, centralizado

## Cores (Style Guide)

| Token | Light | Dark |
|-------|-------|------|
| text-color | `#000000` | `#FFFFFF` |
| stroke-color | `#000000` 50% | `#FFFFFF` 50% |
| surface-color | `#000000` 5% | `#FFFFFF` 10% |
| surface-hover | `#000000` 2% | `#FFFFFF` 5% |
| highlight-color | `#000000` 10% | `#FFFFFF` 20% |
| toggle-handle | `#FFFFFF` | `#FFFFFF` |
| sombra do handle | `0 2 8 rgba(0,0,0,0.1)` | `0 2 8 rgba(0,0,0,0.25)` |

## Tipografia

- Fonte: **Inter** (Google Fonts)
- `text-md`: 16 px / 24 px / Medium (500) — botões e @usuário (400 no @usuário)
- `text-sm`: 14 px / 24 px / Regular (400) — rodapé

## Assets (baixados em `src/assets/`)

- `bg-desktop-light.png`, `bg-desktop-dark.png` (1440 × 1024)
- `bg-mobile-light.png`, `bg-mobile-dark.png` (360 × 800)
- `avatar-light.png`, `avatar-dark.png`
- `icon-sun.svg`, `icon-moon.svg` (Phosphor)
- `social-{github,instagram,youtube,linkedin}-{light,dark}.svg` (ionicons)

## Observações

- O Figma não define URLs dos links; os `hrefs` ficam em `src/data/links.js`.
- Texto do 1º botão: light = "Inscreva-se no meu Curso", dark = "Inscreva-se no Curso"
  (variante escolhida: "Inscreva-se no meu Curso").
- Avatar dark no arquivo duplicado está sem óculos (foto diferente da light).
