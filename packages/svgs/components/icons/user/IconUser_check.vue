<template>
  <svg
    viewBox="0 0 24 24"
    :width="width || size"
    :height="height || size"
    :fill="color"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 19H2a6 6 0 0 1 12 0h-2a4 4 0 0 0-8 0zm11.994-3.59-2.706-2.7 1.412-1.418 1.292 1.292 4.3-4.292 1.412 1.416-5.712 5.7.002.002zM8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6a2 2 0 1 0 2 2.09v.4V8a2 2 0 0 0-2-2z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: 'IconUser_check',
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
