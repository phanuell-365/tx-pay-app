import animate from 'tailwindcss-animate';
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px',
        },
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        // primary: {
        //   DEFAULT: 'hsl(var(--primary))',
        //   foreground: 'hsl(var(--primary-foreground))'
        // },
        // secondary: {
        //   DEFAULT: 'hsl(var(--secondary))',
        //   foreground: 'hsl(var(--secondary-foreground))'
        // },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        // accent: {
        //   DEFAULT: 'hsl(var(--accent))',
        //   foreground: 'hsl(var(--accent-foreground))'
        // },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'green-haze': {
          50: '#edfcf4',
          100: '#d4f7e3',
          200: '#aceecc',
          300: '#76dfae',
          400: '#3fc88d',
          500: '#199d69',
          600: '#0f8c5d',
          700: '#0c704e',
          800: '#0c593e',
          900: '#0b4935',
          950: '#05291e',
        },
      },
      fontFamily: {
        manrope: ['Manrope Regular', 'Ubuntu', 'sans-serif'],
        'manrope-light': ['Manrope Light', 'Ubuntu', 'san-serif', 'serif'],
        'manrope-medium': ['Manrope Medium', 'Ubuntu', 'san-serif', 'serif'],
        'manrope-bold': ['Manrope Bold', 'Ubuntu', 'san-serif', 'serif'],
        'manrope-extra-light': ['Manrope Extralight', 'Ubuntu', 'san-serif', 'serif'],
        'manrope-extra-bold': ['Manrope Extrabold', 'Ubuntu', 'san-serif', 'serif'],
        'manrope-semi-bold': ['Manrope Semibold', 'Ubuntu', 'san-serif', 'serif'],
      },
      fontSize: {
        xxs: '.65rem',
        xxxs: '.55rem',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'collapsible-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
        'slide-top': {
          '0%': {
            transform: 'translateY(100px)',
            opacity: '0',
          },
          to: {
            transform: 'translateY(0px)',
            opacity: '1',
          },
        },
        shutter: {
          '0%': {
            transform: 'translateY(100%)',
          },
          '50%': {
            transform: 'translateY(-10%)',
          },
          '100%': {
            transform: 'translateY(0%)',
          },
        },
        capture: {
          '0%': {
            transform: 'scale(0)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        'scale-up-center': {
          '0%': {
            transform: 'scale(.5)',
          },
          to: {
            transform: 'scale(1)',
          },
        },
        floating: {
          '0%': {
            transform: 'perspective(1000px) rotateY(-15deg) rotateX(5deg) translateY(0px)',
          },
          '50%': {
            transform: 'perspective(1000px) rotateY(-15deg) rotateX(5deg) translateY(-10px)',
          },
          '100%': {
            transform: 'perspective(1000px) rotateY(-15deg) rotateX(5deg) translateY(0px)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-in-out',
        'collapsible-up': 'collapsible-up 0.2s ease-in-out',
        'slide-top': 'slide-top ease-in-out both',
        shutter: 'shutter 0.5s ease-in-out',
        capture: 'capture 0.15s ease-in-out',
        'scale-up-center': 'scale-up-center 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        floating: 'floating 6s ease-in-out infinite',
      },
      transitionDuration: {
        0: '0ms',
        1500: '1500ms',
        2000: '2000ms',
        2500: '2500ms',
        3000: '3000ms',
        3500: '3500ms',
        4000: '4000ms',
      },
    },
  },
  plugins: [animate, typography, daisyui],
  daisyui: {
    themes: [
      'bumblebee',
      'emerald',
      'black',
      {
        'green-haze': {
          primary: '#199d69',
          secondary: '#0f8c5d',
          accent: '#0c704e',
          neutral: '#0c593e',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#f3f4f6',
          info: '#3fc88d',
          success: '#76dfae',
          warning: '#d4f7e3',
          error: '#edfcf4',
        },
        'green-haze-dark': {
          primary: '#199d69',
          secondary: '#0f8c5d',
          accent: '#0c704e',
          neutral: '#0c593e',
          'base-100': '#1a1a1a',
          'base-200': '#2a2a2a',
          'base-300': '#3a3a3a',
          info: '#3fc88d',
          success: '#76dfae',
          warning: '#d4f7e3',
          error: '#edfcf4',
        },
      },
    ],
    darkMode: 'class',
    darkTheme: 'green-haze-dark', // dark theme for daisyUI
    theme: 'green-haze',
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ':root', // The element that receives theme color CSS variables
  },
};
