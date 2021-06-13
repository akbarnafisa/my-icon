const globby = require('globby')
const fse = require('fs-extra')
const fs = require('fs')
const baseConfig = require('./config.js')
const config = baseConfig.illustration
const chalk = require('chalk')

const generateVue = ({ asset, filename }) => `
<template>
  <img
    :alt="$options.name"
    :style="{
      width: width || size || null,
      height: height || size || null,
    }"
    src="@/${asset}"
  />
</template>

<script>
export default {
  name: '${filename}',
  props: {
    size: {
      type: [String, Number],
      default: '',
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

globby([...config.input, ...config.exclude]).then(icon => {
  try {
    const illustrationsFiles = []

    icon.forEach(v => {
      let filename = v.match(/([^\/]+)(?=\.\w+$)/)[0]
      const assetVueFile = generateVue({ filename, asset: v })
      const outputPath = v.match('assets/illustrations(.*).(svg|png)')[1]
      const size = fs.statSync(v).size

      fse
        .outputFile(`${config.output}${outputPath}.vue`, assetVueFile)
        .then(() => {
          if (size > config.maxSize) {
            console.log(
              `    ${chalk.yellow('⚠️')}  ${filename}, Exceed ${
                config.maxSize
              } bytes (${size})`
            )
          } else {
            console.log(`    ${chalk.green('√')} ${filename}`)
          }
        })
        .catch(error => {
          console.log(`    ${chalk.red('X')} ${filename}`)
          console.log(error)
        })

      illustrationsFiles.push({
        name: filename,
        path: `illustrations${outputPath}`,
        size,
      })
    })

    const illustrationsInfo = {
      total: illustrationsFiles.length,
      files: illustrationsFiles.sort((a, b) => {
        if (a.name === b.name) {
          return 0
        }
        return a.name < b.name ? -1 : 1
      }),
    }

    const indexIconPath = `${baseConfig.rootDir}/components/illustrations.js`
    try {
      fse.unlinkSync(indexIconPath)
    } catch (e) {}

    fse.outputFileSync(indexIconPath, '')
    illustrationsInfo.files.forEach(v => {
      fse.writeFileSync(
        indexIconPath,
        fse.readFileSync(indexIconPath).toString('utf-8') +
          `export { default as ${v.name} } from './${v.path}'\n`,
        'utf-8'
      )
    })

    // generate illustrations.json
    fse.outputFile(
      `${baseConfig.rootDir}/components/illustrations.json`,
      JSON.stringify(illustrationsInfo, null, 2)
    )
  } catch (error) {
    console.log(`    ${chalk.red('X')} Failed`)
    console.log(error)
  }
})
