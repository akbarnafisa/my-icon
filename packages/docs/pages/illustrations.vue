<template>
  <div>
    <div>illustrations</div>
    <div>
      <component
        :is="illustration.name"
        v-for="illustration in illustrations"
        :key="illustration.name"
      />
    </div>
  </div>
</template>

<script>
import AssetsIllustrations from '@myicon/svgs/components/illustrations.json'

export default {
  computed: {
    illustrations() {
      return AssetsIllustrations.illustrations
    },
  },
}
</script>
