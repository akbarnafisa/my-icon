<template>
  <svg
    viewBox="0 0 24 24"
    :width="width || size"
    :height="height || size"
    :fill="color"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 19H3a2 2 0 0 1-2-2v-1h2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9h2v1a2 2 0 0 1-2 2zM5 7v9h14V7H5z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: 'IconLaptop',
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
