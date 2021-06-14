<template>
  <img
    :alt="$options.name"
    :style="{
      width: width || size || null,
      height: height || size || null,
    }"
    src="@/assets/illustrations/IllusAgreement.svg"
  />
</template>

<script>
export default {
  name: 'IllusAgreement',
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
