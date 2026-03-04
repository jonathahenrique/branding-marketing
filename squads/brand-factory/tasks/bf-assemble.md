# bf-assemble — Phase 7: Assembly & Registration

## Metadata
```yaml
id: bf-assemble
phase: 7
name: Assembly & Registration
elicit: false
agent: brand-strategist
inputs: ["{slug}-discovery.yaml", "{slug}-strategy.yaml", "{slug}-voice.yaml", "{slug}-visual.yaml", "{slug}-logo.yaml", "{slug}-mockups.yaml"]
outputs: ["app/src/data/brands/{slug}.ts", "app/src/data/brands/index.ts (modified)"]
output_dir: "app/src/data/brands/"
```

## Purpose
Compilar todos os artefatos das 6 fases em um arquivo TypeScript production-ready, registrar no index, e validar build.

## Execution Steps

### Step 1: Load — Coletar Todos os Artefatos

Ler TODOS os 6 artefatos YAML do diretorio `.aios/brand-factory/{slug}/`:
1. `{slug}-discovery.yaml`
2. `{slug}-strategy.yaml`
3. `{slug}-voice.yaml`
4. `{slug}-visual.yaml`
5. `{slug}-logo.yaml`
6. `{slug}-mockups.yaml`

Verificar que todos existem e tem `phase_complete: true`.

### Step 2: Reference — Ler Pattern Existente

Ler `app/src/data/brands/spotify.ts` como referencia de estrutura.
Ler `app/src/types/brand.ts` para verificar interface.

### Step 3: Assemble — Gerar Arquivo TypeScript

Usar o template `squads/brand-factory/templates/brand-config-template.ts.tmpl` como base.

Gerar `app/src/data/brands/{slug}.ts` seguindo EXATAMENTE o pattern do spotify.ts:

```typescript
import type { BrandConfig } from '@/types/brand'

export const {camelCaseSlug}: BrandConfig = {
  slug: '{slug}',
  name: '{name}',
  tagline: '{tagline}',
  purpose: '{purpose}',
  niche: '{niche}',
  description: '{description}',

  audience: {
    primary: '{primary}',
    pain: '{pain}',
    desire: '{desire}',
  },

  positioning: { ... },
  personality: { ... },
  values: [ ... ],
  voice: { ... },
  shape: { ... },
  theme: { ... },
  colors: { ... },
  typography: { ... },
  spacing: { ... },
  motion: { ... },
  textures: { ... },
  logo: { ... },
  photography: { ... },
  iconography: { ... },
  mockups: { ... },

  createdAt: '{YYYY-MM-DD}',
  updatedAt: '{YYYY-MM-DD}',
  completeness: {score},
}
```

**CRITICO:**
- Import path: `@/types/brand`
- Export como `const` nomeada (camelCase do slug)
- Todos os tipos devem corresponder EXATAMENTE ao `BrandConfig` interface
- Datas no formato ISO date string (YYYY-MM-DD)
- Completeness score calculado (ver Step 6)

### Step 4: Register — Adicionar ao Index

Ler `app/src/data/brands/index.ts` e adicionar:
1. Nova linha de import: `import { {camelCaseSlug} } from './{slug}'`
2. Nova entry no record: `'{slug}': {camelCaseSlug},` (ou `{camelCaseSlug},` se slug == camelCase)

### Step 5: Validate TypeScript

Executar:
```bash
cd app && npx tsc --noEmit
```

Se houver erros:
1. Ler os erros
2. Corrigir o arquivo gerado
3. Re-executar `tsc --noEmit`
4. Max 3 tentativas

### Step 6: Build — Confirmar SSG

Executar:
```bash
cd app && npm run build
```

Verificar:
- Build completa sem erros
- Numero de paginas SSG aumentou (9 novas paginas para a marca)
- Rota `/brands/{slug}` esta no output

### Step 7: Calculate Completeness

Score de 0-100 baseado em:
- Tem todas as secoes obrigatorias? (+60)
- Logo tem files? (+10) — se nao, -10
- Todos os mockups preenchidos? (+10)
- Voice tem exemplos contextuais? (+10)
- Typography usa fontes verificadas? (+10)

### Step 8: Report — Resultado Final

```
✅ ASSEMBLY COMPLETA

**Arquivo gerado:** app/src/data/brands/{slug}.ts
**Registrado em:** app/src/data/brands/index.ts
**TypeScript:** ✅ Compila sem erros
**Build:** ✅ {N} paginas SSG geradas
**Completeness:** {score}%

**Paginas geradas:**
- /brands/{slug}
- /brands/{slug}/colors
- /brands/{slug}/typography
- /brands/{slug}/spacing
- /brands/{slug}/motion
- /brands/{slug}/voice
- /brands/{slug}/logo
- /brands/{slug}/social
- /brands/{slug}/overview

**Proximo passo:**
- Adicione logos SVG em `public/logos/` e atualize o campo `logo.variants[].file`
- Acesse http://localhost:3004/brands/{slug} para visualizar
- Execute `*validate-brand {slug}` para validacao completa
```

## Quality Gate
- [ ] Arquivo .ts gerado em app/src/data/brands/
- [ ] Import type correto (@/types/brand)
- [ ] Export const nomeada (camelCase)
- [ ] Registrado no index.ts (import + entry)
- [ ] tsc --noEmit passa sem erros
- [ ] npm run build passa
- [ ] Paginas SSG geradas para a nova marca
- [ ] Completeness score calculado
