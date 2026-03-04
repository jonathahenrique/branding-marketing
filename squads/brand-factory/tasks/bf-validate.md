# bf-validate — Brand Validation

## Metadata
```yaml
id: bf-validate
name: Validate Brand
elicit: false
agent: brand-strategist
inputs: ["app/src/data/brands/{slug}.ts"]
outputs: ["validation-report"]
```

## Purpose
Validar um BrandConfig existente contra quality gates. Pode ser executado independente do pipeline.

## Execution Steps

### Step 1: Load — Ler Brand Config

Ler `app/src/data/brands/{slug}.ts`.
Ler `app/src/types/brand.ts` para verificar schema.

### Step 2: Validate — Executar Checks

Executar a seguinte checklist (pontuacao 0-100):

#### Identidade (15 pontos)
- [ ] `slug` e kebab-case valido (3pts)
- [ ] `name` nao vazio (2pts)
- [ ] `tagline` nao vazio e < 100 chars (2pts)
- [ ] `purpose` nao vazio e > 20 chars (2pts)
- [ ] `niche` e um dos 14 NicheCategory validos (3pts)
- [ ] `description` nao vazio e > 50 chars (3pts)

#### Audiencia (5 pontos)
- [ ] `audience.primary` definido (2pts)
- [ ] `audience.pain` definido (1.5pts)
- [ ] `audience.desire` definido (1.5pts)

#### Estrategia (10 pontos)
- [ ] `positioning.category` definido (2pts)
- [ ] `positioning.differentiator` > 20 chars e especifico (3pts)
- [ ] `positioning.promise` definido (2pts)
- [ ] `personality.archetype` e um BrandArchetype valido (3pts)

#### Personalidade (10 pontos)
- [ ] `personality.traits` tem exatamente 5 items (3pts)
- [ ] Cada trait tem `trait` e `desc` (2pts)
- [ ] `personality.isNot` tem >= 3 items (2pts)
- [ ] `values` tem >= 3 items (3pts)

#### Voice (10 pontos)
- [ ] `voice.archetype` definido (2pts)
- [ ] `voice.tone` definido (2pts)
- [ ] `voice.rules` tem >= 5 rules (3pts)
- [ ] Pelo menos 3 rules tem `bad` example (2pts)
- [ ] `voice.references` tem >= 3 items (1pt)

#### Design System - Cores (15 pontos)
- [ ] `theme` tem 16 propriedades (5pts)
- [ ] Todos os valores de theme sao hex validos ou rgba (3pts)
- [ ] `colors.dark` tem >= 10 ColorTokens (3pts)
- [ ] `colors.light` tem >= 6 ColorTokens (2pts)
- [ ] `colors.primaryUsage` e `secondaryUsage` tem do/dont (2pts)

#### Design System - Tipografia (10 pontos)
- [ ] `typography.stack` tem 3 FontStacks (display/body/mono) (4pts)
- [ ] `typography.scale` tem 9 TypeLevels (3pts)
- [ ] Fontes sao gratuitas (Google Fonts/Fontshare) (2pts)
- [ ] `typography.rules` tem >= 3 regras (1pt)

#### Design System - Outros (10 pontos)
- [ ] `spacing.base` definido e > 0 (2pts)
- [ ] `spacing.scale` tem 10 items (2pts)
- [ ] `motion.profile` e um MotionProfile valido (2pts)
- [ ] `motion.tokens` tem >= 6 items (2pts)
- [ ] `motion.microAnimations` tem >= 5 items (2pts)

#### Logo (5 pontos)
- [ ] `logo.concept` definido (1pt)
- [ ] `logo.variants` tem >= 3 items (2pts)
- [ ] `logo.rules` tem >= 5 items (1pt)
- [ ] `logo.misuse` tem >= 4 items (1pt)

#### Mockups (5 pontos)
- [ ] `mockups.instagramPosts` tem >= 4 items (1.5pts)
- [ ] `mockups.youtubeThumbnails` tem >= 2 items (1pt)
- [ ] `mockups.newsletter` completa (1pt)
- [ ] `mockups.landingHero` completa (1.5pts)

#### Meta (5 pontos)
- [ ] `createdAt` e data valida (2pts)
- [ ] `completeness` e number 0-100 (1pt)
- [ ] TypeScript compila sem erros (2pts)

### Step 3: Report — Apresentar Resultado

```
📊 BRAND VALIDATION REPORT — {name}

**Score: {total}/100** {emoji baseado no score}

{>= 90: "🏆 Excelente — qualidade de agencia"}
{80-89: "✅ Bom — pronto para producao"}
{70-79: "⚠️ Adequado — recomendo melhorias"}
{< 70: "❌ Insuficiente — precisa de revisao"}

**Detalhes por categoria:**
| Categoria | Score | Max | Status |
|-----------|-------|-----|--------|
| Identidade | {x}/15 | 15 | {✅/⚠️/❌} |
| Audiencia | {x}/5 | 5 | ... |
| Estrategia | {x}/10 | 10 | ... |
| Personalidade | {x}/10 | 10 | ... |
| Voice | {x}/10 | 10 | ... |
| Cores | {x}/15 | 15 | ... |
| Tipografia | {x}/10 | 10 | ... |
| Outros | {x}/10 | 10 | ... |
| Logo | {x}/5 | 5 | ... |
| Mockups | {x}/5 | 5 | ... |
| Meta | {x}/5 | 5 | ... |

**Issues encontradas:**
{lista de problemas encontrados, se houver}

**Recomendacoes:**
{lista de melhorias sugeridas}
```

## Quality Gate
- [ ] Todas as 11 categorias avaliadas
- [ ] Score calculado corretamente
- [ ] Issues listadas com clareza
- [ ] Recomendacoes acionaveis
