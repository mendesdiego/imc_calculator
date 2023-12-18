/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
    colors: {
      'blue': '#345FF6',
      'gunMetal': '#253347',
      'darkElectricBlue': '#5E6E85',
      'extraGrey': '#E7F5FE',
      'borders': '#D8E2E7',
      'blueBorder': '#345FF6', 
      'white': '#fff',
      'pink': '#F21E84',
      'orange': '#F69134',
      'green': '#22C1C1',
      'gradientColor1': '#D6E6FE',
      'gradientColor2': 'rgba(214, 252, 254, 0.00)',
      'pinkOpacity': 'rgba(242, 30, 132, 0.15)',
      'orangeOpacity': 'rgba(246, 145, 52, 0.15)',
      'greenOpacity': 'rgba(34, 193, 193, 0.15)',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      fontSize: {
        'titleSection': '2rem',
      },
      lineHeight: {
        'title': '3rem',
        'titleSection': '2.2rem',
      },
      padding: {
        'extra': '4.5rem',
      },
      backgroundImage: {
        'customGradient': 'linear-gradient(290deg, #D6E6FE 0%, rgba(214, 252, 254, 0.00) 100%)',
      },
      borderRadius: {
      'customBorderRadius': '0rem 0rem 2.1875rem 2.1875rem',
      'radio': '50%', 
      '4xl': '2rem',
      'bigSizes': '1rem 62.4375rem 62.4375rem 1rem'
      },
      boxShadow: {
        'customShadow': '16px 32px 56px 0px rgba(143, 174, 207, 0.25)',
      },
      width: {
        'box-45': '45%',
        'beforeGrey': '23.4375rem',
        'mainTitle': '54%',
        'titleFullScreen': '61%',
        '77': '77%',
        'beforeFullScreen': '30.4375rem',
        '91': '91%'
      },
      height: {
        'beforeGrey': '16.12369rem',
        'beforeHeightFull': '22.12369rem'
      },
      margin: {
        '17': '4.5rem',
      },
      opacity: {
        '0.15': '0.15',
      },
      letterSpacing: {
        'titleTips': '-0.075rem'
      },
      spacing: {
        'custom': '1rem',
        '4.5': '1.125rem',
        'negativeTop': '-70px'
      },
      maxWidth: {
        '50': '50%'
      }
    }
  },
  plugins: [],
}

