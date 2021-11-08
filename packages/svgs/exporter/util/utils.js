const fs = require('fs')

const writeToFile = async (filename, data) => {
  return fs.writeFile(filename, data, error => {
    if (error) throw error
    console.log(`The file ${filename} has been saved!`)
  })
}

const camelCaseToDash = string => {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}
const findAllByValue = (obj, valueToFind) => {
  return obj
    .map(v => v.children)
    .flat()
    .filter(v => v.type === valueToFind)
}

const createFolder = async path => {
  try {
    await fs.promises.access(path, fs.constants.F_OK)
  } catch (err) {
    await fs.promises.mkdir(path)
  }
}

exports.writeToFile = writeToFile
exports.camelCaseToDash = camelCaseToDash
exports.findAllByValue = findAllByValue
exports.createFolder = createFolder
