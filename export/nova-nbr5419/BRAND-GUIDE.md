# NBR 5419:2026 — Brand Guide (Developer Handoff)

> Gerado em: 2026-03-07 | Fonte: Brand Engine v2

---

## Quick Start (Next.js + Tailwind)

### 1. Instalar Fontes

No `layout.tsx` ou `_app.tsx`, adicionar via Google Fonts:

```tsx
import { Outfit, Source_Sans_3, Fira_Code } from 'next/font/google'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
})

// No <body>:
<body className={`${outfit.variable} ${sourceSans.variable} ${firaCode.variable}`}>
```

### 2. Adicionar Tailwind Preset

```js
// tailwind.config.js
import nbr5419Preset from './nbr5419-tailwind-preset'

export default {
  presets: [nbr5419Preset],
  // ...
}
```

### 3. Importar CSS Variables (opcional)

```css
/* globals.css */
@import './nbr5419-tokens.css';
```

### 4. Usar nos componentes

```tsx
// Exemplos com classes Tailwind do preset:
<section className="bg-nbr-bg-deep text-nbr-text">
  <h1 className="font-display text-nbr-hero text-nbr-amber">
    Aprenda a norma com quem a escreveu.
  </h1>
  <p className="font-body text-nbr-body text-nbr-text-secondary">
    Formação online 100% prática...
  </p>
  <button className="bg-nbr-amber hover:bg-nbr-amber-hover text-nbr-bg-deep
                      rounded-nbr-md px-nbr-xl py-nbr-md
                      transition-all duration-nbr-fast ease-nbr-out">
    Garantir vaga na Turma Fundadora
  </button>
</section>
```

---

## Paleta de Cores

### Dark Theme (Primário — fundo navy)

| Token | Hex | Uso |
|-------|-----|-----|
| `bg-deep` | `#030912` | Background principal |
| `bg-surface` | `#0A1628` | Cards, superfícies |
| `bg-elevated` | `#112240` | Hover de card, dropdowns |
| `amber-primary` | `#F0C142` | CTA, highlights, headings |
| `amber-hover` | `#DDA832` | Hover states |
| `amber-deep` | `#C8910E` | Pressed state |
| `text-primary` | `#F5F5F5` | Texto principal |
| `text-secondary` | `#8B9BB5` | Texto secundário |
| `text-tertiary` | `#5A6A82` | Placeholders |

### Light Sections (seções claras alternadas)

| Token | Hex | Uso |
|-------|-----|-----|
| `bg-light` | `#F8F9FC` | Background seções claras |
| `surface-light` | `#EEF1F6` | Cards em seções claras |
| `amber-contrast` | `#C8910E` | Amber sobre fundo claro |
| `text-light` | `#0A1628` | Texto em fundo claro |

### Regras de uso

**Amber (CTA/destaque):**
- SIM: CTAs, highlights, headings hero, badges
- NÃO: Background de grandes áreas, texto corrido, borders decorativos

**Navy (superfícies):**
- SIM: Cards, tags, gradientes sutis, bordas
- NÃO: CTA principal, texto corrido

---

## Tipografia

| Nível | Font | Desktop | Mobile | Weight | Uso |
|-------|------|---------|--------|--------|-----|
| Hero | Outfit | 72px | 40px | 800 | Landing hero |
| H1 | Outfit | 48px | 32px | 700 | Títulos de página |
| H2 | Outfit | 36px | 26px | 700 | Seções principais |
| H3 | Outfit | 24px | 20px | 600 | Subsecções, cards |
| H4 | Outfit | 18px | 16px | 600 | Headers menores |
| Body | Source Sans 3 | 16px | 16px | 400 | Texto corrido |
| Small | Source Sans 3 | 14px | 14px | 400 | Metadados |
| Micro | Source Sans 3 | 11px | 11px | 500 | Labels, overlines |
| Code | Fira Code | 14px | 14px | 400 | Refs normativas |

**Regras:**
- Peso **800** reservado exclusivamente para Hero
- Headlines em **âmbar #F0C142** ou **branco #F5F5F5** sobre fundo escuro
- **Fira Code** para referências normativas: `NBR 5419-3:2026`, `LPL I`, `r = 20m`

---

## Spacing

Base: **4px**

| Token | Valor | Uso comum |
|-------|-------|-----------|
| 2xs | 4px | Micro gaps |
| xs | 8px | Inline spacing |
| sm | 12px | Entre itens de lista |
| md | 16px | Padding interno padrão |
| lg | 24px | Gap entre cards |
| xl | 32px | Padding de cards |
| 2xl | 48px | Separação de blocos |
| 3xl | 64px | Separação de seções |
| 4xl | 96px | Padding hero vertical |
| 5xl | 128px | Padding hero grande |

---

## Shape

| Propriedade | Valor |
|-------------|-------|
| Border radius SM | 6px |
| Border radius MD | 10px |
| Border radius LG | 16px |
| Shadow elevated | `0 4px 24px rgba(10,22,40,0.18)` |
| Shadow modal | `0 16px 64px rgba(3,9,18,0.8)` |
| Border width | 1px |

---

## Motion

| Token | Valor | Uso |
|-------|-------|-----|
| instant | 80ms | Hover, focus |
| fast | 150ms | Micro-interações, tooltips |
| normal | 250ms | Transições de componente |
| slow | 400ms | Modais, page transitions |

**Easings:**
- Default: `cubic-bezier(0.4, 0, 0.2, 1)`
- Out: `cubic-bezier(0, 0, 0.2, 1)`

**Animações padrão:**
- Botão CTA: `scale(1.02)` em 150ms ease-out
- Card hover: `translateY(-2px)` + shadow em 150ms
- Stagger entre itens: máximo 80ms
- Sempre respeitar `prefers-reduced-motion`

---

## Logo

10 variantes disponíveis na pasta `/logos/`:

| Arquivo | Uso |
|---------|-----|
| `horizontal.png` | Header, docs (versão principal) |
| `horizontal-light.png` | Sobre fundos escuros |
| `stacked.png` | Social media, mobile, espaços quadrados |
| `icon.png` / `icon-clean.png` | Favicon, app icon |
| `mono-light.png` | Sobre fundos navy/escuros |
| `mono-dark.png` | Sobre fundos claros, impressão |

**Regras:**
- Clearspace: 1× altura do escudo em todos os lados
- Tamanho mínimo: escudo >= 32px de altura
- Ícone SPDA interno: sempre branco ou #030912
- Não distorcer, não aplicar drop-shadow, não remover chevrons

---

## Photography

- **Estilo:** Corporativo moderno com color grading âmbar/navy
- **Overlay:** `rgba(3,9,18,0.4)` sobre fotos para integrar à paleta
- **Subjects:** Professores em ambiente técnico, engenheiros em campo, documentação técnica
- **Evitar:** Stock genérico, aperto de mão corporativo, sorrisos forçados

---

## Arquivos neste pacote

```
nova-nbr5419/
├── nbr5419-tokens.css          ← CSS Variables (universal)
├── nbr5419-tailwind-preset.js  ← Tailwind preset (import no config)
├── nbr5419-tokens.json         ← JSON tokens (programático)
├── BRAND-GUIDE.md              ← Este arquivo
└── logos/                      ← 10 variantes de logo
    ├── horizontal.png
    ├── horizontal-light.png
    ├── stacked.png
    ├── stacked-light.png
    ├── icon.png
    ├── icon-clean.png
    ├── icon-light.png
    ├── mono-light.png
    ├── mono-dark.png
    └── manifest.json
```
