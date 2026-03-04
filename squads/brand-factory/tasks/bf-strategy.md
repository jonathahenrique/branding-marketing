# bf-strategy — Phase 2: Strategy

## Metadata
```yaml
id: bf-strategy
phase: 2
name: Strategy
elicit: true
agent: brand-strategist
inputs: ["{slug}-discovery.yaml"]
outputs: ["{slug}-strategy.yaml"]
output_dir: ".aios/brand-factory/{slug}/"
```

## Purpose
Definir posicionamento, personalidade (5 traits + isNot), valores e tagline.

## Execution Steps

### Step 1: Load — Carregar Discovery

Ler o artefato `{slug}-discovery.yaml` da fase anterior.
Ler `squads/brand-factory/data/archetypes.yaml` para o arquetipo escolhido.

### Step 2: Generate — Propor Estrategia

Com base no discovery + arquetipo, gerar proposta completa:

```
🎯 FASE 2: STRATEGY

Baseado no seu Discovery ({name}, {niche}, arquetipo {archetype_name}):

---

**📍 POSICIONAMENTO**
- **Categoria:** {categoria do mercado}
- **Diferenciador:** {o que torna unico — ESPECIFICO, nao generico}
- **Promessa:** {o que o cliente pode esperar — frase curta e poderosa}

---

**🎭 PERSONALIDADE**

**Arquetipo:** {archetype_name}

**5 Traits:**
1. **{Trait 1}** — {descricao especifica ao contexto da marca}
2. **{Trait 2}** — {descricao}
3. **{Trait 3}** — {descricao}
4. **{Trait 4}** — {descricao}
5. **{Trait 5}** — {descricao}

**A marca NAO e:**
- {isNot 1 — especifico ao negocio}
- {isNot 2}
- {isNot 3}
- {isNot 4}

---

**💎 VALORES**
1. **{Valor 1}** — {descricao em 1 frase}
2. **{Valor 2}** — {descricao}
3. **{Valor 3}** — {descricao}
4. **{Valor 4}** — {descricao}

---

**✍️ TAGLINE** (escolha uma ou sugira outra)
A) "{tagline opcao 1}"
B) "{tagline opcao 2}"
C) "{tagline opcao 3}"

---

Revise e me diga:
- Algo que quer ajustar nos traits ou valores?
- Qual tagline prefere (A, B, C, ou sugira)?
```

### Step 3: Elicit — Confirmar e Ajustar

Aguardar feedback do usuario. Ajustar conforme solicitado.

### Step 4: Save — Gerar Artefato

Salvar `{slug}-strategy.yaml`:

```yaml
# Brand Factory — Strategy Artifact
slug: "{slug}"
positioning:
  category: "{categoria}"
  differentiator: "{diferenciador}"
  promise: "{promessa}"
personality:
  archetype: "{BrandArchetype — nome em portugues}"
  traits:
    - { trait: "{trait1}", desc: "{desc1}" }
    - { trait: "{trait2}", desc: "{desc2}" }
    - { trait: "{trait3}", desc: "{desc3}" }
    - { trait: "{trait4}", desc: "{desc4}" }
    - { trait: "{trait5}", desc: "{desc5}" }
  isNot:
    - "{isNot1}"
    - "{isNot2}"
    - "{isNot3}"
    - "{isNot4}"
values:
  - { title: "{valor1}", description: "{desc1}" }
  - { title: "{valor2}", description: "{desc2}" }
  - { title: "{valor3}", description: "{desc3}" }
  - { title: "{valor4}", description: "{desc4}" }
tagline: "{tagline escolhida}"
purpose: "{purpose — missao da marca em 1-2 frases}"
phase_complete: true
```

### Step 5: Transition
"Strategy definida. Proxima fase: **Voice & Tone** — vamos criar a voz unica da sua marca."

## Quality Gate
- [ ] Posicionamento com diferenciador especifico (nao generico)
- [ ] Exatamente 5 traits com descricoes contextualizadas
- [ ] Pelo menos 3 isNot
- [ ] Exatamente 4 valores
- [ ] Tagline confirmada pelo usuario
- [ ] Purpose definido
- [ ] Artefato salvo
