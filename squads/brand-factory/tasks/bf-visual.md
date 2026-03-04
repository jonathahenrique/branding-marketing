# bf-visual — Phase 4: Visual System

## Metadata
```yaml
id: bf-visual
phase: 4
name: Visual System
elicit: true
agent: brand-strategist
inputs: ["{slug}-discovery.yaml", "{slug}-strategy.yaml"]
outputs: ["{slug}-visual.yaml"]
output_dir: ".aios/brand-factory/{slug}/"
```

## Purpose
Criar o design system completo: cores (theme + palettes), tipografia, spacing, motion, shape e texturas.

## Execution Steps

### Step 1: Load — Carregar Contexto e Data Files

1. Ler discovery e strategy artifacts
2. Carregar data files relevantes:
   - `color-psychology.yaml` → para emocoes relevantes ao arquetipo
   - `typography-archetype-map.yaml` → para combinacoes do arquetipo
   - `motion-profiles.yaml` → para o profile do arquetipo
   - `spacing-presets.yaml` → para o preset do nicho
   - `niche-defaults.yaml` → para convencoes do segmento
   - `archetypes.yaml` → para tendencias visuais

### Step 2: Generate Palettes — Sub-fase 4a: Cores

Gerar 3 opcoes de paleta baseadas em:
- `color_tendencies` do niche-defaults
- `visual_tendency.colors` do arquetipo
- `color-psychology.yaml` palettes relevantes

```
🎨 FASE 4a: CORES

Baseado no arquetipo {archetype_name} e nicho {niche}:

**Paleta A: "{nome}" ⭐ Recomendada**
- Primary: {hex} ({nome}) — {justificativa}
- Secondary: {hex} ({nome}) — {justificativa}
- Background: {hex}
- Surface: {hex}
- Text: {hex}
- Emocao: {label da emotion}

**Paleta B: "{nome}"**
- Primary: {hex} ...
- ...

**Paleta C: "{nome}"**
- ...

Qual paleta prefere? (A, B, C, ou descreva ajustes)
```

Apos escolha, gerar os 16 tokens de theme + dark palette (10-12 cores) + light palette (6-7 cores) + philosophy + primaryUsage + secondaryUsage.

### Step 3: Generate Typography — Sub-fase 4b: Tipografia

Gerar 2 opcoes de combinacao tipografica do `typography-archetype-map.yaml`:

```
🔤 FASE 4b: TIPOGRAFIA

**Combinacao A: ⭐ Recomendada**
- Display: {font} ({source}) — {justification}
- Body: {font} ({source})
- Mono: {font} ({source})

**Combinacao B:**
- Display: {font} ...
- ...

Qual combinacao prefere? (A ou B)
```

Apos escolha, gerar type scale completo (9 niveis: Hero a Code) + regras tipograficas.

### Step 4: Generate Motion — Sub-fase 4c: Motion

Sugerir motion profile baseado no arquetipo:

```
🎬 FASE 4d: MOTION

Profile recomendado: **{profile}** — "{principle}"
> {description}

Tokens:
- --duration-instant: {value} ({usage})
- --duration-fast: {value} ({usage})
- --duration-normal: {value} ({usage})
- --duration-slow: {value} ({usage})
- --ease-default: {value}
- --ease-out: {value}

Micro-animations:
1. {element}: {behavior} ({duration}, {easing})
2. ...

Confirma este motion profile? (sim, ou sugira outro: calm/precise/energetic/organic/minimal)
```

### Step 5: Generate Spacing — Sub-fase 4c: Spacing

Selecionar preset de spacing baseado no nicho/arquetipo:

```
📐 FASE 4c: SPACING

Preset recomendado: **{label}** (base: {base}px)
> {description}

Escala: 2xs({px}) → xs({px}) → sm({px}) → md({px}) → lg({px}) → xl({px}) → 2xl({px}) → 3xl({px}) → 4xl({px}) → 5xl({px})

Confirma? (sim, ou prefere compact/standard/spacious)
```

### Step 6: Generate Shape — Sub-fase 4e: Shape & Textures

Gerar valores de shape baseados no arquetipo:

```
🔲 FASE 4e: SHAPE & TEXTURES

**Shape:**
- radiusSm: {valor} (ex: 4px, 8px, 12px, 0px)
- radiusMd: {valor}
- radiusLg: {valor}
- shadowElevated: {valor CSS}
- shadowModal: {valor CSS}
- borderWidth: {valor}

**Textures:**
- Style: {texture_style do arquetipo}
- Grain: {true/false}
- Grain Opacity: {0-0.15}
- Overlays: {lista ou vazio}

Confirma? (sim, ou ajuste valores)
```

### Step 7: Elicit — Revisao Final

Apresentar resumo visual completo. Aguardar confirmacao.

### Step 8: Save — Gerar Artefato

Salvar `{slug}-visual.yaml` com TODOS os valores:

```yaml
# Brand Factory — Visual Artifact
slug: "{slug}"
theme:
  bg: "{hex}"
  surface: "{hex}"
  surfaceHover: "{hex}"
  primary: "{hex}"
  primaryHover: "{hex}"
  primaryDeep: "{hex}"
  primaryMuted: "{rgba}"
  secondary: "{hex}"
  secondaryHover: "{hex}"
  secondaryDeep: "{hex}"
  secondaryMuted: "{rgba}"
  text: "{hex}"
  textSecondary: "{hex}"
  textTertiary: "{hex}"
  border: "{hex}"
  borderSubtle: "{hex}"
colors:
  philosophy: "{filosofia de cor}"
  dark: [...ColorToken[]]
  light: [...ColorToken[]]
  primaryUsage: { do: [...], dont: [...] }
  secondaryUsage: { do: [...], dont: [...] }
typography:
  stack: [...FontStack[]]
  scale: [...TypeLevel[]]
  rules: [...]
spacing:
  base: {number}
  scale: [...SpacingToken[]]
  rules: [...]
motion:
  principle: "{principle}"
  description: "{description}"
  profile: "{MotionProfile}"
  tokens: [...MotionToken[]]
  microAnimations: [...MicroAnimation[]]
  rules: [...]
shape:
  radiusSm: "{value}"
  radiusMd: "{value}"
  radiusLg: "{value}"
  shadowElevated: "{value}"
  shadowModal: "{value}"
  borderWidth: "{value}"
textures:
  style: "{TextureStyle}"
  grain: {boolean}
  grainOpacity: {number}
  overlays: [...]
phase_complete: true
```

### Step 9: Transition
"Visual System completo. Proxima fase: **Logo Direction**."

## Quality Gate
- [ ] Theme com 16 tokens (todos hex reais)
- [ ] Dark palette com 10-12 ColorTokens
- [ ] Light palette com 6-7 ColorTokens
- [ ] primaryUsage e secondaryUsage com do/dont
- [ ] Typography stack com 3 FontStacks (display/body/mono)
- [ ] Type scale com 9 TypeLevels (Hero a Code)
- [ ] Spacing com base + 10 SpacingTokens + regras
- [ ] Motion com principle + 6 tokens + 5 microAnimations + regras
- [ ] Shape com 6 propriedades
- [ ] Textures com style/grain/overlays
- [ ] TODAS as fontes sao gratuitas (Google Fonts / Fontshare)
- [ ] TODOS os hex sao valores reais (nao placeholders)
- [ ] TODOS os valores de motion sao CSS valido
