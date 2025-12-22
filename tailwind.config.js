/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{ 
           bg: "#1f1f38",
        "bg-variant": "#2c2c6c",
            primary: "#4db5ff",
        
      }
    },
  },
  plugins: [],
}

