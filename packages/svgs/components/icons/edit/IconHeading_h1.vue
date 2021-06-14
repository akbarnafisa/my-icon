<template>
  <svg
    viewBox="0 0 24 24"
    :width="width || size"
    :height="height || size"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 4v7H4V4H2v16h2v-7h6v7h2V4h-2zm10 16V8h-1.5l-2.5.67v2.07l2-.536V20h2z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: 'IconHeading_h1',
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
