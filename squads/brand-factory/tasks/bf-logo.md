# bf-logo — Phase 5: Logo Direction

## Metadata
```yaml
id: bf-logo
phase: 5
name: Logo Direction
elicit: true
agent: brand-strategist
inputs: ["{slug}-discovery.yaml", "{slug}-strategy.yaml", "{slug}-visual.yaml"]
outputs: ["{slug}-logo.yaml"]
output_dir: ".aios/brand-factory/{slug}/"
```

## Purpose
Definir conceito, descricao, variantes (sem SVG — usuario adiciona depois), regras e misuse.

## Execution Steps

### Step 1: Load — Carregar Contexto

Ler discovery, strategy e visual artifacts.

### Step 2: Elicit — Logo Existente?

```
🎯 FASE 5: LOGO DIRECTION

Voce ja tem um logo para {name}?

A) **Sim, ja tenho** — vou descreve-lo
B) **Nao, preciso de direcao** — gere um brief criativo
```

### Step 3a: Se TEM logo

Perguntar:
```
Descreva seu logo:
- Que tipo? (icone, wordmark, combinacao, emblema)
- Que elementos visuais tem?
- Que conceito representa?
```

Gerar logo section baseado na descricao.

### Step 3b: Se NAO tem logo — Gerar Brief

Com base no arquetipo, nicho e visual system:

```
📐 BRIEF CRIATIVO DE LOGO

**Conceito:** {conceito baseado no arquetipo + posicionamento}
**Descricao:** {descricao detalhada do que o logo deve transmitir}

**Direcao visual:**
- Estilo: {baseado no arquetipo — geometrico, organico, minimalista, etc.}
- Cores: {cores da paleta definida}
- Tipografia do wordmark: {display font escolhida}
- Sensacao: {3-4 adjetivos}

**Variantes sugeridas:**
1. **{Nome Variante 1}** — {descricao + quando usar}
2. **{Nome Variante 2}** — {descricao + quando usar}
3. **{Nome Variante 3}** — {descricao + quando usar}
4. **{Nome Variante 4}** (opcional) — {descricao + quando usar}

> 💡 Voce adicionara os SVGs em `public/logos/` depois.
> As descricoes servem como brief para designer ou ferramenta de IA.

Confirma esta direcao? (sim, ou ajuste)
```

### Step 4: Generate Rules & Misuse

```
**📏 REGRAS DO LOGO:**
1. {regra de clearspace}
2. {regra de tamanho minimo}
3. {regra de cores permitidas}
4. {regra de uso em backgrounds}
5. {regra especifica ao contexto}

**❌ MISUSE (nao fazer):**
1. {misuse 1}
2. {misuse 2}
3. {misuse 3}
4. {misuse 4}
```

### Step 5: Save — Gerar Artefato

Salvar `{slug}-logo.yaml`:

```yaml
# Brand Factory — Logo Artifact
slug: "{slug}"
logo:
  concept: "{conceito}"
  description: "{descricao detalhada}"
  variants:
    - { name: "{variante1}", description: "{desc}" }
    - { name: "{variante2}", description: "{desc}" }
    - { name: "{variante3}", description: "{desc}" }
  rules:
    - "{regra1}"
    - "{regra2}"
    - "{regra3}"
    - "{regra4}"
    - "{regra5}"
  misuse:
    - "{misuse1}"
    - "{misuse2}"
    - "{misuse3}"
    - "{misuse4}"
phase_complete: true
```

### Step 6: Transition
"Logo Direction completa. Proxima fase: **Marketing Mockups** — vou gerar conteudo de exemplo automaticamente."

## Quality Gate
- [ ] Concept definido (1 frase)
- [ ] Description detalhada (2-3 frases)
- [ ] 3-4 variantes com name e description (sem file — usuario adiciona depois)
- [ ] 5+ regras de uso
- [ ] 4+ misuse
- [ ] Artefato salvo
