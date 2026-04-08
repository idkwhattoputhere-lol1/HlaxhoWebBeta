/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
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
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
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
        amber: {
          liquid: '#FFB300',
          glow: '#FF8F00',
          deep: '#FF6D00',
          warm: '#FF9D00',
        },
        copper: {
          DEFAULT: '#BF6F4A',
          light: '#D48A6A',
          dark: '#8B5A3C',
        },
        bronze: {
          DEFAULT: '#CD7F32',
          light: '#E0954A',
        },
        carbon: {
          deep: '#0A0A0A',
          graphite: '#151515',
          light: '#1A1A1A',
        },
      },
      fontFamily: {
        syncopate: ['Syncopate', 'sans-serif'],
        exo: ['Exo 2', 'sans-serif'],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        amber: "0 0 20px rgba(255, 140, 0, 0.4)",
        "amber-lg": "0 0 40px rgba(255, 140, 0, 0.3)",
        copper: "0 0 20px rgba(191, 111, 74, 0.3)",
        warm: "0 10px 30px rgba(255, 140, 0, 0.2)",
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
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "pulse-amber": {
          "0%, 100%": { 
            boxShadow: "0 0 20px rgba(255, 140, 0, 0.4)" 
          },
          "50%": { 
            boxShadow: "0 0 40px rgba(255, 140, 0, 0.6)" 
          },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "counter-tick": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "pulse-amber": "pulse-amber 2s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "amber-gradient": "linear-gradient(135deg, #FFB300 0%, #FF8F00 50%, #FF6D00 100%)",
        "copper-gradient": "linear-gradient(135deg, #BF6F4A 0%, #CD7F32 100%)",
        "metal-gradient": "linear-gradient(180deg, #2A2A2A 0%, #0A0A0A 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
