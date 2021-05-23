<template>
  <img
    :alt="$options.name"
    :width="width || size || null"
    :height="height || size || null"
    src="@/assets/illustrations/IllusInvoice.svg"
  />
</template>

<script>
export default {
  name: 'IllusInvoice',
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
