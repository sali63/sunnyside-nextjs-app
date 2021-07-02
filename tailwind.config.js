const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-soft-red': 'hsl(7, 99%, 70%)',
        'primary-yellow': 'hsl(51, 100%, 49%)',
        'primary-dark-desaturated-cyan': 'hsl(167, 40%, 24%)',
        'primary-dark-blue': 'hsl(198, 62%, 26%)',
        'primary-dark-moderate-cyan': 'hsl(168, 34%, 41%)',
        'primary-cyan': 'hsl(169, 40%, 65%)',
        'dark-desaturated-blue': 'hsl(212, 27%, 19%)',
        'very-dark-grayish-blue': 'hsl(213, 9%, 39%)',
        'dark-grayish-blue': 'hsl(232, 10%, 55%)',
        'grayish-blue': ' hsl(210, 4%, 67%)',
        'primary-white': 'hsl(0, 0%, 100%)',
      },

      fontFamily: {
        para: 'Barlow , sans-serif',
        heading: 'Fraunces, serif',
      },

      fontWeight: {
        700: 700,
        900: 900,
      },

      backgroundImage: (theme) => ({
        // mobile
        'mobile-hero': "url('/images/mobile/image-header.jpg')",
        'mobile-graphic-design':
          "url('/images/mobile/image-graphic-design.jpg')",
        'mobile-photography': "url('/images/mobile/image-photography.jpg')",

        // desktop
        'desktop-hero': "url('/images/desktop/image-header.jpg')",
        // 'desktop-graphic-design':
        //   "url('/images/desktop/image-graphic-design.jpg')",
        'desktop-graphic-design': "url('https://placekitten.com/408/287')",
        'desktop-photography': "url('/images/mobile/image-photography.jpg')",
      }),

      backgroundPosition: {
        'center-bottom-75': 'center 75%',
      },

      minHeight: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
      },

      zIndex: {
        '-1': '-1',
      },

      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',

        'desktop-1024': '330px',
        xs: '470px',
        sm: '560px',
        md: '620px',
      },
      minWidth: {
        'desktop-1024': '330px',
        xs: '470px',
        sm: '560px',
        md: '620px',
      },

      width: {
        'calc-50': 'calc(100% - 50px)',
        'calc-100': 'calc(100% - 100px)',
        'calc-150': 'calc(100% - 150px)',
        'calc-200': 'calc(100% - 200px)',
        'calc-3rem': 'calc(100% - 3rem)',
      },
    },
    screens: {
      'mobile-sm': '320px',
      'mobile-md': '375px',
      'mobile-lg': '425px',
      xs: '540px',
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.menu-pointer-styles': {
          backgroundColor: 'transparent',
          width: '0',
          height: '0',
          right: '0',
          top: '-4px',
          borderWidth: '20px',
          borderColor: 'transparent',
          borderTopColor: 'white',
          transform: 'rotate(-45deg) translate(25px, 3.5px)',
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};
