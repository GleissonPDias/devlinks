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

## Verificação no navegador (tarefa 09)

Feita com a ferramenta de navegador embutida do OpenCode (não com o Playwright MCP, que não está configurado neste projeto). Resultados em `http://localhost:5174/`:

| Verificação | Resultado |
|---|---|
| Clicar no switch alterna `dark` → `light` | ✅ |
| Recarregar a página mantém `light` (localStorage) | ✅ |
| Console sem erros | ✅ |
| Links: 8 com `target="_blank"` e `rel="noopener noreferrer"` | ✅ |
| Mobile 360 px: sem overflow horizontal | ✅ |

Ver checklist completo em [`checklist.md`](checklist.md).
