import Vue from 'vue'
import AssetsIcons from '@myicon/svgs/components/icons.json'

const allAssets = [...AssetsIcons.files]

allAssets.forEach(asset => {
  Vue.component(asset.name, () => import(`@myicon/svgs/dist/cjs/${asset.name}`))
})
