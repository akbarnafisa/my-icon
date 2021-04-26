const path = require('path')
const rootDir = path.resolve(__dirname, '../')
module.exports = {
  rootDir,
  icon: {
    input: 'assets/icons/**/*.svg',
    output: path.resolve(rootDir, 'components/icons'),
    optimize: true,
  },
  illustration: {
    input: 'assets/illustrations/**/*.svg',
    output: path.resolve(rootDir, 'components/illustrations'),
    optimize: true,
  },
}
