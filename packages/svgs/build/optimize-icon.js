const config = require('./config.js')
const globby = require('globby')
const fse = require('fs-extra')
const { optimize } = require('svgo')
const chalk = require('chalk')

console.log(chalk.black.bgGreen.bold('Optimize Assets'))

globby([
  ...config.icon.input,
  ...config.icon.exclude,
  '!assets/**/*.png',
  '!assets/**/*.jpeg',
  '!assets/**/*.jpg',
]).then(icon => {
  icon.forEach(path => {
    const filename = path.match(/([^\/]+)(?=\.\w+$)/)[0]
    console.log(`    ${chalk.green('√')} ${filename}`)

    const result = optimize(fse.readFileSync(path).toString(), {
      path,
    })
    fse.writeFileSync(path, result.data, 'utf-8')
  })
})
