const globby = require('globby')
const fse = require('fs-extra')
const config = require('./config.js').icon
const chalk = require('chalk')

const generateVue = ({ svg, filename }) => `
<template>
  ${svg}
</template>

<script>
export default {
  name: '${filename}',
  props: {
    size: {
      type: [String, Number],
      default: 24,
    },
    width: {
      type: [String, Number],
      default: '',
    },
    height: {
      type: [String, Number],
      default: '',
    },
    color: {
      type: String,
      default: '#A4A4A4',
    },
  },
}
</script>
`

console.log(chalk.black.bgGreen.bold('Generate Icon'))

globby([config.input]).then(icon => {
  try {
    icon.forEach(v => {
      let filename = v.match(/([^\/]+)(?=\.\w+$)/)[0]
      const svgString = fse.readFileSync(v).toString()
      const svgReplaceWidth = svgString.replace(
        /(width)=\".*?\"/,
        ':width="width || size"'
      )
      const svgReplaceHeight = svgReplaceWidth.replace(
        /(height)=\".*?\"/,
        ':height="height || size"'
      )
      const svgReplaceFill = svgReplaceHeight.replace(
        /(fill)=\".*?\"/,
        ':fill="color"'
      )

      const svgVueFile = generateVue({ filename, svg: svgReplaceFill })
      fse
        .outputFile(`${config.output}/${filename}.vue`, svgVueFile)
        .then(() => {
          console.log(`    ${chalk.green('√')} ${filename}`)
        })
        .catch(error => {
          console.log(`    ${chalk.red('X')} ${filename}`)
          console.log(error)
        })
    })
  } catch (error) {
    console.log(`    ${chalk.red('X')} failed`)
    console.log(error)
  }
})
