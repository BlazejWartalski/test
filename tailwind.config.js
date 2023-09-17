module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  theme: {
    extend: {
      padding: {
        '8': '2rem',
      }
    },
    fontSize: {
      'base' : '10px',
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
