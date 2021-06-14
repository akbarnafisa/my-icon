<template>
  <svg
    viewBox="0 0 24 24"
    :width="width || size"
    :height="height || size"
    :fill="color"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.051 21.949a10 10 0 0 1-1-19.949v4.04a5.994 5.994 0 1 0 6.909 6.909H22a10.015 10.015 0 0 1-9.95 9h.001zm9.95-11h-4.04a5.993 5.993 0 0 0-4.91-4.909V2A10.022 10.022 0 0 1 22 10.948l.001.001z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: 'IconDoughnut_chart',
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
