<template>
  <svg
    viewBox="0 0 24 24"
    :width="width || size"
    :height="height || size"
    :fill="color"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 3a5 5 0 1 0 0 10A5 5 0 0 0 9 3zM6 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm10.908.218A2 2 0 0 0 16 8V6a4 4 0 1 1-2.357 7.232l1.178-1.616a2 2 0 1 0 2.087-3.398zM19.998 21A3.999 3.999 0 0 0 16 17.002V15a6.001 6.001 0 0 1 6 6h-2.002zM16 21h-2a5 5 0 0 0-10 0H2a7 7 0 1 1 14 0z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: 'IconGroup',
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
