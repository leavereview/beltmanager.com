// Tailwind 3 through PostCSS. Replaces @astrojs/tailwind, whose peer range stops at Astro 5
// (Astro 7 upgrade, beltmanager.com#13). global.css already holds the @tailwind directives.
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
