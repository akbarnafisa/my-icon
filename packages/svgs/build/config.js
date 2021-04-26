const path = require('path')
module.exports = {
  icon: {
    input: 'assets/icons/**/*.svg',
    output: path.resolve(__dirname, '../components/icons'),
    optimize: true,
  },
  illustration: {
    input: 'assets/illustrations/**/*.svg',
    output: path.resolve(__dirname, '../components/illustrations'),
    optimize: true,
  },
}
