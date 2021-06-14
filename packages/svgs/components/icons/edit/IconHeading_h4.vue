<template>
  <svg
    viewBox="0 0 24 24"
    :width="width || size"
    :height="height || size"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 4v7H4V4H2v16h2v-7h6v7h2V4h-2zm12 13.96V16h-1v-3.08h-2V16h-3l3.5-8h-2.08L14 16v1.96h5V20h2v-2.04h1z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: 'IconHeading_h4',
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
