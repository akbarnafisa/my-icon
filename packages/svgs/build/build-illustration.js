const globby = require('globby')
const fse = require('fs-extra')
const config = require('./config.js').illustration
const chalk = require('chalk')

const generateVue = ({ asset, filename }) => `
<template>
  <img
    :alt="$options.name"
    :width="width || size || null"
    :height="height || size || null"
    src="@/${asset}"
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
    const illustrationsFiles = []

    icon.forEach(v => {
      let filename = v.match(/([^\/]+)(?=\.\w+$)/)[0]
      const assetVueFile = generateVue({ filename, asset: v })
      const outputPath = v.match('assets/illustrations(.*).(svg|png)')[1]

      fse
        .outputFile(`${config.output}${outputPath}.vue`, assetVueFile)
        .then(() => {
          console.log(`    ${chalk.green('√')} ${filename}`)
        })
        .catch(error => {
          console.log(`    ${chalk.red('X')} ${filename}`)
          console.log(error)
        })
      illustrationsFiles.push({
        name: filename,
      })
    })

    const illustrationsInfo = {
      illustrationsCount: illustrationsFiles.length,
      illustrations: illustrationsFiles.sort((a, b) => {
        if (a.name === b.name) {
          return 0
        }
        return a.name < b.name ? -1 : 1
      }),
    }

    // generate illustrations.json
    fse.outputFile(
      `${config.output}/illustrations.json`,
      JSON.stringify(illustrationsInfo, null, 2)
    )
  } catch (error) {
    console.log(`    ${chalk.red('X')} Failed`)
    console.log(error)
  }
})
