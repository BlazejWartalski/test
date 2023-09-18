module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  theme: {
    extend: {
      screens: {
        '4k': '2560px',
      },
      padding: {
        '8': '2rem',
      },
      fontSize: {
        'base': '10px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
