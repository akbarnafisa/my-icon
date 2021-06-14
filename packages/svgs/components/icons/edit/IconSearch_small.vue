<template>
  <svg
    viewBox="0 0 24 24"
    :width="width || size"
    :height="height || size"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m17.577 19-4.767-4.766a5.035 5.035 0 0 1-6.336-7.76 5.035 5.035 0 0 1 7.761 6.335L19 17.577 17.577 19zM10.034 7.014a3.02 3.02 0 1 0-.004 6.04 3.02 3.02 0 0 0 .004-6.04z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: 'IconSearch_small',
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
