<template lang="md">
  <div class="markdown" v-html="hello" />
</template>

<script>
import hello from '@myicon/svgs/CHANGELOG.md'

export default {
  computed: {
    hello() {
      return hello
    },
  },
}
</script>
