const globby = require('globby')
const fse = require('fs-extra')
const config = require('./config.js').illustration
const chalk = require('chalk')

const generateVue = ({ svg, filename }) => `
<template>
  <img
    :alt="$options.name"
    :width="width || size || null"
    :height="height || size || null"
    src="@/${svg}"
  />
</template>

<script>
export default {
  name: '${filename}',
  props: {
    size: {
      type: [String, Number],
      default: 128,
    },
    width: {
      type: [String, Number],
      default: '',
    },
    height: {
      type: [String, Number],
      default: '',
    },
  },
}
</script>
`
console.log(chalk.black.bgGreen.bold('Generate Illustration'))

globby([config.input]).then(icon => {
  try {
    icon.forEach(v => {
      let filename = v.match(/([^\/]+)(?=\.\w+$)/)[0]
      const svgVueFile = generateVue({ filename, svg: v })
      const outputPath = v.match('assets/illustrations(.*).svg')[1]

      fse
        .outputFile(`${config.output}${outputPath}.vue`, svgVueFile)
        .then(() => {
          console.log(`    ${chalk.green('√')} ${filename}`)
        })
        .catch((error) => {
          console.log(`    ${chalk.red('X')} ${filename}`)
          console.log(error)
        })
    })
  } catch (error) {
    console.log(`    ${chalk.red('X')} Failed`)
    console.log(error)
  }
})
