<template>
  <svg
    viewBox="0 0 24 24"
    :width="width || size"
    :height="height || size"
    :fill="color"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 13.414a1 1 0 0 0 .707.293h.586a1 1 0 0 0 .707-.293l4.707-4.707L22 11V5h-6l2.293 2.293L14 11.586l-3-3a1 1 0 0 0-.707-.293h-.586A1 1 0 0 0 9 8.586l-6.707 6.707 1.414 1.414L10 10.414l3 3z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: 'IconTrending_up',
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
