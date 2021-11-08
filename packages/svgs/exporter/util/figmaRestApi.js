const axios = require('axios')
console.log('process.env', process.env.DEV_ACCESS_TOKEN)
const figmaRestApi = axios.create({
  baseURL: process.env.FIGMA_BASE_URL,
  headers: {
    'X-Figma-Token': process.env.DEV_ACCESS_TOKEN,
  },
})

module.exports = figmaRestApi
