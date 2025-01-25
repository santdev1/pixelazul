/** @type {import('tailwindcss').Config} */
const colors = require("./src/assets/styles/colors")
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			blue: {
				dark: colors.blue.dark,
				light: colors.blue.light,
				900: colors.blue.search_bg,
				800: colors.blue.most_dark
			},
			gray: {
              light: colors.gray.light,
			  dark: colors.gray.dark
			}
			
  		},
  		backgroundImage: {
  			'grid-pattern': '',
  			'grid-pattern-light': ''
  		},
		fontFamily: {
			ow: ['Oswald'],
            ro: ['Roboto']
		},
		spacing: {
			'1/10': '10%',
			'2/10': '20%',
			'3/10': '30%',
			'4/10': '40%',
			'6/10': '60%',
			'8/10': '80%',
			'9/10': '90%',
			'10/10': '100%'
		  },
      
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

