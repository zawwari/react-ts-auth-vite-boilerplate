/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

     container: {
      center: true,
      padding: {
        DEFAULT: "1.875rem",
      },
      screens: {
          xl: "1337px",
        },
    },
    extend: {

  screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1337px",
      },

       colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        success: "var(--color-success)",
        accent: "var(--color-accent)",
        warning: "var(--color-warning)",
        primary_hover: "var(--color-primary-hover)",
      },
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
      },  
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      
    },
  },
},
  plugins: [],
}

