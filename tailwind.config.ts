import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        fg: 'var(--color-fg)',
        accent: 'var(--color-accent)',
        border: 'var(--color-border)',
        surface: 'var(--color-surface)',
        'surface-glass': 'var(--color-surface-glass)',
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        danger: 'var(--color-danger)',
        'text-muted': 'var(--color-text-muted)',
        chart1: 'var(--color-chart1)',
        chart2: 'var(--color-chart2)',
        chart3: 'var(--color-chart3)',
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '16px',
        xl: '20px',
      },
      boxShadow: {
        card: '0 8px 24px hsla(220, 13%, 5%, 0.4)',
        'card-hover': '0 12px 32px hsla(220, 13%, 5%, 0.5)',
        glow: '0 0 24px var(--color-glow)',
      },
    },
  },
  plugins: [],
};

export default config;
