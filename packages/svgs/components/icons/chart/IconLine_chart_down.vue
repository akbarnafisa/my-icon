<template>
  <svg
    viewBox="0 0 24 24"
    :width="width || size"
    :height="height || size"
    :fill="color"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 21H4a1 1 0 0 1-1-1V3h2v16h16v2zm-1.373-5-4.17-4.082-2.228 2.182a.985.985 0 0 1-1.373 0L7 9.344 8.373 8l4.17 4.082L14.77 9.9a.985.985 0 0 1 1.373 0L21 14.656 19.627 16z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: 'IconLine_chart_down',
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
