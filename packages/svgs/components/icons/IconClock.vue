<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width || size"
    :height="height || size"
  >
    <path
      :fill="color"
      fill-rule="evenodd"
      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm1-10V6a1 1 0 0 0-2 0v5.573l-2.42 2.42a1 1 0 0 0 1.413 1.415l2.825-2.833A.988.988 0 0 0 13 12z"
    />
  </svg>
</template>

<script>
export default {
  name: 'IconClock',
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
