# bf-mockups — Phase 6: Marketing Mockups

## Metadata
```yaml
id: bf-mockups
phase: 6
name: Marketing Mockups
elicit: false
agent: brand-strategist
inputs: ["{slug}-discovery.yaml", "{slug}-strategy.yaml", "{slug}-voice.yaml", "{slug}-visual.yaml"]
outputs: ["{slug}-mockups.yaml"]
output_dir: ".aios/brand-factory/{slug}/"
```

## Purpose
Gerar automaticamente mockups de marketing (Instagram, YouTube, newsletter, landing) usando TODO o contexto acumulado. Sem perguntas — usa o contexto das fases anteriores.

## Execution Steps

### Step 1: Load — Carregar Todo o Contexto

Ler TODOS os artefatos anteriores:
- `{slug}-discovery.yaml` — nome, nicho, publico, dor, desejo
- `{slug}-strategy.yaml` — posicionamento, personalidade, valores, tagline
- `{slug}-voice.yaml` — tom, regras de voz
- `{slug}-visual.yaml` — cores, tipografia

Ler `squads/brand-factory/data/photography-styles.yaml` para direcao fotografica.

### Step 2: Generate Instagram Posts

Gerar 4 posts no tom da marca:

```
📱 INSTAGRAM POSTS

1. **{type: quote}**
   Headline: "{frase no tom da marca — nao generico}"

2. **{type: tip}**
   Headline: "{titulo da dica}"
   Body: "{corpo da dica — util e no tom}"
   Accent: "{cor accent}"

3. **{type: stats}**
   Headline: "{numero impactante}"
   Body: "{contexto do numero}"
   Accent: "{cor}"

4. **{type: cta}**
   Headline: "{chamada para acao no tom}"
   Body: "{corpo}"
   Accent: "{cor}"
```

**CRITICO:** Cada post deve:
- Usar o TOM exato definido na fase de Voice
- Referir-se ao NEGOCIO especifico (nao generico)
- Seguir as REGRAS de voz (se a regra e "frases curtas", as frases devem ser curtas)

### Step 3: Generate YouTube Thumbnails

Gerar 2-3 thumbnails:

```
🎬 YOUTUBE THUMBNAILS

1. Headline: "{titulo atrativo}"
   Style: {face-text | before-after | numbered | dramatic | tutorial}

2. Headline: "{titulo}"
   Style: {style}
```

### Step 4: Generate Newsletter

```
📧 NEWSLETTER

Subject: "{subject line — curiosidade + valor}"
Headline: "{headline principal}"
Body:
- "{paragrafo 1 — hook}"
- "{paragrafo 2 — conteudo}"
CTA: "{texto do botao}"
```

### Step 5: Generate Landing Hero

```
🏠 LANDING HERO

Headline: "{headline poderosa — max 8 palavras}"
Subheadline: "{1-2 frases de suporte}"
CTA Primary: "{texto do botao principal}"
CTA Secondary: "{texto do botao secundario}" (opcional)
```

### Step 6: Generate Photography & Iconography

Baseado no arquetipo e nicho, selecionar do `photography-styles.yaml`:

```
📸 PHOTOGRAPHY DIRECTION

Style: "{style label}"
Lighting: "{lighting}"
Composition: "{composition}"
Color Treatment: "{colorTreatment}"
Subjects: [...]
Avoid: [...]

🔷 ICONOGRAPHY

Style: "{style label}"
Grid: "{grid}"
Stroke Width: "{strokeWidth}"
```

### Step 7: Present — Mostrar Tudo

Apresentar todos os mockups gerados de uma vez. Informar que esta fase e automatica mas o usuario pode pedir ajustes.

### Step 8: Save — Gerar Artefato

Salvar `{slug}-mockups.yaml`:

```yaml
# Brand Factory — Mockups Artifact
slug: "{slug}"
mockups:
  instagramPosts:
    - { type: "quote", headline: "..." }
    - { type: "tip", headline: "...", body: "...", accent: "..." }
    - { type: "stats", headline: "...", body: "...", accent: "..." }
    - { type: "cta", headline: "...", body: "...", accent: "..." }
  youtubeThumbnails:
    - { headline: "...", style: "..." }
    - { headline: "...", style: "..." }
  newsletter:
    subject: "..."
    headline: "..."
    body: ["...", "..."]
    ctaText: "..."
  landingHero:
    headline: "..."
    subheadline: "..."
    ctaText: "..."
    ctaSecondary: "..."
photography:
  style: "..."
  lighting: "..."
  composition: "..."
  colorTreatment: "..."
  subjects: [...]
  avoid: [...]
iconography:
  style: "..."
  grid: "..."
  strokeWidth: "..."
phase_complete: true
```

### Step 9: Transition
"Mockups gerados. Proxima e ultima fase: **Assembly** — vou compilar tudo em um arquivo TypeScript production-ready."

## Quality Gate
- [ ] 4 Instagram posts (tipos variados: quote, tip, stats, cta)
- [ ] Posts no TOM correto da marca (nao generico)
- [ ] Posts referem-se ao NEGOCIO especifico
- [ ] 2-3 YouTube thumbnails com style definido
- [ ] Newsletter completa (subject, headline, body[], ctaText)
- [ ] Landing hero com headline, subheadline, CTA
- [ ] Photography direction com todos os campos
- [ ] Iconography com style, grid, strokeWidth
- [ ] Artefato salvo
