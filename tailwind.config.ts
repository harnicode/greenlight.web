import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
    extend: {
      width: {
        '100%': '100%',
      },
      height: {
        '80px': '80px',
        '100vh-rem': '56.25rem',
      },
      maxWidth: {
        'custom': '40%' // Custom maximum width value
      },
      lineHeight: {
        'extra-loose': '2.5rem' // Custom line height value
      },
      spacing: {
        'custom': '3rem', 
        '1.5': '6px',  
        '0.5': '2px',
      },
      colors: {
        success_50: "#E7F6EC",
        success_75: "#B5E3C4",
        h6: "#C71E0D",
        post: "#1B884F",
        grayBackground: "#F9FAFB",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fadeInRightBig": {
          '0%': {
            opacity: '0',
            transform: 'translate3d(100%, 0, 0)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        },
        "fadeInUp": {
          '0%': {
            opacity: '0',
            transform: 'translate3d(0, 100%, 0)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        },
     
        "fadeInLeft": {
          '0%': {
            opacity: '0',
            transform: 'translate3d(-100%, 0, 0)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        },
        "fadeInRight": {
          '0%': {
            opacity: '0',
            transform: 'translate3d(100%, 0, 0)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        },
        "fadeInDown": {
          '0%': {
            opacity: '0',
            transform: 'translate3d(0, -100%, 0)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        },
        "fadeIn": {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fadeInRightBig": 'fadeInRightBig 1s ease-in-out',
        "fadeInUp": 'fadeInUp 1s ease-in-out',
        "fadeInLeft": 'fadeInLeft 1s ease-in-out',
        "fadeInRight": 'fadeInRight 1s ease-in-out',
        "fadeInDown": 'fadeInDown 1s ease-in-out',
        "fadeIn": 'fadeIn 1s ease-in-out',
      },
      transitionDuration: {
        '2000': '2000ms', // Add custom duration
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config