module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'xl' : {'max': '1200px'},
      'lg' : {'max': '900px'},
      'md' : {'max': '730px'},
      'sm' : {'max': '600px'},
      'xs' : {'max': '400px'},
    },
    extend: {
      fontFamily: {
        geologica:['Geologica', 'sans-serif']
      },
      colors: {
        yellow: '#FFF500',
        grey: '#3b3b3b'
      }
    }

    
  },
  plugins: [],
}