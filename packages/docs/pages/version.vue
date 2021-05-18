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

<style lang="less">
.markdown {
  h1 {
    font-size: 36px;
    margin: 36px 0;
    font-weight: 700;
  }

  h2 {
    font-size: 24px;
    padding-top: 48px;
    font-weight: 500;
  }

  h3 {
    font-size: 20px;
  }

  a {
    color: #8b5cf6;
    cursor: pointer;
    text-decoration: none;
    outline: none;

    &::hover {
      opacity: 0.8;
    }
  }
}
</style>
