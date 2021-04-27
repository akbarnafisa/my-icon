const globby = require('globby')
const fse = require('fs-extra')
const baseConfig = require('./config.js')
const config = baseConfig.icon
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
    const iconsFiles = []

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

      // generate .vue file
      const svgVueFile = generateVue({ filename, svg: svgReplaceFill })
      const outputPath = v.match('assets/icons(.*).svg')[1]

      fse
        .outputFile(`${config.output}${outputPath}.vue`, svgVueFile)
        .then(() => {
          console.log(`    ${chalk.green('√')} ${filename}`)
        })
        .catch(error => {
          console.log(`    ${chalk.red('X')} ${filename}`)
          console.log(error)
        })

      iconsFiles.push({
        name: filename,
        path: `icons${outputPath}`,
      })
    })

    const iconsInfo = {
      iconsCount: iconsFiles.length,
      icons: iconsFiles.sort((a, b) => {
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
    iconsInfo.icons.forEach(v => {
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
