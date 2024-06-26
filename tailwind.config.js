/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '800px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1380px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    
    extend: {

      fontFamily: {
        heading: ["Great Vibes"],
      },

      animation: {
        'infinite-scroll': 'infinite-scroll 10s linear infinite',
        'fadeIn': 'fadeIn 2s ease-out forwards infinite',
      },
      keyframes: {
        'fadeIn': {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '1' },
        },
        'pulse' : {
          '50%': { opacity: '0.3' }
      },

        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      
    },
  },
  plugins: [],
}
};
