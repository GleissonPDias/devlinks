# Evidências de uso de ferramentas

## Context7 MCP (tarefa 04)

Servidor configurado em `opencode.json` (`https://mcp.context7.com/mcp`).

1. `resolve-library-id` com `libraryName: "React"` → biblioteca escolhida: `/reactjs/react.dev` (documentação oficial).
2. `query-docs` com `libraryId: "/reactjs/react.dev"` e a pergunta: *"How to use useState with localStorage to persist a value like a theme, including lazy initialization"*.

Trecho usado como referência: inicializar o `useState` com uma função (`() => localStorage.getItem(...)`) e gravar no `localStorage` a cada mudança. Isso está em `src/App.jsx`:

```jsx
const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light')
useEffect(() => {
  document.documentElement.dataset.theme = theme
  localStorage.setItem('theme', theme)
}, [theme])
```

## Playwright MCP (tarefa 09)

Servidor configurado em `opencode.json` (`npx @playwright/mcp@latest`). Testes feitos em `http://localhost:5174/`:

| Verificação | Ferramenta | Resultado |
|---|---|---|
| Página carrega sem erros de console | `browser_console_messages` (nível error) | 0 erros ✅ |
| Clique real no switch muda `light` → `dark` | `browser_click` no switch | ✅ |
| Após recarregar, tema continua `dark` (localStorage) | `browser_navigate` + `browser_evaluate` | ✅ |
| Os 8 links têm `target="_blank"` e `rel="noopener noreferrer"` | `browser_evaluate` | ✅ |
| Mobile 360 px: sem overflow horizontal | `browser_resize` + `browser_evaluate` | ✅ |
| Capturas mobile claro e escuro | `browser_take_screenshot` | `docs/prints/mobile-*.png` ✅ |

Ver checklist completo em [`checklist.md`](checklist.md).
