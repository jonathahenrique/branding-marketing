/** @type {import('tailwindcss').Config} */

/*
 * NBR 5419:2026 — Tailwind CSS Preset
 * Brand: Como Aplicar a NBR 5419:2026
 * Gerado em: 2026-03-07
 *
 * Uso: No tailwind.config.js da landing page:
 *
 *   import nbr5419Preset from './nbr5419-tailwind-preset'
 *   export default {
 *     presets: [nbr5419Preset],
 *     // ... resto da config
 *   }
 */

export default {
  theme: {
    extend: {
      colors: {
        nbr: {
          // Dark Theme (Primary)
          bg: {
            deep: '#030912',
            surface: '#0A1628',
            elevated: '#112240',
          },
          amber: {
            DEFAULT: '#F0C142',
            hover: '#DDA832',
            deep: '#C8910E',
            muted: 'rgba(240, 193, 66, 0.12)',
          },
          navy: {
            DEFAULT: '#0A1628',
            hover: '#112240',
            deep: '#060D1A',
            muted: 'rgba(10, 22, 40, 0.12)',
          },
          text: {
            DEFAULT: '#F5F5F5',
            secondary: '#8B9BB5',
            tertiary: '#5A6A82',
          },
          border: {
            DEFAULT: 'rgba(10, 22, 40, 0.22)',
            subtle: 'rgba(10, 22, 40, 0.10)',
          },
          // Light Sections
          light: {
            bg: '#F8F9FC',
            surface: '#EEF1F6',
            amber: '#C8910E',
            navy: '#0A1628',
            text: '#0A1628',
            'text-secondary': '#1A2D4A',
            border: 'rgba(10, 22, 40, 0.12)',
          },
        },
      },

      fontFamily: {
        display: ['Outfit', 'system-ui', 'sans-serif'],
        body: ['Source Sans 3', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },

      fontSize: {
        'nbr-hero': ['72px', { lineHeight: '0.95', letterSpacing: '-0.03em', fontWeight: '800' }],
        'nbr-h1': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'nbr-h2': ['36px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'nbr-h3': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        'nbr-h4': ['18px', { lineHeight: '1.4', fontWeight: '600' }],
        'nbr-body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'nbr-small': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'nbr-micro': ['11px', { lineHeight: '1.4', letterSpacing: '0.08em', fontWeight: '500' }],
        'nbr-code': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        // Mobile variants
        'nbr-hero-m': ['40px', { lineHeight: '0.95', letterSpacing: '-0.03em', fontWeight: '800' }],
        'nbr-h1-m': ['32px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'nbr-h2-m': ['26px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'nbr-h3-m': ['20px', { lineHeight: '1.3', fontWeight: '600' }],
        'nbr-h4-m': ['16px', { lineHeight: '1.4', fontWeight: '600' }],
      },

      spacing: {
        'nbr-2xs': '4px',
        'nbr-xs': '8px',
        'nbr-sm': '12px',
        'nbr-md': '16px',
        'nbr-lg': '24px',
        'nbr-xl': '32px',
        'nbr-2xl': '48px',
        'nbr-3xl': '64px',
        'nbr-4xl': '96px',
        'nbr-5xl': '128px',
      },

      borderRadius: {
        'nbr-sm': '6px',
        'nbr-md': '10px',
        'nbr-lg': '16px',
      },

      boxShadow: {
        'nbr-elevated': '0 4px 24px rgba(10, 22, 40, 0.18)',
        'nbr-modal': '0 16px 64px rgba(3, 9, 18, 0.8)',
      },

      transitionDuration: {
        'nbr-instant': '80ms',
        'nbr-fast': '150ms',
        'nbr-normal': '250ms',
        'nbr-slow': '400ms',
      },

      transitionTimingFunction: {
        'nbr-default': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'nbr-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
    },
  },
}
