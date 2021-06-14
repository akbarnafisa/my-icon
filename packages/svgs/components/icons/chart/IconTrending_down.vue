<template>
  <svg
    viewBox="0 0 24 24"
    :width="width || size"
    :height="height || size"
    :fill="color"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.707 10.293a1 1 0 0 0-.707.293l-3 3-6.293-6.293-1.414 1.414L9 15.414a1 1 0 0 0 .707.293h.586a1 1 0 0 0 .707-.293l3-3 4.293 4.293L16 19h6v-6l-2.293 2.293L15 10.586a1 1 0 0 0-.707-.293h-.586z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: 'IconTrending_down',
  props: {
    size: {
      type: [String, Number],
      default: 24,
    },
    width: {
      type: [String, Number],
      default: '',
    },
    height: {
      type: [String, Number],
      default: '',
    },
    color: {
      type: String,
      default: '#A4A4A4',
    },
  },
}
</script>
