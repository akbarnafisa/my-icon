<template>
  <svg
    viewBox="0 0 24 24"
    :width="width || size"
    :height="height || size"
    :fill="color"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 21h-3V11h3v10zm-5 0h-3V8h3v13zm-5 0H8V5h3v16zm-5 0H3v-8h3v8z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: 'IconBar_chart',
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
