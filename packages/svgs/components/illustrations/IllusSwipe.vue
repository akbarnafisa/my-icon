<template>
  <img
    :alt="$options.name"
    :style="{
      width: width || size || null,
      height: height || size || null,
    }"
    src="@/assets/illustrations/IllusSwipe.svg"
  />
</template>

<script>
export default {
  name: 'IllusSwipe',
  props: {
    size: {
      type: [String, Number],
      default: '',
    },
    width: {
      type: [String, Number],
      default: '',
    },
    height: {
      type: [String, Number],
      default: '',
    },
  },
}
</script>
