# Pull Request

## Description

<!-- Brief description of what this PR does -->

## Type of Change

- [ ] New feature
- [ ] Bug fix
- [ ] Refactoring
- [ ] Documentation update
- [ ] Design system update

## Engineering Rules Checklist

### Code Quality

- [ ] No business logic in UI components
- [ ] All colors using GBAE design tokens (no raw hex)
- [ ] All spacing following 8px grid system
- [ ] Types defined (no `any` without justification)
- [ ] File sizes < 200 lines (or split with justification)
- [ ] Functions < 40 lines (or split with justification)
- [ ] No unused imports or unreachable code
- [ ] Meaningful names (no abbreviations)

### UX States

- [ ] Loading states implemented
- [ ] Error states implemented
- [ ] Empty states implemented (if applicable)
- [ ] Mobile-responsive design verified

### Component Architecture

- [ ] Atoms are purely presentational
- [ ] No API calls in UI components
- [ ] Props are explicitly typed
- [ ] Repeated code extracted (3+ times rule)
- [ ] Server Components by default, `"use client"` only when needed

### Testing

- [ ] Tested on mobile viewport
- [ ] Tested loading states
- [ ] Tested error states
- [ ] Verified against GBAE design system

## Screenshots (if applicable)

<!-- Add screenshots for UI changes -->

## Breaking Changes

<!-- List any breaking changes -->

## Additional Notes

<!-- Any additional context or notes for reviewers -->
