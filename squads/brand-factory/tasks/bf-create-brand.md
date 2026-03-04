# bf-create-brand — Orchestrator (Full Pipeline)

## Metadata
```yaml
id: bf-create-brand
name: Create Brand (Full Pipeline)
elicit: true
agent: brand-strategist
inputs: [user-answers]
outputs: ["app/src/data/brands/{slug}.ts"]
orchestrates:
  - bf-discover
  - bf-strategy
  - bf-voice
  - bf-visual
  - bf-logo
  - bf-mockups
  - bf-assemble
```

## Purpose
Orquestrar o pipeline completo de criacao de marca, executando as 7 fases em sequencia.

## Execution Steps

### Step 1: Initialize

```
🎯 CREATE BRAND — Pipeline Completo

Vamos criar uma marca completa em 7 fases:

1️⃣ Discovery — Conhecer seu negocio e nicho
2️⃣ Strategy — Posicionamento e personalidade
3️⃣ Voice & Tone — Como a marca fala
4️⃣ Visual System — Cores, tipografia, motion
5️⃣ Logo Direction — Conceito e regras do logo
6️⃣ Marketing Mockups — Conteudo de exemplo
7️⃣ Assembly — Gerar arquivo final + registrar

Cada fase gera um artefato YAML. No final, tudo vira um arquivo TypeScript
production-ready que o Brand Engine renderiza automaticamente.

Vamos comecar?
```

### Step 2: Create Artifacts Directory

```bash
mkdir -p .aios/brand-factory/
```

(O slug sera definido apos Phase 1)

### Step 3: Execute Phase 1 — Discovery

Executar `bf-discover.md` completo.
Apos conclusao, extrair o `slug` do artefato gerado.

```bash
mkdir -p .aios/brand-factory/{slug}/
```

### Step 4: Execute Phase 2 — Strategy

Executar `bf-strategy.md` completo.

### Step 5: Execute Phase 3 — Voice & Tone

Executar `bf-voice.md` completo.

### Step 6: Execute Phase 4 — Visual System

Executar `bf-visual.md` completo.
(Esta e a fase mais longa — tem 5 sub-fases)

### Step 7: Execute Phase 5 — Logo Direction

Executar `bf-logo.md` completo.

### Step 8: Execute Phase 6 — Marketing Mockups

Executar `bf-mockups.md` completo.
(Esta fase e automatica — sem perguntas)

### Step 9: Execute Phase 7 — Assembly

Executar `bf-assemble.md` completo.
(Gera .ts, registra, valida TypeScript e build)

### Step 10: Final Report

```
🏆 MARCA CRIADA COM SUCESSO!

**{name}** esta pronta para uso no Brand Engine.

📁 **Arquivos:**
- Config: app/src/data/brands/{slug}.ts
- Artefatos: .aios/brand-factory/{slug}/

📊 **Metricas:**
- Completeness: {score}%
- TypeScript: ✅
- Build: ✅ ({N} paginas SSG)

🌐 **Acesse:** http://localhost:3004/brands/{slug}

📋 **Pendencias:**
- [ ] Adicionar logos SVG em public/logos/
- [ ] Revisar mockups e ajustar copy
- [ ] Executar *validate-brand {slug} para score completo

— Vega, cada marca conta uma historia unica 🎯
```

## Interruption Handling

Se o usuario interromper o pipeline no meio:
1. Os artefatos YAML ja salvos persistem
2. O usuario pode retomar com fases individuais (`*strategy`, `*voice`, etc.)
3. Ou reiniciar com `*create-brand` (vai pedir para reusar artefatos existentes)

```
Detectei artefatos existentes para "{slug}":
✅ Discovery
✅ Strategy
❌ Voice (nao encontrado)

Quer continuar de onde parou? (sim — comeca em Voice / nao — recomecar do zero)
```

## Quality Gate
- [ ] Todas as 7 fases executadas
- [ ] Todos os 6 artefatos YAML salvos em .aios/brand-factory/{slug}/
- [ ] Arquivo .ts gerado e registrado
- [ ] TypeScript compila
- [ ] Build passa
- [ ] Report final apresentado
