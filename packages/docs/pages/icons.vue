<template>
  <div>
    <div>Icons</div>
    <div>
      <component :is="icon.name" v-for="icon in icons" :key="icon.name" />
    </div>
  </div>
</template>

<script>
import AssetsIcons from '@myicon/svgs/components/icons.json'

export default {
  computed: {
    icons() {
      return AssetsIcons.icons
    },
  },
}
</script>
