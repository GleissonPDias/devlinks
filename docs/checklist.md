# Checklist de validação — DevLinks

Testes feitos com Playwright MCP em `http://localhost:5173/`, salvo indicação contrária.

| # | Teste | Resultado |
|---|-------|-----------|
| 1 | Página carrega sem erros de console | ✅ 0 erros |
| 2 | Tema claro e escuro funcionam (clique real no switch) | ✅ |
| 3 | Tema continua após recarregar a página (`localStorage`) | ✅ |
| 4 | Links externos com `target="_blank"` e `rel="noopener noreferrer"` | ✅ 8 de 8 |
| 5 | Links apontam para os destinos corretos | ⚠️ Parcial: os 4 botões e o GitHub apontam para `github.com/GleissonPDias`. Instagram, YouTube e LinkedIn ainda usam URLs genéricas (`instagram.com/`, `youtube.com/`, `linkedin.com/`) |
| 6 | Layout em desktop 1440 px: container 588 px, botões 540×56, avatar 112 px | ✅ |
| 7 | Layout em celular 360 px: sem overflow horizontal | ✅ |
| 8 | Visual comparado com o Figma (mobile claro, frame `1:13`) | ✅ Posições, tamanhos e espaçamentos batem. Diferenças intencionais: nome `@GleissonPDias`, fotos de avatar escolhidas por vocês e rodapé "Feito com ♥ por Gleisson" |
| 9 | Visual comparado com o Figma (mobile escuro, frame `1:113`) | ✅ Gradiente de fundo, botões translúcidos e switch batem |
| 10 | Avatar com `alt` e switch com `aria-label` | ✅ |
| 11 | Ícone do switch centralizado na trilha | ✅ |
