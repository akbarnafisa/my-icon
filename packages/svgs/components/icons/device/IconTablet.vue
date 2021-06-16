<template>
  <svg
    viewBox="0 0 24 24"
    :width="width || size"
    :height="height || size"
    :fill="color"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 23H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2zM4 3v18h16V3H4zm8 17a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: 'IconTablet',
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
