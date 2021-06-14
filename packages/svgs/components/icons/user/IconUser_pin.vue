<template>
  <svg
    viewBox="0 0 24 24"
    :width="width || size"
    :height="height || size"
    :fill="color"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m12 22-3-3H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-4l-3 3zM5 4v13h5l2 2 2-2h5V4H5zm11 10.986H8V14.6a3.82 3.82 0 0 1 4-3.6 3.82 3.82 0 0 1 4 3.6v.386zM12 10a1.934 1.934 0 0 1-2-2 1.935 1.935 0 0 1 2-2 1.935 1.935 0 0 1 2 2 1.934 1.934 0 0 1-2 2z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: 'IconUser_pin',
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
