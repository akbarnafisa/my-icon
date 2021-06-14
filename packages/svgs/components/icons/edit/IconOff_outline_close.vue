<template>
  <svg
    viewBox="0 0 24 24"
    :width="width || size"
    :height="height || size"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22A10 10 0 0 1 4.926 4.926a10.004 10.004 0 1 1 14.148 14.148A9.936 9.936 0 0 1 12 22zm-8-9.828A8 8 0 1 0 4 12v.172zM9.41 16 8 14.59 10.59 12 8 9.41 9.41 8 12 10.59 14.59 8 16 9.41 13.41 12 16 14.59 14.591 16l-2.59-2.59L9.41 16h-.002z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: 'IconOff_outline_close',
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
