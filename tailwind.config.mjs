/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        /*
         * BeltManager design tokens, mirrored from the app
         * (leavereview/beltmanager → src/app/globals.css, "Direction D").
         * Keep the hexes in step with the app; WCAG AA notes are measured, not assumed.
         */
        // Neutrals
        ink: '#14161F',        // primary text, dark blocks — 18.04:1 with white
        muted: '#5B6170',      // secondary text — 6.20:1 on white, 5.79:1 on canvas
        navy: '#14161F',       // = ink; some pages use bg-navy/text-navy, which had no colour
        canvas: '#F6F7FB',     // page background
        surface: '#FFFFFF',    // cards, inputs
        line: '#E6E8EF',       // borders/dividers

        brand: {
          // Identity orange. White on it is only 3.53:1, so it is for icons,
          // decoration, large text, and text on ink (5.11:1). Never a button fill.
          DEFAULT: '#F0530E',
          600: '#C0420B',      // CTA fill with a white label — 5.22:1; accent text on white
          700: '#A83A0A',      // CTA hover, accent text on tints — 6.41:1 with white
          50: '#FFF1EA',       // site-only tint for badges/active nav; brand-600 on it is 4.73:1

          // Legacy names, now pointing at the app's values. They keep page markup
          // untouched while the homepage PR (#25) is open; rename in a follow-up.
          navy: '#14161F',     // = ink
          red: '#C0420B',      // = brand-600
          'red-dark': '#A83A0A', // = brand-700
          'red-light': '#FFF1EA', // = brand-50
        },

        // Status — never the sole indicator; pair with a text label.
        success: '#15803D',
        warning: '#B45309',
        danger: '#B91C1C',
        tatami: { DEFAULT: '#1E6B4F', deep: '#155540' }, // the app's "present" green

        // Text colours (existing names, app values)
        text: {
          primary: '#14161F',    // = ink
          secondary: '#5B6170',  // = muted
          tertiary: 'rgb(107, 114, 128)', // gray-500 — 4.83:1 on white; keep off tinted grounds
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        // The app's display face (Archivo 700/900, self-hosted from public/fonts) — H1/H2 only.
        display: ['Archivo', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        // The app's belt-progression motif (white → black). Decoration only, never a state or rank.
        belt: 'linear-gradient(90deg, #E9E4D6 0 12.5%, #F5C518 12.5% 25%, #F0790E 25% 37.5%, #2E9E4F 37.5% 50%, #2563EB 50% 62.5%, #7C3AED 62.5% 75%, #8B5A2B 75% 87.5%, #14161F 87.5% 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
