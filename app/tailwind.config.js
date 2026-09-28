/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0a192f",
        "on-primary": "#ffffff",
        "primary-container": "#0d1c32",
        "on-primary-container": "#76849f",
        "secondary": "#725b38",
        "on-secondary": "#ffffff",
        "secondary-container": "#fedeb2",
        "on-secondary-container": "#78603e",
        "secondary-fixed": "#fedeb2",
        "on-secondary-fixed": "#281800",
        "surface": "#f8f9ff",
        "on-surface": "#0d1c2f",
        "on-surface-variant": "#44474d",
        "surface-container": "#e6eeff",
        "surface-container-low": "#eff4ff",
        "surface-container-lowest": "#ffffff",
        "surface-container-high": "#dde9ff",
        "surface-variant": "#d5e3fd",
        "inverse-surface": "#233144",
        "outline": "#75777e",
        "outline-variant": "#c5c6cd"
      }
    },
  },
  plugins: [],
}