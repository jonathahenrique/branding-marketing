# Brand Quality Gate — Checklist por Fase

## Phase 1: Discovery
- [ ] Slug e kebab-case valido (sem acentos, sem espacos)
- [ ] Nicho e um dos 14 `NicheCategory` validos
- [ ] Descricao tem > 50 caracteres
- [ ] Publico-alvo definido com detalhes (nao generico)
- [ ] Dor e desejo sao especificos ao negocio
- [ ] Pelo menos 2 concorrentes informados
- [ ] Arquetipo selecionado e confirmado pelo usuario
- [ ] Artefato `{slug}-discovery.yaml` salvo

## Phase 2: Strategy
- [ ] Posicionamento com diferenciador ESPECIFICO (nao "oferecemos qualidade")
- [ ] Promessa e clara e memoravel (< 50 chars)
- [ ] Exatamente 5 personality traits com descricoes contextualizadas
- [ ] Cada trait tem `trait` (nome) e `desc` (descricao)
- [ ] Pelo menos 3 `isNot` items (anti-patterns da marca)
- [ ] Exatamente 4 valores com titulo e descricao
- [ ] Tagline escolhida e confirmada
- [ ] Purpose definido (missao em 1-2 frases)
- [ ] Artefato `{slug}-strategy.yaml` salvo

## Phase 3: Voice & Tone
- [ ] Voice archetype definido (nome unico, nao generico)
- [ ] Tom no formato "adjetivo-adjetivo" (ex: "autoritativo-acessivel")
- [ ] Exatamente 4 traits vocais com descricoes
- [ ] Pelo menos 3 `isNot` vocais
- [ ] Exatamente 5 regras de voz
- [ ] Pelo menos 3 regras com exemplo `bad` (contra-exemplo)
- [ ] TODOS os exemplos sao REAIS e no CONTEXTO DA MARCA (nao lorem ipsum)
- [ ] Exatamente 3 referencias de voz com justificativa
- [ ] Artefato `{slug}-voice.yaml` salvo

## Phase 4: Visual System
### 4a — Cores
- [ ] Theme com 16 propriedades (bg, surface, surfaceHover, primary, primaryHover, primaryDeep, primaryMuted, secondary, secondaryHover, secondaryDeep, secondaryMuted, text, textSecondary, textTertiary, border, borderSubtle)
- [ ] Todos os valores de theme sao hex reais (`#RRGGBB`) ou `rgba()`
- [ ] Dark palette com 10-12 `ColorToken` items
- [ ] Light palette com 6-7 `ColorToken` items
- [ ] Cada ColorToken tem: token, name, hex, usage
- [ ] `colors.philosophy` definida (> 30 chars)
- [ ] `primaryUsage.do` com >= 4 items
- [ ] `primaryUsage.dont` com >= 4 items
- [ ] `secondaryUsage.do` com >= 3 items
- [ ] `secondaryUsage.dont` com >= 3 items

### 4b — Tipografia
- [ ] Exatamente 3 FontStacks (roles: display, body, mono)
- [ ] Todas as fontes sao GRATUITAS (Google Fonts ou Fontshare)
- [ ] Cada FontStack tem: role, font, source, license, weights, variable
- [ ] Type scale com 9 niveis (Hero, H1, H2, H3, H4, Body, Small, Micro, Code)
- [ ] Cada TypeLevel tem: name, desktop, mobile, lineHeight, font, weight, usage
- [ ] Hero desktop >= 64px, mobile >= 32px
- [ ] Body desktop = 16px
- [ ] `typography.rules` com >= 4 regras

### 4c — Spacing
- [ ] `spacing.base` definido (4 ou 8)
- [ ] `spacing.scale` com 10 items
- [ ] Cada item tem: name, value, px
- [ ] Escala progride corretamente (2xs < xs < sm < ... < 5xl)
- [ ] `spacing.rules` com >= 3 regras

### 4d — Motion
- [ ] `motion.profile` e um dos 5 validos (calm/precise/energetic/organic/minimal)
- [ ] `motion.principle` definido (< 50 chars)
- [ ] `motion.tokens` com >= 6 items
- [ ] Tokens incluem pelo menos: instant, fast, normal, slow, ease-default, ease-out
- [ ] Valores de easing sao `cubic-bezier()` validos
- [ ] `motion.microAnimations` com >= 5 items
- [ ] `motion.rules` com >= 3 regras
- [ ] Inclui regra de `prefers-reduced-motion`

### 4e — Shape & Textures
- [ ] `shape` com 6 propriedades (radiusSm, radiusMd, radiusLg, shadowElevated, shadowModal, borderWidth)
- [ ] Shadows sao CSS valido
- [ ] `textures.style` e um dos 4 validos (clean/textured/editorial/organic)
- [ ] `textures.grain` e boolean
- [ ] `textures.grainOpacity` entre 0 e 0.15
- [ ] Artefato `{slug}-visual.yaml` salvo

## Phase 5: Logo Direction
- [ ] `logo.concept` definido (1 frase clara)
- [ ] `logo.description` com > 50 chars
- [ ] `logo.variants` com 3-4 items
- [ ] Cada variante tem `name` e `description` (sem `file` — usuario adiciona)
- [ ] `logo.rules` com >= 5 items
- [ ] Inclui regra de clearspace
- [ ] Inclui regra de tamanho minimo
- [ ] `logo.misuse` com >= 4 items
- [ ] Artefato `{slug}-logo.yaml` salvo

## Phase 6: Marketing Mockups
- [ ] 4 Instagram posts com tipos variados
- [ ] Posts usam o TOM da fase Voice (nao generico)
- [ ] Posts sao ESPECIFICOS ao negocio
- [ ] 2-3 YouTube thumbnails com style valido
- [ ] Newsletter com subject, headline, body[], ctaText
- [ ] Landing hero com headline, subheadline, ctaText
- [ ] Photography direction com todos os campos
- [ ] Iconography com style, grid, strokeWidth
- [ ] Artefato `{slug}-mockups.yaml` salvo

## Phase 7: Assembly
- [ ] Arquivo .ts gerado em `app/src/data/brands/{slug}.ts`
- [ ] Import type correto: `import type { BrandConfig } from '@/types/brand'`
- [ ] Export como `const` nomeada (camelCase do slug)
- [ ] Registrado no `app/src/data/brands/index.ts`
- [ ] `tsc --noEmit` passa sem erros
- [ ] `npm run build` passa
- [ ] Paginas SSG geradas para a nova marca
- [ ] Completeness score calculado e atribuido
