<template>
  <svg
    viewBox="0 0 24 24"
    :width="width || size"
    :height="height || size"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22c-5.52-.006-9.994-4.48-10-10v-.2C2.11 6.305 6.635 1.928 12.13 2c5.497.074 9.904 4.569 9.868 10.065C21.962 17.562 17.497 22 12 22zM7 11v2h4v4h2v-4h4v-2h-4V7h-2v4H7z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: 'IconPlus_circle',
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
