# PRD-001: Brand Engine — Sistema de Criacao de Identidade de Marca

> **Produto:** Brand Engine
> **Autor:** Morgan (PM) — Synkra AIOS
> **Data:** 2026-03-03
> **Status:** DRAFT v2 — Escopo refinado
> **Versao:** 2.0

---

## 1. Visao do Produto

### 1.1 O Que E

O Brand Engine e um **sistema web interativo de criacao de identidade de marca** — equivalente ao trabalho que uma agencia premium entrega por R$60k+. Ele gera identidades visuais completas (design system + brandbook interativo) para qualquer nicho, de forma replicavel e com qualidade profissional.

O resultado e o que uma agencia entregaria como **deliverable final**: um brandbook interativo com toda a identidade documentada, design tokens exportaveis, e mockups de aplicacao como referencia visual.

### 1.2 O Que NAO E

- NAO e um gerador de conteudo para redes sociais (nao gera posts em massa)
- NAO e um clone do Canva ou ferramenta de producao de materiais
- NAO e um brandbook estatico para uma unica marca
- NAO e um gerador generico com cara de IA

### 1.3 Analogia

**E o que a Pentagram entrega quando voce paga $100k:**
- Pesquisa e estrategia de marca
- Identidade visual completa (cores, tipografia, motion, voz)
- Design system com tokens
- Brandbook interativo com playgrounds
- Mockups de aplicacao (como a marca fica no Instagram, em landing page, etc.)

A diferenca: faz isso para qualquer nicho, de forma sistematizada, mantendo qualidade de agencia premium.

### 1.4 Problema que Resolve

| Problema | Impacto |
|----------|---------|
| Criar branding profissional custa R$30-100k+ por projeto | Barreira financeira para multiplos projetos |
| Agencias demoram 2-6 meses por projeto | Velocidade incompativel com ritmo de criacao |
| Materiais de IA parecem genericos | Perda de credibilidade e diferenciacao |
| Sem sistema, cada projeto comeca do zero | Inconsistencia, retrabalho |
| Agentes de IA nao tem referencia clara da marca | Producao off-brand |

### 1.5 Proposta de Valor

**"Identidade de marca com qualidade de agencia premium, para qualquer nicho, em horas — nao meses."**

---

## 2. Usuarios-Alvo

### 2.1 Persona Primaria: Jonatha (Creator/Empreendedor)

- Cria multiplos projetos em nichos diferentes (educacao, servicos, SaaS)
- Precisa de branding profissional rapido e replicavel
- Quer que cada projeto tenha identidade propria, nao generica
- Usa o brandbook como fonte de verdade para toda producao futura

### 2.2 Persona Secundaria: Time de Agentes AIOS

- Agentes de IA que consultam o brandbook para produzir on-brand
- Precisam de formato machine-readable (JSON tokens + regras claras)
- Consultam o sistema, nao produzem dentro dele

### 2.3 Persona Terciaria: Colaboradores/Clientes

- Abrem o brandbook interativo para entender a marca
- Consultam guidelines, baixam assets
- Interface intuitiva, zero conhecimento tecnico necessario

---

## 3. Arquitetura do Produto

### 3.1 Modelo Conceitual

```
BRAND ENGINE
│
├── 🏭 Brand Builder (Criar identidade)
│   ├── Brand Brief Wizard — processo guiado de criacao
│   ├── Niche Intelligence — referencias e padroes por nicho
│   ├── Design System Generator — cores, tipo, motion, spacing
│   └── Brand Strategy Generator — posicionamento, voz, personalidade
│
├── 📖 Brand Viewer (Visualizar/documentar)
│   ├── Brandbook Interativo — nivel Dropbox/Spotify
│   ├── Design System Explorer — playgrounds de componentes
│   ├── Token Browser — explorar e copiar todos os tokens
│   ├── Asset Library — downloads organizados
│   └── Application Mockups — exemplos visuais de como a marca aplica
│
├── 🤖 Brand Context (Interface para agentes IA)
│   ├── Brand Config JSON — dados completos da marca
│   ├── Validation Rules — regras do/don't machine-readable
│   └── Asset References — URLs para logos, fontes, tokens
│
└── 📊 Brand Portfolio (Dashboard)
    ├── Lista de marcas criadas
    ├── Completude de cada marca
    └── Acesso rapido a qualquer brandbook
```

### 3.2 Application Mockups (Apresentacao, NAO Producao)

Os mockups sao **exemplos visuais estaticos** que mostram como a marca apareceria em contexto real. Funcionam como as paginas finais de um brandbook de agencia — "aplicacoes da marca":

```
Mockups de Apresentacao:
├── Instagram Feed Preview    — 3-6 posts simulados na grid
├── Instagram Stories          — 2-3 stories simulados
├── LinkedIn Post              — 1-2 posts com a marca aplicada
├── YouTube Thumbnail          — 2-3 thumbnails de exemplo
├── Newsletter Preview         — 1 email mockup
├── Landing Page Preview       — hero section + 1-2 secoes
├── Business Card              — frente e verso
└── Social Media Avatar/Banner — perfil simulado
```

Esses mockups sao gerados automaticamente a partir dos tokens da marca e servem exclusivamente para **orientacao visual** — mostrar ao usuario/equipe/agentes como a marca DEVE ser aplicada.

### 3.3 Modelo de Dados: BrandConfig

```typescript
interface BrandConfig {
  // --- Identidade ---
  slug: string                    // "curso-eletrica", "petshop-aurora"
  name: string                    // "NR-10 Master"
  tagline: string                 // "Seguranca eletrica com maestria"
  purpose: string                 // Proposito da marca
  niche: NicheCategory            // educacao, saude, servicos, tech, etc.
  description: string

  // --- Audiencia ---
  audience: {
    primary: string               // "Eletricistas em formacao, 25-45 anos"
    pain: string                  // "Medo de acidentes + falta de certificacao"
    desire: string                // "Seguranca + reconhecimento profissional"
  }

  // --- Estrategia ---
  positioning: {
    category: string              // "Curso tecnico de seguranca eletrica"
    differentiator: string        // "Pratica com simulacoes reais"
    promise: string               // "Domine NR-10 com confianca"
  }
  personality: {
    archetype: string             // "O Especialista Confiavel"
    traits: Trait[]               // [{trait, description}]
    isNot: string[]               // "Nao e arrogante, nao e generico"
  }
  values: BrandValue[]            // [{title, description}]

  // --- Voz & Tom ---
  voice: {
    archetype: string             // "O Especialista Confiavel"
    tone: string                  // "tecnico-acessivel"
    personality: {
      is: Trait[]                 // Direto, confiante, preciso
      isNot: string[]             // Arrogante, generico
    }
    rules: VoiceRule[]            // [{rule, example, bad?}]
    references: string[]          // Marcas de referencia de tom
  }

  // --- Design System ---
  shape: {
    radiusSm: string
    radiusMd: string
    radiusLg: string
    shadowElevated: string
    shadowModal: string
    borderWidth: string
  }

  theme: {
    bg: string
    surface: string
    surfaceHover: string
    primary: string
    primaryHover: string
    primaryDeep: string
    primaryMuted: string
    secondary: string
    secondaryHover: string
    secondaryDeep: string
    secondaryMuted: string
    text: string
    textSecondary: string
    textTertiary: string
    border: string
    borderSubtle: string
  }

  colors: {
    philosophy: string            // "Por que essas cores"
    dark: ColorToken[]            // Paleta dark mode
    light: ColorToken[]           // Paleta light mode
    primaryUsage: DosAndDonts
    secondaryUsage: DosAndDonts
  }

  typography: {
    stack: FontStack[]            // Display + Body + Mono
    scale: TypeLevel[]            // Hero, H1-H4, Body, Small, Micro, Code
    rules: string[]               // Regras tipograficas
  }

  spacing: {
    base: number                  // 4 ou 8
    scale: SpacingToken[]         // xs, sm, md, lg, xl, 2xl
    rules: string[]
  }

  motion: {
    principle: string             // Nome do perfil de motion
    description: string
    profile: 'calm' | 'precise' | 'energetic' | 'organic' | 'minimal'
    tokens: MotionToken[]         // Duracoes + easings
    microAnimations: MicroAnimation[]
    rules: string[]
  }

  textures: {
    grain: boolean                // Usa grain overlay?
    grainOpacity: number          // 0.02 - 0.08
    style: 'clean' | 'textured' | 'editorial' | 'organic'
    overlays: string[]            // Nomes dos overlays usados
  }

  // --- Logo ---
  logo: {
    wordmarkText: string
    mark: LogoMark
    wordmark: LogoWordmark
    variants: LogoVariant[]
    rules: string[]
    misuse: string[]
  }

  // --- Direcao Visual ---
  photography: {
    style: string                 // "Tecnico com humanizacao"
    lighting: string              // "Iluminacao industrial, contraste medio"
    composition: string           // "Close-ups de maos trabalhando"
    colorTreatment: string        // "Preset frio, leve desaturacao"
    subjects: string[]            // "Eletricistas reais, equipamentos, canteiros"
    avoid: string[]               // "Stock generico, fotos corporativas"
  }

  iconography: {
    style: string                 // "Outline 1.5px, rounded caps"
    grid: string                  // "24x24 com 2px padding"
    strokeWidth: string
  }

  // --- Mockup Content ---
  mockups: {
    instagramPosts: MockupPost[]       // 3-6 posts simulados
    instagramStories: MockupStory[]    // 2-3 stories
    linkedinPost: MockupLinkedin       // 1-2 posts
    youtubeThumbnails: MockupThumb[]   // 2-3 thumbs
    newsletter: MockupNewsletter       // 1 email
    landingHero: MockupHero            // Hero section
    businessCard: MockupCard           // Frente + verso
  }

  // --- Meta ---
  createdAt: string
  updatedAt: string
  completeness: number            // 0-100%
}
```

### 3.4 Stack Tecnico

```
Core:
├── Next.js 16 (App Router, RSC, MDX)
├── React 19
├── Tailwind CSS 4 (@theme com design tokens dinamicos)
├── TypeScript 5.x

Interatividade:
├── Motion (ex-Framer Motion) — animacoes UI, springs, gestures
├── GSAP + ScrollTrigger — scroll cinematografico, parallax
├── MDX 3 (@next/mdx) — documentacao interativa
├── Sandpack ou React Live — code playgrounds
├── Shiki — syntax highlighting

Componentes:
├── Radix UI — primitivos acessiveis
├── Lucide React — icones base
├── next-themes — theme switching (light/dark/brand)

Deploy:
└── Vercel
```

**Decisao: Evoluir `pessoal/brandbook` existente** (ver secao 7).

---

## 4. Epics e Stories

### Epic 1: Foundation — Multi-Brand Infrastructure

**Objetivo:** Base multi-tenant com temas dinamicos.

| ID | Story | Prioridade | Complexidade |
|----|-------|------------|-------------|
| 1.1 | **Expandir BrandConfig schema** — incorporar todos os campos: audience, positioning, personality, voice, spacing, textures, photography, iconography, mockups | P0 | M |
| 1.2 | **Dynamic Theme Engine** — Tailwind 4 @theme gerado em runtime a partir de BrandConfig. Trocar marca = trocar tema completo | P0 | L |
| 1.3 | **Upgrade Tailwind 3 → 4** — migrar para @theme directive, OKLCH nativo, tokens CSS-first | P0 | M |
| 1.4 | **Brand Portfolio Dashboard** — home com grid de todas as marcas, card com logo + paleta + status de completude | P1 | S |
| 1.5 | **Brand Context Export** — gerar JSON machine-readable para agentes IA (brand.context.json por marca) | P0 | S |

---

### Epic 2: Brand Builder — Wizard de Criacao

**Objetivo:** Processo guiado que cria identidade completa para qualquer nicho.

| ID | Story | Prioridade | Complexidade |
|----|-------|------------|-------------|
| 2.1 | **Brand Brief Wizard** — multi-step: nome, nicho, tagline, proposito, audiencia | P0 | M |
| 2.2 | **Personality Selector** — escolher arquetipo + traits com preview visual | P0 | M |
| 2.3 | **Color System Generator** — gera paleta OKLCH a partir de mood/nicho/personalidade. 3 camadas: primitive → semantic → component. Light + dark mode automatico | P0 | L |
| 2.4 | **Typography Selector** — banco curado de pares tipograficos categorizados por personalidade. Selecao com preview ao vivo | P0 | L |
| 2.5 | **Voice & Tone Builder** — gera sistema de voz a partir de arquetipo. Regras, exemplos, do/don't por canal | P0 | M |
| 2.6 | **Motion Profile Selector** — 5 perfis pre-definidos (calm, precise, energetic, organic, minimal). Gera tokens de easing + duracao + micro-animacoes | P1 | M |
| 2.7 | **Shape & Texture Selector** — radius, shadows, grain overlay, estilo visual (clean/textured/editorial/organic) | P1 | S |
| 2.8 | **Brand Preview Live** — preview em tempo real da marca durante construcao. Mostra card, botao, headline com os tokens sendo definidos | P0 | M |
| 2.9 | **Logo Direction Guide** — nao gera logo, mas sugere direcao (estilo, conceito, tipologia) baseado na personalidade | P2 | S |
| 2.10 | **Photography & Iconography Direction** — gera guidelines de fotografia e iconografia por nicho | P2 | S |

**Fluxo do Wizard:**

```
Step 1: Essencia       → Nome, nicho, tagline, proposito
Step 2: Audiencia      → Quem, dor, desejo (3 campos)
Step 3: Personalidade  → Arquetipo + 3-5 traits + isNot
Step 4: Cores          → Mood selector → paleta gerada → ajustes
Step 5: Tipografia     → Personalidade filtra opcoes → selecionar par
Step 6: Voz & Tom      → Regras, exemplos, referencias
Step 7: Motion         → Selecionar perfil → preview animado
Step 8: Forma & Textura → Radius, shadows, grain
Step 9: Review         → Preview completo do brandbook
Step 10: Gerar         → Cria BrandConfig + arquivos + brandbook
```

---

### Epic 3: Brand Viewer — Brandbook Interativo

**Objetivo:** Visualizacao interativa da marca no nivel Dropbox/Spotify.

| ID | Story | Prioridade | Complexidade |
|----|-------|------------|-------------|
| 3.1 | **Color Explorer** — paleta interativa: swatches clicaveis, copy token/hex/oklch, contrast checker embutido, toggle light/dark | P0 | M |
| 3.2 | **Typography Playground** — type scale completo com texto editavel. Mostra fonte, peso, tamanho, line-height. Toggle entre heading/body/mono | P0 | M |
| 3.3 | **Motion Lab** — demos interativas de cada easing/micro-animacao. Slider de duracao. Botao "play" para ver a animacao | P1 | M |
| 3.4 | **Logo Guidelines Page** — variantes com download SVG, area de protecao visual, do's/don'ts cards, misuse gallery | P0 | M |
| 3.5 | **Voice & Tone Guide** — regras com exemplos bom/ruim, toggle por contexto (marketing, UI, suporte, social) | P1 | S |
| 3.6 | **Token Browser** — tabela completa de TODOS os tokens (cor, tipo, spacing, motion, shape). Click-to-copy. Filtro por categoria | P0 | M |
| 3.7 | **Component Showcase** — botoes, cards, inputs, badges renderizados com os tokens da marca. Live preview com toggle light/dark | P1 | L |
| 3.8 | **Manifesto / Brand Story** — pagina de abertura com scroll storytelling: proposito, valores, personalidade. Motion cinematografico | P1 | L |
| 3.9 | **Photography & Iconography Direction** — mood board, regras de estilo, do/don't com exemplos visuais | P2 | S |
| 3.10 | **Asset Download Center** — todos os assets organizados: logos SVG, fontes, tokens JSON, paleta PNG | P1 | S |

**Elementos Interativos por Pagina (meta: 8-10 como Dropbox):**

- Color swatch: click → copia token
- Type scale: campo de texto editavel
- Motion demo: botao play + slider duracao
- Component: toggle light/dark mode
- Code snippet: syntax highlight + botao copy
- Contrast checker: selecionar 2 cores → ver ratio
- Logo anatomy: hover revela grid/area de protecao
- Do/Don't: cards side-by-side com icone check/x

---

### Epic 4: Application Mockups — Exemplos de Orientacao

**Objetivo:** Mockups estaticos que mostram como a marca se aplica em contextos reais. Apenas para apresentacao e orientacao, nao para producao.

| ID | Story | Prioridade | Complexidade |
|----|-------|------------|-------------|
| 4.1 | **Instagram Feed Mockup** — grid de 6 posts simulados mostrando a marca aplicada. Dentro de um frame de celular | P1 | M |
| 4.2 | **Instagram Stories Mockup** — 2-3 stories com a marca aplicada | P2 | S |
| 4.3 | **YouTube Thumbnail Mockup** — 2-3 thumbnails de exemplo on-brand | P1 | S |
| 4.4 | **Landing Page Hero Mockup** — hero section + CTA com a identidade aplicada | P1 | M |
| 4.5 | **Newsletter Mockup** — preview de email com header, corpo, CTA no estilo da marca | P2 | S |
| 4.6 | **Business Card Mockup** — frente + verso | P2 | S |
| 4.7 | **Social Profile Mockup** — avatar + banner + bio simulados | P2 | S |

**Importante:** Mockups usam dados ficticios contextuais ao nicho (ex: curso eletrica → mockup de post sobre "5 erros na NR-10"). O conteudo e gerado a partir do BrandConfig.mockups.

---

### Epic 5: Anti-Generic Quality System

**Objetivo:** Garantir que toda marca gerada pareca profissional, nao generica.

| ID | Story | Prioridade | Complexidade |
|----|-------|------------|-------------|
| 5.1 | **Semantic Token Naming** — tokens usam nomes proprios por marca, nao "primary/secondary". Ex: "Ruptura Red", "Void", "Creation Amber" | P0 | S |
| 5.2 | **Texture Library** — sistema de overlays (grain, paper, noise) configuravel por marca. Opcoes: clean, textured, editorial, organic | P1 | M |
| 5.3 | **Curated Font Pairs** — banco de 15-20 pares tipograficos (display + body) categorizados por personalidade. NAO livre escolha | P0 | M |
| 5.4 | **Color Intelligence** — paletas geradas com OKLCH garantem uniformidade perceptual. Nomes semanticos automaticos baseados no matiz | P0 | M |
| 5.5 | **Quality Checklist** — checklist automatizado de 10 pontos que valida se a marca "parece feita por humano" | P1 | S |
| 5.6 | **Niche-Aware Defaults** — defaults inteligentes por nicho (restaurante = tons quentes + serif; tech = tons frios + sans-serif geometric; saude = verde + tons calmos) | P1 | M |

**Checklist Anti-Generico (10 pontos):**

```
□ Tokens tem nomes proprios (nao "primary/secondary")?
□ Tipografia tem carater (nao e Inter + system-ui generico)?
□ Paleta vai alem de "azul corporativo + cinza"?
□ Motion tem personalidade definida (nao e ease-in-out padrao)?
□ Existe textura/imperfeicao intencional?
□ Layout dos mockups tem momento editorial?
□ Voz da marca tem opiniao (nao e "corporativese")?
□ Espacamento e generoso (respira, nao e apertado)?
□ Hierarquia visual e dramatica (contraste de escala)?
□ Em 3 segundos, da pra diferenciar desta marca de outra?
```

---

## 5. Niche Intelligence — Banco de Referencias

Sistema de defaults e referencias por nicho que alimenta o wizard:

| Nicho | Arquetipos Comuns | Paleta Tendencia | Tipo Tendencia | Motion |
|-------|-------------------|------------------|----------------|--------|
| **Educacao Tecnica** | Especialista, Sage | Azul escuro + laranja industrial | Geometric sans + mono | Precise |
| **Saude/Clinica** | Cuidador, Sage | Verde menta + off-white | Humanist sans + serif suave | Calm |
| **Pet Shop** | Amigo, Inocente | Amarelo + verde natura | Rounded sans + handwritten | Energetic |
| **Barbearia** | Rebelde, Explorador | Preto + dourado + castanho | Slab serif + condensed sans | Precise |
| **SaaS/Tech** | Mago, Criador | Indigo + gradients sutis | Geometric sans-serif | Minimal |
| **Gastronomia** | Artesao, Amante | Terracota + creme + verde oliva | Serif elegante + script | Organic |
| **Fitness** | Heroi, Explorador | Preto + neon accent | Condensed bold + geometric | Energetic |
| **Moda** | Amante, Rebelde | Preto + off-white + accent forte | High-contrast serif + minimal sans | Calm |
| **Imobiliario** | Governante, Sage | Azul navy + dourado | Classic serif + clean sans | Calm |
| **Cursos Online** | Sage, Mago | Depende do sub-nicho | Depende do sub-nicho | Depende |

Esses defaults sao **sugestoes iniciais** — o usuario pode sobrescrever qualquer coisa no wizard.

---

## 6. Decisoes Tecnicas

### 6.1 Migrar vs. Criar do Zero

**Decisao: Evoluir `pessoal/brandbook` existente.**

O que ja existe e aproveitavel:
- Multi-brand routing (`[brand]` slug) ✅
- BrandProvider com React Context ✅
- brand-schema.ts com tipos ✅
- Componentes: ColorSwatch, FontSpecimen, DosDontsGrid, PageTransition ✅
- 4 brands configurados (rupta, nbr5419, vortex-studio, zenith-labs) ✅
- Next.js 16 + React 19 ✅
- GSAP para animacoes ✅

O que precisa mudar:
- Upgrade Tailwind 3 → 4 (para @theme tokens dinamicos)
- Expandir BrandConfig schema (audience, positioning, voice, motion, textures, mockups)
- Adicionar Motion (Framer Motion) para UI animations
- Adicionar MDX para documentacao interativa por marca
- Adicionar Sandpack/React Live para code playgrounds
- Criar Brand Builder wizard (novo)
- Criar Application Mockups (novo)
- Criar Brand Portfolio dashboard (novo)
- Criar Agent Context export (novo)

### 6.2 Sistema de Cor — OKLCH

- Formato primario: OKLCH (perceptualmente uniforme)
- 3 camadas: Primitive (raw hues) → Semantic (brand/text/bg/status) → Component (button/card/input)
- Dark mode automatico via swap de tokens semanticos
- Naming semantico por marca (nao generico)

### 6.3 Tipografia — Variable Fonts + Banco Curado

Banco de pares curados (nao aleatoria):

| Par | Display | Body | Personalidade |
|-----|---------|------|---------------|
| **Confiavel** | Space Grotesk | Inter Variable | Tecnico, profissional |
| **Sofisticado** | Playfair Display | Source Sans 3 | Elegante, premium |
| **Rebelde** | Clash Display | Satoshi | Ousado, contemporaneo |
| **Acessivel** | General Sans | Nunito | Amigavel, acolhedor |
| **Editorial** | Fraunces | Literata | Artesanal, narrativo |
| **Minimalista** | Cabinet Grotesk | Inter Variable | Limpo, funcional |
| **Energetico** | Archivo Black | DM Sans | Bold, impactante |
| **Organico** | Lora | Source Serif 4 | Natural, humano |
| **Tech** | JetBrains Mono | Inter Variable | Codigo, dados |
| **Criativo** | Syne | Outfit | Experimental, arte |

Cada par inclui: type scale, fluid typography com `clamp()`, regras de uso, pesos recomendados.

### 6.4 Motion — 5 Perfis Pre-Definidos

| Perfil | Easing Principal | Duracao Base | Micro-Animacao | Exemplo Real |
|--------|-----------------|--------------|----------------|-------------|
| **Calm** | ease-out suave (0.25, 1, 0.5, 1) | 400ms | Fade sutil, slide lento | Airbnb, Notion |
| **Precise** | ease-out seco (0.16, 1, 0.3, 1) | 200ms | Displacement, snap | RUPTA, Linear |
| **Energetic** | spring (0.34, 1.56, 0.64, 1) | 250ms | Bounce, scale pop | Duolingo, Slack |
| **Organic** | ease-in-out (0.45, 0, 0.55, 1) | 350ms | Morph, flow | Apple, Stripe |
| **Minimal** | ease-out (0, 0, 0.2, 1) | 150ms | Fade only, minimo | Vercel, Linear |

---

## 7. Fases de Entrega

### Fase 1: Foundation + Brand Viewer (MVP)

**O que entrega:** Infraestrutura multi-brand funcional + brandbook interativo completo para qualquer marca configurada via JSON.

**Epics:**
- Epic 1: Foundation (1.1-1.5)
- Epic 3: Brand Viewer (stories P0: 3.1, 3.2, 3.4, 3.6)
- Epic 5: Anti-Generic (stories P0: 5.1, 5.3, 5.4)

**Resultado:** Dado um BrandConfig JSON, o sistema renderiza um brandbook interativo profissional com color explorer, typography playground, logo guidelines, e token browser. Ja com naming semantico, pares tipograficos curados, e paleta OKLCH.

---

### Fase 2: Brand Builder + Viewer Completo

**O que entrega:** Wizard que cria marcas do zero + restante do brandbook.

**Epics:**
- Epic 2: Brand Builder (2.1-2.8)
- Epic 3: Brand Viewer (stories P1: 3.3, 3.5, 3.7, 3.8, 3.10)
- Epic 5: Anti-Generic (stories P1: 5.2, 5.5, 5.6)

**Resultado:** Processo guiado de 10 steps que gera identidade completa para qualquer nicho. Brandbook completo com motion lab, voice guide, components, manifesto.

---

### Fase 3: Mockups + Polish

**O que entrega:** Mockups de aplicacao + refinamentos finais.

**Epics:**
- Epic 4: Application Mockups (4.1-4.7)
- Epic 2: Stories P2 (2.9, 2.10)
- Epic 3: Stories P2 (3.9)

**Resultado:** Cada marca tem mockups visuais mostrando como ela aparece em Instagram, YouTube, landing page, newsletter, business card. Apenas para orientacao e apresentacao.

---

## 8. Metricas de Sucesso

| Metrica | Alvo |
|---------|------|
| Tempo para criar brand (wizard) | < 2 horas |
| Completude do brandbook | 100% dos campos do BrandConfig |
| Qualidade percebida | Indistinguivel de projeto de agencia |
| Nichos suportados | Qualquer nicho (via niche intelligence + customizacao) |
| Consistencia de tokens | Zero tokens "primary/secondary" genericos |
| Performance (Lighthouse) | > 90 em todas as metricas |
| Agente IA legibilidade | JSON context parsavel sem ambiguidade |

---

## 9. Riscos e Mitigacoes

| Risco | Mitigacao |
|-------|-----------|
| Parecer generico apesar do sistema | Checklist anti-generico obrigatorio, texturas fisicas, naming semantico |
| Pares tipograficos limitados | Comecar com 10-15, expandir iterativamente |
| Paletas de cor sem carater | OKLCH + niche intelligence + naming proprio |
| Wizard longo demais | Defaults inteligentes por nicho, steps opcionais apos os 5 primeiros |
| Mockups parecem templates | Dados contextuais ao nicho, variacao de layout |

---

## 10. Referencias

### Pesquisa Completa (3 relatorios)
- `docs/research/premium-brand-identity-report.md` — Brand identities $60k+, design tokens, OKLCH, motion, anti-AI
- `docs/research/social-media-branding-research.md` — Instagram, LinkedIn, YouTube, newsletter, arquitetura de marca
- `docs/research/interactive-brandbooks-research.md` — Brandbooks interativos, tendencias 2026, stack tecnico

### Benchmarks
- Dropbox Brand: https://brand.dropbox.com (benchmark de brandbook interativo)
- Spotify Encore: https://spotify.design (sistema de sistemas)
- Starbucks Creative: https://creative.starbucks.com
- IBM Carbon: https://carbondesignsystem.com

### Projeto Base
- `pessoal/brandbook` — Brandbook existente com multi-brand, BrandProvider, componentes base
- Stack: Next.js 16, React 19, Tailwind 3 (upgrade → 4), GSAP

---

*PRD v2.0 — Morgan (PM) — Synkra AIOS*
*Escopo refinado: Branding + Design System + Mockups de apresentacao*
*Baseado em 3 relatorios de pesquisa com 90+ fontes reais*
