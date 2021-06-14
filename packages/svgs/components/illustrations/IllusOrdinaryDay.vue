<template>
  <img
    :alt="$options.name"
    :style="{
      width: width || size || null,
      height: height || size || null,
    }"
    src="@/assets/illustrations/IllusOrdinaryDay.svg"
  />
</template>

<script>
export default {
  name: 'IllusOrdinaryDay',
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
