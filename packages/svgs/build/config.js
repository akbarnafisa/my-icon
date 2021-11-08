const path = require('path')
const rootDir = path.resolve(__dirname, '../')
module.exports = {
  rootDir,
  icon: {
    input: ['assets/icons/**/*.svg'],
    exclude: [],
    output: path.resolve(rootDir, 'components/icons'),
    optimize: true,
    maxSize: 1000,
  }
}
