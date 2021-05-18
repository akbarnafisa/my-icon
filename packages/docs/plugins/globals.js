import Vue from 'vue'
import AssetsIcons from '@myicon/svgs/components/icons.json'
import AssetsIllustrations from '@myicon/svgs/components/illustrations.json'

const allAssets = [...AssetsIcons.icons, ...AssetsIllustrations.illustrations]

allAssets.forEach(asset => {
  Vue.component(asset.name, () => import(`@myicon/svgs/dist/cjs/${asset.name}`))
})
