# bf-discover — Phase 1: Discovery

## Metadata
```yaml
id: bf-discover
phase: 1
name: Discovery
elicit: true
agent: brand-strategist
inputs: [user-answers]
outputs: ["{slug}-discovery.yaml"]
output_dir: ".aios/brand-factory/{slug}/"
```

## Purpose
Coletar informacoes do negocio, pesquisar o nicho, e sugerir arquetipos com justificativa.

## Execution Steps

### Step 1: Elicit — Coletar Informacoes do Negocio
**elicit: true** — Perguntar ao usuario:

```
🎯 FASE 1: DISCOVERY

Vou fazer algumas perguntas para entender seu negocio. Responda com o maximo de detalhes possivel.

1. **Nome da marca:** (como deve aparecer no brandbook)
2. **Nicho/Segmento:** (educacao, saude, tech, fitness, gastronomia, moda, servicos, financas, imobiliario, pet, beleza, criativo, varejo, ou descreva)
3. **Descricao do negocio:** (o que faz, como funciona, em 2-3 frases)
4. **Publico-alvo:** (quem sao seus clientes ideais — idade, perfil, comportamento)
5. **Dor principal:** (qual problema voce resolve para seus clientes)
6. **Desejo:** (o que seus clientes querem alcançar)
7. **Concorrentes:** (2-3 marcas que voce ve como concorrentes ou referencias)
8. **Referencias visuais:** (marcas ou sites que voce admira visualmente — pode ser de qualquer segmento)
```

### Step 2: Process — Carregar Data Files

1. Ler `squads/brand-factory/data/niche-defaults.yaml` para o nicho informado
2. Ler `squads/brand-factory/data/archetypes.yaml` para todos os arquetipos
3. Identificar 2-3 arquetipos que melhor se encaixam baseado em:
   - Nicho (typical_archetypes do niche-defaults)
   - Descricao do negocio e posicionamento
   - Concorrentes e referencias visuais mencionadas

### Step 3: Present — Sugerir Arquetipos

Apresentar 2-3 arquetipos com justificativa:

```
📊 ANALISE DE DISCOVERY

**Nicho detectado:** {nicho} — {label do niche-defaults}
**Convencoes do segmento:**
- {convencao 1 do niche-defaults}
- {convencao 2}
- {convencao 3}

**Arquetipos sugeridos:**

**A) {Nome do Arquetipo 1}** ⭐ Recomendado
> "{tagline do arquetipo}"
> - Core desire: {core_desire}
> - Brand voice: {brand_voice}
> - Tendencia visual: {visual_tendency.mood}
> - **Por que combina:** {justificativa especifica ligando o negocio ao arquetipo}

**B) {Nome do Arquetipo 2}**
> "{tagline}"
> - Core desire: {core_desire}
> - Brand voice: {brand_voice}
> - Tendencia visual: {visual_tendency.mood}
> - **Por que combina:** {justificativa}

**C) {Nome do Arquetipo 3}**
> "{tagline}"
> ...

Qual arquetipo mais se identifica com sua marca? (A, B, C, ou descreva outro)
```

### Step 4: Confirm — Confirmar Escolha

Aguardar escolha do usuario. Se quiser outro, pesquisar no archetypes.yaml.

### Step 5: Save — Gerar Artefato

Salvar `{slug}-discovery.yaml` no output_dir:

```yaml
# Brand Factory — Discovery Artifact
slug: "{slug}"
name: "{nome}"
niche: "{nicho}"
description: "{descricao}"
audience:
  primary: "{publico}"
  pain: "{dor}"
  desire: "{desejo}"
competitors: ["{conc1}", "{conc2}", "{conc3}"]
visual_references: ["{ref1}", "{ref2}"]
archetype_chosen: "{id do arquetipo}"
archetype_name: "{nome do arquetipo}"
niche_defaults_loaded: true
phase_complete: true
```

### Step 6: Transition
Informar o usuario: "Discovery completa. Proxima fase: **Strategy** — vamos definir posicionamento, personalidade e valores."

## Quality Gate
- [ ] Slug gerado (kebab-case, sem acentos)
- [ ] Nicho valido (um dos 14 do NicheCategory)
- [ ] Arquetipo selecionado e confirmado
- [ ] Artefato salvo com todos os campos
