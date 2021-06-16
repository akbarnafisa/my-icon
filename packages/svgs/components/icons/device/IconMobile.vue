<template>
  <svg
    viewBox="0 0 24 24"
    :width="width || size"
    :height="height || size"
    :fill="color"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 23H7a2 2 0 0 1-2-2V2.913A2 2 0 0 1 7 1h10a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2zM7 3v18h10V3h-2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2H7z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: 'IconMobile',
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
