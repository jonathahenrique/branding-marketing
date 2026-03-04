# Brand Completeness — Checklist Final

Este checklist e usado pelo `*validate-brand` para calcular o score de completeness.

## Scoring (100 pontos total)

### Tier 1 — Essencial (60 pontos)

#### Identidade (15pts)
- [ ] (3pts) `slug` e kebab-case valido
- [ ] (2pts) `name` nao vazio
- [ ] (2pts) `tagline` nao vazio e < 100 chars
- [ ] (2pts) `purpose` > 20 chars
- [ ] (3pts) `niche` e NicheCategory valido
- [ ] (3pts) `description` > 50 chars

#### Audiencia (5pts)
- [ ] (2pts) `audience.primary` definido
- [ ] (1.5pts) `audience.pain` definido
- [ ] (1.5pts) `audience.desire` definido

#### Estrategia (10pts)
- [ ] (2pts) `positioning.category` definido
- [ ] (3pts) `positioning.differentiator` > 20 chars
- [ ] (2pts) `positioning.promise` definido
- [ ] (3pts) `personality.archetype` e BrandArchetype valido

#### Personalidade (10pts)
- [ ] (3pts) `personality.traits` tem 5 items
- [ ] (2pts) Cada trait tem `trait` e `desc`
- [ ] (2pts) `personality.isNot` tem >= 3 items
- [ ] (3pts) `values` tem >= 3 items com title e description

#### Cores (15pts)
- [ ] (5pts) `theme` tem 16 propriedades
- [ ] (3pts) Todos hex/rgba validos
- [ ] (3pts) `colors.dark` >= 10 items
- [ ] (2pts) `colors.light` >= 6 items
- [ ] (2pts) `primaryUsage` e `secondaryUsage` presentes

#### Meta (5pts)
- [ ] (2pts) `createdAt` definido
- [ ] (1pt) `completeness` e number
- [ ] (2pts) TypeScript compila

### Tier 2 — Qualidade (30 pontos)

#### Voice (10pts)
- [ ] (2pts) `voice.archetype` definido
- [ ] (2pts) `voice.tone` definido
- [ ] (3pts) `voice.rules` >= 5 items
- [ ] (2pts) Pelo menos 3 rules com `bad`
- [ ] (1pt) `voice.references` >= 3 items

#### Tipografia (10pts)
- [ ] (4pts) 3 FontStacks (display/body/mono)
- [ ] (3pts) 9 TypeLevels
- [ ] (2pts) Fontes gratuitas verificadas
- [ ] (1pt) >= 3 regras

#### Design System Outros (10pts)
- [ ] (2pts) `spacing.base` > 0
- [ ] (2pts) `spacing.scale` tem 10 items
- [ ] (2pts) `motion.profile` valido
- [ ] (2pts) `motion.tokens` >= 6 items
- [ ] (2pts) `motion.microAnimations` >= 5 items

### Tier 3 — Polish (10 pontos)

#### Logo (5pts)
- [ ] (1pt) `logo.concept` definido
- [ ] (2pts) `logo.variants` >= 3 items
- [ ] (1pt) `logo.rules` >= 5 items
- [ ] (1pt) `logo.misuse` >= 4 items

#### Mockups (5pts)
- [ ] (1.5pts) 4+ Instagram posts
- [ ] (1pt) 2+ YouTube thumbnails
- [ ] (1pt) Newsletter completa
- [ ] (1.5pts) Landing hero completa

## Score Ranges

| Score | Label | Significado |
|-------|-------|-------------|
| 95-100 | Masterpiece | Qualidade de agencia top-tier |
| 85-94 | Excellent | Pronto para producao, agency-level |
| 75-84 | Good | Funcional, pode melhorar em detalhes |
| 60-74 | Adequate | Faltam elementos importantes |
| < 60 | Incomplete | Precisa completar fases |

## Bonus Points (nao contam no 100, mas registrados)

- Logo com `file` paths definidos: +5 bonus
- Todos os mockups com copy contextualizado: +3 bonus
- Photography e iconography definidos: +2 bonus
