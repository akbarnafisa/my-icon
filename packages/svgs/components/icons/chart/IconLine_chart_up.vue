<template>
  <svg
    viewBox="0 0 24 24"
    :width="width || size"
    :height="height || size"
    :fill="color"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 21H4a1 1 0 0 1-1-1V3h2v16h16v2zM8.373 16 7 14.656 11.856 9.9a.985.985 0 0 1 1.373 0l2.227 2.181L19.627 8 21 9.344 16.144 14.1a.985.985 0 0 1-1.373 0l-2.228-2.182L8.374 16h-.001z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: 'IconLine_chart_up',
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
