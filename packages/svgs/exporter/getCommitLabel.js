const findWorkspaceRoot = require('find-yarn-workspace-root');
require('dotenv').config({ path: `${findWorkspaceRoot()}/.env` })

const figmaRestApi = require('./util/figmaRestApi')

const fetchVersion = async id => {
  return await figmaRestApi.get(
    'images/' + process.env.FIGMA_PROJECT_ID + '/versions'
  )
}

const getVersion = async () => {
  try {
    const response = await fetchVersion()
    const versions = response.versions
    if (versions && versions.length > 0) {
      return versions.filter(v => v.label)[0].description
    }
  } catch (error) {
    return 'Add icon'
  }
}

getVersion()
