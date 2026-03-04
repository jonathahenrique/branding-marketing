# bf-voice — Phase 3: Voice & Tone

## Metadata
```yaml
id: bf-voice
phase: 3
name: Voice & Tone
elicit: true
agent: brand-strategist
inputs: ["{slug}-discovery.yaml", "{slug}-strategy.yaml"]
outputs: ["{slug}-voice.yaml"]
output_dir: ".aios/brand-factory/{slug}/"
```

## Purpose
Definir o voice archetype, tom, traits vocais, regras de voz com exemplos REAIS no contexto da marca, e referencias.

## Execution Steps

### Step 1: Load — Carregar Contexto

1. Ler `{slug}-discovery.yaml` e `{slug}-strategy.yaml`
2. Ler `squads/brand-factory/data/voice-archetype-map.yaml` para o arquetipo escolhido
3. Extrair: voice style, tone, traits, isNot, rules, references

### Step 2: Generate — Adaptar Voz ao Contexto

Pegar o template do voice-archetype-map e ADAPTAR ao contexto especifico da marca.

**CRITICO:** Os exemplos nas regras devem ser REAIS e CONTEXTUALIZADOS:
- Se a marca e uma academia → exemplos sobre treinos, aulas, horarios
- Se e um SaaS → exemplos sobre features, onboarding, pricing
- Se e um restaurante → exemplos sobre menu, reservas, experiencia

```
🎯 FASE 3: VOICE & TONE

Baseado no seu arquetipo ({archetype_name}) e posicionamento:

---

**🎤 VOICE ARCHETYPE:** {archetype_name do voice map}
**Tom:** {tone}

---

**📢 TRAITS VOCAIS**
1. **{Trait 1}** — {descricao adaptada ao contexto da marca}
2. **{Trait 2}** — {descricao}
3. **{Trait 3}** — {descricao}
4. **{Trait 4}** — {descricao}

**A voz NAO e:**
- {isNot 1}
- {isNot 2}
- {isNot 3}

---

**📝 REGRAS DE VOZ** (com exemplos no contexto de {name})

1. **{Regra 1}**
   ✅ "{exemplo BOM contextualizado}"
   ❌ "{exemplo RUIM contextualizado}"

2. **{Regra 2}**
   ✅ "{exemplo BOM}"
   ❌ "{exemplo RUIM}"

3. **{Regra 3}**
   ✅ "{exemplo BOM}"

4. **{Regra 4}**
   ✅ "{exemplo BOM}"
   ❌ "{exemplo RUIM}"

5. **{Regra 5}**
   ✅ "{exemplo BOM}"

---

**🔗 REFERENCIAS DE VOZ**
- {Referencia 1} ({por que e referencia})
- {Referencia 2} ({por que})
- {Referencia 3} ({por que})

---

Revise a voz proposta:
- Quer ajustar o tom?
- Algum exemplo que nao combina?
- Quer adicionar/remover uma regra?
```

### Step 3: Elicit — Confirmar

Aguardar feedback. Ajustar conforme necessario.

### Step 4: Save — Gerar Artefato

Salvar `{slug}-voice.yaml`:

```yaml
# Brand Factory — Voice Artifact
slug: "{slug}"
voice:
  archetype: "{voice archetype name}"
  tone: "{tone}"
  personality:
    is:
      - { trait: "{trait1}", desc: "{desc1}" }
      - { trait: "{trait2}", desc: "{desc2}" }
      - { trait: "{trait3}", desc: "{desc3}" }
      - { trait: "{trait4}", desc: "{desc4}" }
    isNot:
      - "{isNot1}"
      - "{isNot2}"
      - "{isNot3}"
  rules:
    - { rule: "{regra1}", example: "{exemplo bom}", bad: "{exemplo ruim}" }
    - { rule: "{regra2}", example: "{exemplo bom}", bad: "{exemplo ruim}" }
    - { rule: "{regra3}", example: "{exemplo bom}" }
    - { rule: "{regra4}", example: "{exemplo bom}", bad: "{exemplo ruim}" }
    - { rule: "{regra5}", example: "{exemplo bom}" }
  references:
    - "{ref1}"
    - "{ref2}"
    - "{ref3}"
phase_complete: true
```

### Step 5: Transition
"Voice definida. Proxima fase: **Visual System** — vamos criar o design system completo."

## Quality Gate
- [ ] Voice archetype definido
- [ ] Tom definido (formato: adjetivo-adjetivo)
- [ ] Exatamente 4 traits vocais com descricoes contextuais
- [ ] Pelo menos 3 isNot
- [ ] Exatamente 5 regras com exemplos REAIS no contexto da marca
- [ ] Pelo menos 3 exemplos com "bad" (contra-exemplo)
- [ ] Exatamente 3 referencias com justificativa
- [ ] Artefato salvo
