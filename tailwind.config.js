module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      height : {
        'mainHeight': "450px",
        'mainBigHeight': "600px",
        'mainUserPageHeight': "1000px",
        'mainPhotosHeight': "1600px",
      },

      screens: {
        'md': '865px'
      }
    },
    colors: {
      'brightBlue': '#283845',
      'darkBlue': '#202C39',
      'sage': '#B8B08D',
      'peachYellow': '#F2D492',
      'atomicTangerine': '#F29559',
      'white': '#ffffff',
      'beaver': '#8C7A6B '
    },
    backgroundImage: {
      'headerImg': "url('https://i.pinimg.com/564x/87/b2/e3/87b2e3ab9f35fbb70cb4027dbf46bebe.jpg')"
    },

    
  },
  plugins: [],
}