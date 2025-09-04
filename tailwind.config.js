// const { text } = require('framer-motion/client');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
   darkMode: 'class',
  theme: {
    extend: {
       opacity: ['peer-checked'],
      backgroundColor: ['peer-checked'],
      borderColor: ['peer-checked'],

      backgroundImage: {
        'linear-gradient': 'linear-gradient(180deg, #F7DECF 0%, #F4CFAF 100%)',     
      },

       keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-vertical': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee var(--duration) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
      },
    

      colors: {
        buttonbg: 'var(--color-buttonbg)',
        primary: 'var(--color-primary)',
        background: 'var(--color-background)',
        secondary: 'var(--color-secondary)',
        'secondary-alt': 'var(--color-secondary-alt)',
        authback: 'var(--color-authback)',
        progressbarbackground: 'var(--color-progressbarbackground)',
        textnormal: 'var(--color-textnormal)',
        textheading: 'var(--color-textheading)',
        textplaceholder: 'var(--color-textplaceholder)',
        lightgray: 'var(--color-lightgray)',
        textcheckbox: 'var(--color-textcheckbox)',
        buttontext: 'var(--color-buttontext)',
        bordercolor: 'var(--color-bordercolor)',
        buttonhover: 'var(--color-buttonhover)',
        important: 'var(--color-important)',
        verifiedbg: 'var(--color-verifiedbg)',
        subtext: 'var(--color-subtext)',
        boxbg: 'var(--color-boxbg)',
        cardHeading: 'var(--color-cardHeading)',
        iconcolor: 'var(--color-iconcolor)',
        footerbg: 'var(--color-footerbg)',
        cardbg: 'var(--color-cardbg)',
        iconbg: 'var(--color-iconbg)',
        textwhite: 'var(--color-white)',
        subheading: 'var(--color-subheading)',
        shadow: 'var(--color-shadow)',
        textblack: 'var(--color-black)',
        input: 'var(--color-input)',
        subcardbg: 'var(--color-subcardbg)',
        coral: 'var(--color-coral)',
        yellowborder: 'var(--color-yellowborder)',
        blackbg: 'var(--color-blackbg)',
        iconborder: 'var(--color-iconborder)',
        accentBg: 'var(--color-accentBg)',
        bordersemicolor: 'var(--color-bordersemicolor)',
        corallighter: 'var(--color-corallighter)',








        // Semantic and status colors
        black: {
          50: '#e6e6e6',
          100: '#b0b0b0',
          200: '#8a8a8a',
          300: '#545454',
          400: '#333333',
          500: '#000000',
          600: '#090909', 
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },
        orange: {
          50: '#fdf8f3',
          100: '#fae9da',
          200: '#f7dec8',
          300: '#f4cfaf',
          400: '#f1c69f',
          500: '#eeb887',
          600: '#d9a77b',
          700: '#a98360',
          800: '#83654a',
          900: '#644d39',
        },
        green: {
          50: '#ebf6ee',
          100: '#c0e4ca',
          200: '#a2d7b0',
          300: '#77c58c',
          400: '#5db975',
          500: '#34a853',
          600: '#2f994c',
          700: '#25773b',
          800: '#1d5c2e',
          900: '#164723',
        },
        red: {
          50: '#fdecea',
          100: '#fac3bd',
          200: '#f7a69d',
          300: '#f47e71',
          400: '#f16555',
          500: '#ee3e2b',
          600: '#d93827',
          700: '#a92c1f',
          800: '#832218',
          900: '#641a12',
        },
        'status-pending-in-review': {
          50: '#fef6e8',
          100: '#fde2b6',
          200: '#fcd493',
          300: '#fbc062',
          400: '#fab443',
          500: '#f9a114',
          600: '#e39312',
          700: '#b1720e',
          800: '#89590b',
          900: '#694408',
        },
      },
       screens: {
      sm: '320px',    // Mobile
      md: '768px',    // Tablet
      lg: '1024px',   // Desktop
      xl: '1440px',   // Desktop HD
    },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        glancyr: ['Glancyr','sans-serif' ],
      },
    },
  },
  plugins: [],
}
