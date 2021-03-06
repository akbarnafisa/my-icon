const fse = require('fs-extra')

const replaceAttrs = path => {
  const svgString = fse.readFileSync(path).toString()
  return svgString
    .replace('<svg', '<svg v-on="$listeners" viewBox="0 0 24 24"')
    .replace(/(width)=\".*?\"/, ':width="size"')
    .replace(/(height)=\".*?\"/, ':height="size"')
    .replace(/(fill)=\".*?\"/g, ':fill="color"')
}

module.exports = {
  replaceAttrs,
}
