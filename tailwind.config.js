module.exports = {
  content: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'home-s': "url('./images/home_bg_small.jpg')",
        'home-m': "url('./images/home_bg_middle5.jpg')",
        'home-l': "url('./images/home_bg_large.jpg')",

        // 'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
