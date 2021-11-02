const globby = require('globby')
const fse = require('fs-extra')
const fs = require('fs')
const baseConfig = require('./config.js')
const config = baseConfig.icon
const chalk = require('chalk')
const { replaceAttrs } = require('./utils.js')

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

globby([...config.input, ...config.exclude]).then(icon => {
  try {
    const iconsFiles = []

    icon.forEach(v => {
      let filename = v.match(/([^\/]+)(?=\.\w+$)/)[0]
      const svgReplaceFill = replaceAttrs(v)

      // generate .vue file
      const svgVueFile = generateVue({ filename, svg: svgReplaceFill })
      const outputPath = v.match('assets/icons(.*).svg')[1]
      const size = fs.statSync(v).size

      fse
        .outputFile(`${config.output}${outputPath}.vue`, svgVueFile)
        .then(() => {
          if (size > config.maxSize) {
            console.log(
              `    ${chalk.yellow('⚠️')}  ${filename}, Exceed ${
                config.maxSize
              } bytes ${size}`
            )
          } else {
            console.log(`    ${chalk.green('√')} ${filename}`)
          }
        })
        .catch(error => {
          console.log(`    ${chalk.red('X')} ${filename}`)
          console.log(error)
        })

      iconsFiles.push({
        name: filename,
        path: `icons${outputPath}`,
        size,
      })
    })

    const iconsInfo = {
      total: iconsFiles.length,
      files: iconsFiles.sort((a, b) => {
        if (a.name === b.name) {
          return 0
        }
        return a.name < b.name ? -1 : 1
      }),
    }

    const indexIconPath = `${baseConfig.rootDir}/components/icons.js`
    try {
      fse.unlinkSync(indexIconPath)
    } catch (e) {}
    fse.outputFileSync(indexIconPath, '')
    iconsInfo.files.forEach(v => {
      fse.writeFileSync(
        indexIconPath,
        fse.readFileSync(indexIconPath).toString('utf-8') +
          `export { default as ${v.name} } from './${v.path}'\n`,
        'utf-8'
      )
    })

    // generate icons.json
    fse.outputFile(
      `${baseConfig.rootDir}/components/icons.json`,
      JSON.stringify(iconsInfo, null, 2)
    )
  } catch (error) {
    console.log(`    ${chalk.red('X')} Failed`)
    console.log(error)
  }
})
