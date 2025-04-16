import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme('colors'));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars,
  });
}

function flattenColorPalette(colors: any): Record<string, string> {
  const flatColors: Record<string, string> = {};

  function flatten(colorObj: any, prefix = '') {
    for (const key in colorObj) {
      const value = colorObj[key];
      if (typeof value === 'string') {
        flatColors[prefix + key] = value;
      } else {
        flatten(value, `${prefix}${key}-`);
      }
    }
  }

  flatten(colors);
  return flatColors;
}

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        aurora: {
          from: {
            backgroundPosition: '0% 0%, 0% 0%',
          },
          to: {
            backgroundPosition: '100% 0%, 100% 0%',
          },
        },
        'blob-move-1': {
          '0%': {
            transform: 'translate(0%, 0%) scale(1)',
            opacity: '0.2',
          },
          '33%': {
            opacity: '0.3',
          },
          '66%': {
            opacity: '0.1',
          },
          '100%': {
            transform: 'translate(20%, 20%) scale(1.1)',
            opacity: '0.2',
          },
        },
        'blob-move-2': {
          '0%': {
            transform: 'translate(0%, 0%) scale(1)',
            opacity: '0.2',
          },
          '33%': {
            opacity: '0.1',
          },
          '66%': {
            opacity: '0.3',
          },
          '100%': {
            transform: 'translate(-15%, -10%) scale(1.15)',
            opacity: '0.2',
          },
        },
        'blob-move-3': {
          '0%': {
            transform: 'translate(0%, 0%) scale(1)',
            opacity: '0.2',
          },
          '50%': {
            opacity: '0.3',
          },
          '100%': {
            transform: 'translate(-10%, 15%) scale(0.9)',
            opacity: '0.2',
          },
        },
        'blob-move-4': {
          '0%': {
            transform: 'translate(0%, 0%) scale(1)',
            opacity: '0.2',
          },
          '50%': {
            opacity: '0.1',
          },
          '100%': {
            transform: 'translate(15%, -15%) scale(1.05)',
            opacity: '0.2',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'aurora': 'aurora 100s linear infinite',
        'blob-move-1': 'blob-move-1 25s infinite alternate ease-in-out',
        'blob-move-2': 'blob-move-2 30s infinite alternate ease-in-out',
        'blob-move-3': 'blob-move-3 40s infinite alternate ease-in-out',
        'blob-move-4': 'blob-move-4 35s infinite alternate ease-in-out',
      },
    },
  },
  plugins: [addVariablesForColors],
};

export default config;
