# Contexto do projeto (para a próxima sessão)

Site pessoal de João Miguel Gomes, que está a fazer a transição para AI engineer. Objetivo do site: ser contratado. Deve ser clean, criar curiosidade e levar o visitante a entrar em contacto. O dono escreve em português de Portugal; o conteúdo do site é em inglês.

Ver `README.md` para estrutura, comandos e como editar.

## Estado em 2026-11-18

- **Publicado** em https://joaomiguelgomes.com e www (Cloudflare Workers com static assets, `site/wrangler.jsonc`). Deploy: `cd site && npm run deploy`.
- **Código:** GitHub público https://github.com/joaomfgomes/me-personal-page (ramos `main` e `versao-classica`). Para guardar alterações: `git add -A && git commit -m "..." && git push`.
- **Cloudflare:** sessão do wrangler iniciada na conta joaomfg94@gmail.com. Worker `joaomiguelgomes` com os domínios `joaomiguelgomes.com` e `www.joaomiguelgomes.com`.
- **Versão ativa:** `main`, estilo página inicial da OpenAI (caixa de perguntas centrada, sugestões em pílulas, letra Figtree, preto e branco, links azuis `#2a7ae2`).
- **`indexable: false`** em `site.config.ts`: o site tem `noindex` e o `robots.txt` bloqueia tudo, porque o conteúdo ainda é de exemplo.

## O que o João ainda tem de mudar (conteúdo de exemplo)

Já é dele: nome, iniciais, email, GitHub, LinkedIn, disponibilidade, cargo (`site.config.ts`).

Ainda é EXEMPLO (inventado, com números falsos), tem de ser substituído ou apagado:
- [ ] `site.config.ts` → `intro`, `headline` (só usados na versão clássica), `aboutShort` ("four years in operations", Belém, bacalhau), `howIWork`, `now`, `askPlaceholders` e `askSubtitle` (mencionam LexPT e TicketPilot).
- [ ] `site/src/content/projects/lexpt.md` e `ticketpilot.md`: projetos inventados. `lexpt.md` aponta para `github.com/nomeapelido/lexpt`.
- [ ] `site/src/content/notes/*.md`: 4 notas inventadas.
- [ ] `site/public/cv.pdf`: CV modelo com "Nome Apelido" e dados falsos (gerado de `cv/NomeApelido_AI_Engineer_CV.docx`).
- [ ] Foto opcional em `site/public/portrait.jpg` (+ campo `portrait`).
- [ ] Quando tudo for real: `indexable: true` e `npm run deploy`.

## Decisões tomadas

- Astro 7 estático; sem framework de UI. Astro 7 corre `astro dev` como daemon (`npx astro dev stop` para parar).
- A caixa de perguntas responde localmente (intenções por palavras-chave em EN/PT em `site/src/components/Ask.astro`) até existir um RAG; contrato do endpoint no README.
- Não publicar números inventados como se fossem reais: por isso `indexable: false` até o conteúdo ser verdadeiro.
- A versão clássica foi reconstruída e guardada no ramo `versao-classica`; não recebe as alterações do `main` automaticamente (global.css é diferente nos dois ramos, um merge direto dá conflitos).

## Problemas conhecidos

- `npm audit` mostra vulnerabilidades altas em `picomatch` (via astro/vite/unstorage). Afeta só as ferramentas de build locais, não o site publicado (HTML estático). Resolver quando o Astro atualizar a dependência; não usar `npm audit fix --force` (faz downgrade do Astro).
- O modo escuro não foi verificado visualmente no browser da app (a emulação não se aplicou).

## Plano de carreira relacionado (desta conversa)

Plano de 6 fases para AI engineer (Python → fundamentos ML → AI engineering: RAG, evals, agentes → portfólio de 2–3 projetos com evals → entrevistas → oferta). O site é a montra do portfólio: cada projeto real deve ter página com problema, arquitetura, evals, custo/latência e o que falhou. Ideia de projeto: ligar `askEndpoint` a um RAG próprio sobre o CV e as notas.
