# Fase 1 — Foundation + Brand Viewer MVP

> **Status:** DONE
> **Data:** 2026-03-03 → 2026-03-05
> **Objetivo:** Dado um BrandConfig JSON, renderizar brandbook interativo profissional

---

## Stories — Ordem de Execucao

### Wave 1: Setup + Schema (Parallelizable)

- [x] **1.1** Inicializar projeto Next.js 16 + Tailwind CSS 4 + TypeScript
- [x] **1.2** Definir BrandConfig schema expandido (todos os tipos)
- [x] **1.3** Criar banco de pares tipograficos curados (10 pares)
- [x] **1.4** Criar marca-teste "NR-10 Master" (nicho eletrica) como BrandConfig

### Wave 2: Infrastructure (Depende Wave 1)

- [x] **2.1** Multi-brand routing `/brands/[slug]/...`
- [x] **2.2** BrandProvider com React Context + dynamic theme injection
- [x] **2.3** Layout do brandbook (sidebar + content area + navigation)

### Wave 3: Brand Viewer Pages (Depende Wave 2)

- [x] **3.1** Color Explorer — paleta interativa, copy token, contrast checker
- [x] **3.2** Typography Playground — type scale editavel, preview ao vivo
- [x] **3.3** Logo Guidelines — variantes, area de protecao, do's/don'ts
- [x] **3.4** Token Browser — tabela completa de tokens, filtro, copy
- [x] **3.5** Brand Overview (home) — resumo visual da marca

### Wave 4: Polish + Export (Depende Wave 3)

- [x] **4.1** Brand Context JSON export (para agentes IA)
- [x] **4.2** Brand Portfolio dashboard (lista de marcas)
- [x] **4.3** Light/Dark mode toggle por marca
- [x] **4.4** Animacoes e micro-interacoes com Motion

---

## Marca-Teste: NR-10 Master

Para validar o sistema, criaremos uma brand completa para um curso ficticio de instalacoes eletricas:

- **Nome:** NR-10 Master
- **Nicho:** Educacao tecnica — seguranca em instalacoes eletricas
- **Tagline:** "Seguranca eletrica com maestria"
- **Arquetipo:** O Especialista Confiavel
- **Paleta:** Azul profundo (confianca) + Laranja industrial (energia/alerta)
- **Tipografia:** Space Grotesk (display) + Inter Variable (body)
- **Motion:** Precise (ease-out seco, 200ms base)
- **Voz:** Tecnico mas acessivel, direto, confiante

Essa marca sera usada lado a lado com a RUPTA (ja existente) para provar que o sistema funciona para nichos completamente diferentes.
