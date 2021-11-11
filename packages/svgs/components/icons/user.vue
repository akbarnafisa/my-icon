<template>
  <svg
    v-on="$listeners"
    viewBox="0 0 24 24"
    :width="size"
    :height="size"
    :fill="color"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 8a5 5 0 1 1 10 0A5 5 0 0 1 7 8zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.657 5.343A8 8 0 0 0 4 22h2a6 6 0 1 1 12 0h2a8 8 0 0 0-13.657-5.657z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: 'user',
  props: {
    size: {
      type: [String, Number],
      default: 24,
    },
    color: {
      type: String,
      default: '#A4A4A4',
    },
  },
}
</script>
