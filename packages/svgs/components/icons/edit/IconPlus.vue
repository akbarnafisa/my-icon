<template>
  <svg
    viewBox="0 0 24 24"
    :width="width || size"
    :height="height || size"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13 13v6h-2v-6H5v-2h6V5h2v6h6v2h-6z" :fill="color" />
  </svg>
</template>

<script>
export default {
  name: 'IconPlus',
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
