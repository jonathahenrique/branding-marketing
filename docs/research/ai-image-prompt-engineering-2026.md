# AI Image Prompt Engineering — Pesquisa Consolidada (2026)

> Pesquisa: Morgan (@pm) | Data: 2026-03-04
> Escopo: Logo generation, variações consistentes, social media images
> Objetivo: Corrigir processos do Brand Engine com base no estado da arte

---

## TL;DR — Decisões Estratégicas

### O que estamos errando no Brand Engine:

1. **Prompt building simplista** — nosso `buildLogoPrompt.ts` não usa as trigger words e estruturas que os modelos esperam em 2026
2. **Pipeline de variações frágil** — geramos variações sem referência visual, cada chamada produz design inconsistente
3. **Sem vetorização real** — dependemos de sharp (raster) quando existem soluções SVG nativas (Recraft V4, StarVector, VTracer)
4. **Um único provider** — dependemos de OpenAI gpt-image-1 quando Recraft V4 (SVG nativo), Ideogram 3.0 (texto perfeito) e FLUX Kontext (variações) são superiores para logos
5. **Texto em logos via IA** — continuamos tentando gerar texto com IA quando o workflow profissional é: gerar ícone + adicionar tipografia manualmente

### O que devemos mudar (prioridade):

| Prioridade | Mudança | Impacto |
|-----------|---------|---------|
| P0 | Reformular `buildLogoPrompt.ts` com templates por tipo de logo | Qualidade imediata |
| P0 | Separar ícone e texto — gerar ícone com IA, texto manualmente | Elimina 80% dos problemas de tipografia |
| P1 | Adicionar Recraft V4 como provider (SVG nativo) | Elimina etapa de vetorização |
| P1 | Usar FLUX Kontext para pipeline de variações | Consistência entre variantes |
| P1 | Adicionar VTracer ao pipeline para conversão raster→SVG | SVGs limpos quando não usar Recraft |
| P2 | Ideogram 3.0 como provider para logos com texto | Texto 90-95% preciso |
| P2 | Style references persistentes por marca | Consistência em gerações futuras |
| P3 | LoRA training por marca (ai-toolkit) | Consistência total para clientes recorrentes |

---

## 1. Modelos — Ranking para Logos (2026)

### Tier 1: Especializados em Logos

| Modelo | Força Principal | Output | Texto | API |
|--------|----------------|--------|-------|-----|
| **Recraft V4 Pro** | Único que gera **SVG nativo** (vetores reais). #1 HuggingFace benchmark. Aceita paleta RGB exata. | SVG nativo + raster | Bom | Sim (fal.ai, Replicate) |
| **Ideogram 3.0** | **Melhor texto** (90-95% precisão). Style Reference System. Prompt Magic auto-enriquece. | Raster | Excelente | Sim |
| **Logo Diffusion** | Treinado exclusivamente em logos profissionais. Magic Editor. | Raster + SVG export | Bom | Sim |

### Tier 2: Generalistas com Boa Performance

| Modelo | Força Principal | Transparência | Texto |
|--------|----------------|---------------|-------|
| **GPT-Image-1.5** (OpenAI) | API robusta, edição iterativa, fundo transparente nativo (RGBA PNG) | Sim (`background: "transparent"`) | Bom |
| **Midjourney V7** | Estética artística superior. `--sref` + `--oref` para consistência. | Não nativo | Bom (95%+) |
| **Flux 2.0 Pro** | Supera MJ v6.1 em aderência a prompts | Sim | Médio |
| **Google Imagen 4** | Resolução 2K, texto nítido, 3 tiers de preço | Via API | Bom |
| **Adobe Firefly** | Licenciamento comercial seguro, vetores editáveis | Sim | Médio |

### Recomendação por Use Case

| Necessidade | Melhor Modelo |
|-------------|---------------|
| SVG nativo direto da IA | **Recraft V4 Vector** |
| Logo com texto perfeito | **Ideogram 3.0** |
| Conceito criativo / exploração | **Midjourney V7** |
| Pipeline programático via API | **GPT-Image-1.5** |
| Comercial-safe | **Adobe Firefly** |

---

## 2. Prompt Templates para Logos

### Fórmula Universal

```
Design a [TIPO DE LOGO] logo for [CONTEXTO DA MARCA].
It should be [ESTILOS/ADJETIVOS], incorporating [ELEMENTOS/ÍCONE].
Use the text "[TEXTO EXATO]" in [ESTILO TIPOGRÁFICO].
Color palette: [CORES ESPECÍFICAS HEX].
Style: clean vector art, flat design, minimal strokes, no gradients.
Output: isolated on [COR DE FUNDO], suitable for scalable professional branding.
```

### Trigger Words Essenciais

**Para estilo vetorial:**
`vector art`, `flat design`, `clean lines`, `scalable`, `graphic design`, `simple shapes`, `geometric`, `minimal strokes`, `no gradients`, `bold silhouette`, `balanced negative space`

**Para fundo limpo:**
`isolated on white background`, `plain background`, `transparent background`, `centered with generous padding`

**Para profissionalismo:**
`professional branding`, `corporate identity`, `brand mark`, `timeless`, `sophisticated`, `modern minimalist`

### O que NUNCA incluir

- `realistic`, `photorealistic`, `3D render` (a menos que intencional)
- `detailed`, `complex`, `intricate` (logos = simplicidade)
- `watercolor`, `oil painting`, `sketch`
- Descrições vagas sem qualificadores

### Template: Logo Minimalista / Tech

```
Design a minimalist logo mark for "[NOME]", a [TIPO DE EMPRESA].
The icon should be a [FORMA GEOMÉTRICA] symbolizing [CONCEITO].
Style: flat vector, clean geometric lines, bold silhouette.
Typography: "[NOME]" in [TIPO DE FONTE] typeface, [PESO], [TRACKING].
Color palette: primary [HEX], accent [HEX].
Layout: horizontal lockup, icon left, wordmark right.
Output: isolated on white background, centered, no decorative elements,
suitable for favicon and billboard scaling.
```

### Template: Wordmark / Lettermark

```
Design a wordmark logo spelling "[TEXTO EXATO]".
Typography style: [SERIF/SANS/DISPLAY], [PESO], [MODIFICAÇÕES].
The letter "[LETRA]" should be [MODIFICAÇÃO ESPECIAL] to create a unique mark.
Color: [COR] on [FUNDO].
Style: clean, vector, minimal, no icons or symbols.
Ensure perfect letterform balance, consistent kerning, professional finish.
No decorative elements, no backgrounds, no borders.
```

### Template: Emblem / Badge

```
Create an emblem-style logo for "[NOME]".
Shape: [CÍRCULO/ESCUDO/HEXÁGONO] border containing:
- Central icon: [DESCRIÇÃO DO ÍCONE]
- Top arc text: "[TEXTO SUPERIOR]"
- Bottom arc text: "[TEXTO INFERIOR]"
Style: flat vector, vintage-modern hybrid, clean line weight.
Colors: [PALETA].
White background, centered, no shadows.
```

### Template: Variação Mono (a partir de existente)

```
Convert this logo to a single-color monochrome version.
Use only [BRANCO/PRETO] (#HEXCODE).
Maintain the exact same proportions, spacing, and layout.
Remove all color fills, replace with solid [COR].
Keep all shapes, paths, and text identical.
Transparent background, centered.
Change only the color. Keep everything else the same.
```

### Negative Prompts Universais

```
--no realistic details, photorealistic, 3D rendering
--no shading, shadows, gradients, textures
--no busy background, complex background
--no watermark, signature, extra text
--no blurry edges, artifacts, noise
--no decorative borders, frames, ornaments
--no misspelled text, distorted letters, extra characters
```

---

## 3. Consistência de Variações — O Problema Central

### Estratégias por Modelo

#### Midjourney V7: `--sref` + `--oref`

| Parâmetro | Função | Uso para Logos |
|-----------|--------|----------------|
| `--sref [URL]` | Copia estilo visual (cores, textura, medium) | Manter paleta entre variações |
| `--oref [URL]` | Copia objeto/sujeito (mantém ícone) | Manter ícone consistente |
| `--ow 80-100` | Peso do oref | Maior = mais fiel ao original |
| Combinar ambos | Estilo + sujeito consistentes | Melhor resultado |

#### GPT-Image-1.5: Edição Iterativa

```python
# Gerar base
response = client.images.generate(
    model="gpt-image-1.5",
    prompt="...",
    n=4,
    background="transparent"
)

# Editar para variação
response = client.images.edit(
    model="gpt-image-1.5",
    image=open("logo_base.png", "rb"),
    prompt="""Rearrange this logo into a horizontal lockup.
    Keep the exact same icon design, colors, and style.
    Change only the layout. Keep everything else the same."""
)
```

**Protocolo:** Em cada iteração, re-especificar o que DEVE ser mantido + "change only X, keep everything else the same".

#### FLUX Kontext: Edição por Instrução Textual

Modelo da Black Forest Labs para edição via prompt. Ideal para variações mantendo consistência. Suporta LoRAs customizados via flux-pro-trainer.

#### Recraft V4: Paleta Fixa

Especificar cores RGB exatas na request da API. Modelo respeita restrições de paleta.

### Workflow Recomendado (Essential Brand Kit)

```
1. HORIZONTAL  → Gerar primeiro (conceito base)
2. STACKED     → Image-to-image do horizontal: "rearrange into stacked layout"
3. ICON        → Extrair/isolar o ícone do horizontal
4. MONO-LIGHT  → Converter para branco sobre fundo escuro
5. MONO-DARK   → Converter para preto sobre fundo claro
```

---

## 4. Texto em Logos — Workarounds

### Ranking de Precisão de Texto por Modelo

| Modelo | Precisão | Recomendação |
|--------|----------|--------------|
| Ideogram 3.0 | 90-95% | Melhor opção |
| Midjourney V7 | 95%+ | Grande salto vs V6 |
| GPT-Image-1.5 | 85-90% | Bom com spell-out |
| Recraft V4 | 85-90% | Editável (SVG) |
| Flux 2.0 | 70-80% | Menos confiável |

### Técnicas de Prompt

```
# Aspas para texto exato
the text "SYNKRA" in bold sans-serif

# Spell out para nomes complexos
the word "SYNKRA" spelled S-Y-N-K-R-A

# ALL CAPS
text: "FIELD & FLOUR" -- exact characters, no additions

# Tipografia específica
"Morning Brew" in elegant cursive script, consistent kerning

# Manter texto curto (1-3 palavras)

# Descrever posição
text centered below the icon, horizontally aligned
```

### Workflow Híbrido (Recomendado)

```
Passo 1: Gerar ÍCONE sem texto
  "abstract geometric mark, no text, no letters, icon only"

Passo 2: Adicionar tipografia manualmente
  - Figma / Illustrator / Canva (controle total)

Passo 3 (alternativa): Gerar com texto + corrigir
  - Ideogram 3.0 para gerar com texto
  - Se erros, rasterizar ícone e adicionar texto manual
```

---

## 5. Pipeline Completo: Conceito a Entrega

```
FASE 1: DESCOBERTA (Brand Brief)
  Input:  Nome, setor, valores, personalidade, público-alvo
  Output: Briefing estruturado para prompt

FASE 2: EXPLORAÇÃO (15-20 conceitos)
  Modelo: Midjourney V7 (--style raw --s 50) ou GPT-Image-1.5 (n=4)
  Prompt: 4-6 variações com diferentes direções
  Output: 15-20 conceitos visuais

FASE 3: SELEÇÃO + REFINAMENTO
  Ação:   Escolher 2-3 direções promissoras
  Modelo: GPT-Image-1.5 (edição iterativa) ou Ideogram 3.0
  Técnica: Image-to-image com ajustes incrementais
  Output: 3-5 conceitos refinados

FASE 4: VARIANTES (Essential Brand Kit)
  a) Horizontal lockup (icon + wordmark)
  b) Stacked (icon acima, wordmark abaixo)
  c) Icon-only
  d) Mono-light (branco, fundos escuros)
  e) Mono-dark (preto, fundos claros)

FASE 5: VETORIZAÇÃO
  a) Recraft V4 Vector (se modelo original)
  b) VTracer (universal, 5.5k stars)
  c) StarVector (research-grade, NeurIPS 2025)
  d) Manual trace em Illustrator

FASE 6: TIPOGRAFIA FINAL
  - Substituir texto da IA por tipografia manual
  - Ajustar kerning, peso, alinhamento

FASE 7: VALIDAÇÃO
  [ ] Logo legível em 16x16px (favicon)?
  [ ] Funciona em preto e branco?
  [ ] Silhueta reconhecível?
  [ ] Texto 100% correto?
  [ ] SVG limpo?
  [ ] Todas 5 variantes consistentes?
```

### Pipeline Programático (API — Brand Engine)

```typescript
// Fase 1: Gerar conceito base
const base = await openai.images.generate({
  model: "gpt-image-1.5",
  prompt: buildLogoPrompt(brandConfig),
  size: "1024x1024",
  quality: "high",
  background: "transparent",
  n: 4
});

// Fase 2: Gerar variantes via edit
const variants = await Promise.all([
  generateVariant(selected, "horizontal"),
  generateVariant(selected, "stacked"),
  generateVariant(selected, "icon"),
]);

// Fase 3: Mono via sharp
const monoLight = await sharp(selected.buffer)
  .threshold(128).negate().toBuffer();
const monoDark = await sharp(selected.buffer)
  .threshold(128).toBuffer();

// Fase 4: Vectorizar
const svg = await recraftVectorize(selected.buffer);
```

---

## 6. Social Media — Modelos e Técnicas

### Modelos Dominantes

| Modelo | Força | Uso |
|--------|-------|-----|
| **GPT Image 1.5** | Composições complexas, texto (~85%) | Posts com texto overlay |
| **Midjourney V7** | Estética insuperável, `--sref`/`--oref` | Hero images, lifestyle |
| **Ideogram 3.0** | Tipografia perfeita, Style Codes | Posts com quotes |
| **Adobe Firefly** | Licenciamento seguro | Enterprise, compliance |

### Dimensões por Plataforma

| Plataforma | Feed | Stories/Reels | Carousel |
|-----------|------|---------------|----------|
| Instagram | 1080×1350 (4:5) | 1080×1920 (9:16) | 1080×1080 (1:1) |
| LinkedIn | 1200×627 (1.91:1) | 1080×1920 (9:16) | 1080×1080 (1:1) |
| Twitter/X | 1600×900 (16:9) | — | — |
| TikTok | — | 1080×1920 (9:16) | — |

### Fórmula Universal para Social Media

```
[TIPO] of [SUJEITO], [COMPOSIÇÃO], [LUZ], [ESTILO], [CORES], [MOOD], [ESPAÇO_TEXTO], [RATIO]
```

### Template: Quote Post

```
Professional social media post with text overlay space.
Clean, modern background with brand colors [HEX1] and [HEX2].
Subtle geometric pattern or gradient.
Large negative space in the center for text overlay.
Square format (1:1), 1080x1080 pixels.
Style: minimal, corporate, polished.
No text in the image, only visual composition.
```

### Brand Consistency — 5 Camadas

1. **Brand Kit digital** — hex codes exatos, não "azul"
2. **Style Reference persistente** — 3-5 imagens de referência
3. **Template de prompt padronizado** com variáveis
4. **Treinamento de estilo** com 15-20 imagens
5. **Compliance automatizado**

**Regra crítica:** NUNCA pedir para a IA gerar o logo — sempre sobrepor programaticamente.

### Batch Generation

- Um modelo, uma campanha
- Seed fixa como base
- Style reference persistente
- Template de prompt onde só variáveis mudam

---

## 7. Ferramentas e Repos Open-Source — Top 10

| # | Recurso | Stars | Relevância para Brand Engine |
|---|---------|-------|------------------------------|
| 1 | **FLUX.1 Kontext** | — | Pipeline de variações de logo via instrução textual |
| 2 | **VTracer** | 5.558 | Conversão raster→SVG (Rust, rápido) |
| 3 | **ostris/ai-toolkit** | 9.637 | Treinar LoRAs por marca |
| 4 | **logocreator** (Nutlope) | 6.210 | Referência: Next.js + Flux Pro |
| 5 | **StarVector** | 4.285 | Geração direta de SVG (NeurIPS 2025) |
| 6 | **B-LoRA** | 395 | Extrair estilo de 1 imagem → aplicar em novas |
| 7 | **Z-Image** | 10.365 | Style injection via prompt (Alibaba) |
| 8 | **social-media-agent** (LangChain) | 2.321 | Automação social media com human-in-the-loop |
| 9 | **OmniSVG** | 2.389 | Gerador SVG end-to-end (NeurIPS 2025) |
| 10 | **svgmaker-mcp** | 41 | MCP Server para SVG (integra com Claude) |

### LoRAs Relevantes (HuggingFace)

| Modelo | Plataforma | Uso |
|--------|-----------|-----|
| Logo.Redmond V2 | SDXL | LoRA para logos genéricos |
| FLUX.1-dev-LoRA-Logo-Design | Flux | LoRA para logo design |
| Logo-Design-Flux-LoRA | Flux | LoRA profissional |
| FLUX.1-Kontext-dev | Flux | Edição/variação de imagens |

---

## 8. Pesquisa Acadêmica Relevante (2025-2026)

| Paper | Venue | Relevância |
|-------|-------|-----------|
| OmniSVG | NeurIPS 2025 | Geração SVG end-to-end com VLMs |
| Chat2SVG | CVPR 2025 | Pipeline LLM+diffusion para SVG |
| StarVector + RLRF | NeurIPS 2025 | Foundation model para SVG como código |
| ConsisLoRA | arXiv 2025 | Consistência estilo/conteúdo em LoRA |
| B-LoRA | ECCV 2024 | Separação implícita estilo-conteúdo |
| CRAFT-LoRA | arXiv 2026 | Personalização content-style training-free |
| Match-and-Fuse | arXiv 2025 | Geração consistente de conjuntos de imagens |

---

## Fontes Principais

- [AND Academy - AI Prompts for Logo Design 2026](https://www.andacademy.com/resources/blog/graphic-design/ai-prompts-for-logo-design/)
- [Superside - AI Prompts Logo Design (Midjourney)](https://www.superside.com/blog/ai-prompts-logo-design)
- [LogoDiffusion - Top AI Logo Tools 2026](https://logodiffusion.com/blog/top-ai-logo-design-tools-in-2026)
- [Midjourney Docs - Style/Omni Reference](https://docs.midjourney.com)
- [OpenAI - GPT-Image-1.5 Prompting Guide](https://developers.openai.com/cookbook/examples/multimodal/image-gen-1.5-prompting_guide/)
- [Ideogram 3.0 Features](https://ideogram.ai/features/3.0)
- [Recraft V4 Introduction](https://www.recraft.ai/blog/introducing-recraft-v4-design-taste-meets-image-generation)
- [Zapier - Best AI Image Generators 2026](https://zapier.com/blog/best-ai-image-generator/)
- [SocialPilot - Social Media Image Sizes 2026](https://www.socialpilot.co/blog/social-media-image-sizes)
- [Typeface - AI Brand Management](https://www.typeface.ai/blog/ai-brand-management-how-to-maintain-brand-consistency-with-ai-image-generators)
- [VectorWitch - AI SVG Guide 2026](https://vectorwitch.com/blog/the-complete-guide-to-ai-powered-svg-generation-in-2026/)
- [GitHub: logocreator](https://github.com/Nutlope/logocreator)
- [GitHub: VTracer](https://github.com/visioncortex/vtracer)
- [GitHub: StarVector](https://github.com/joanrod/star-vector)
- [GitHub: OmniSVG](https://github.com/OmniSVG/OmniSVG)
- [GitHub: ai-toolkit](https://github.com/ostris/ai-toolkit)
- [GitHub: FLUX.1 Kontext](https://huggingface.co/black-forest-labs/FLUX.1-Kontext-dev)
