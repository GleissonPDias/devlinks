# Checklist de validação — DevLinks

| # | Teste | Resultado |
|---|-------|-----------|
| 1 | `npm run lint` sem erros | ✅ |
| 2 | `npm run build` gera `dist/` sem erros | ✅ |
| 3 | Console do navegador sem erros | ✅ |
| 4 | Avatar com `alt` ("Foto de perfil de @seu.perfil") | ✅ |
| 5 | Tema claro/escuro alterna ao clicar no switch | ✅ |
| 6 | Tema escolhido persiste após recarregar a página (`localStorage`) | ✅ |
| 7 | Switch com `aria-label` e `aria-checked` atualizados | ✅ |
| 8 | Links (4 botões + 4 redes) com `target="_blank"` e `rel="noopener noreferrer"` | ✅ |
| 9 | Desktop 1440 px: container 588 px, botões 540×56, avatar 112 px | ✅ |
| 10 | Mobile 360 px: sem overflow horizontal, botões ocupam a largura disponível | ✅ |
| 11 | Mobile 360 px: fundo com gradiente no modo escuro e claro | ✅ |
| 12 | Ícone do switch centralizado na trilha (y do handle = y da trilha) | ✅ |
| 13 | Landmarks semânticos: `header`, `main`, `nav` (2), `footer` | ✅ |
