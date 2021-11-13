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
      d="M4 19H2a6 6 0 0 1 12 0h-2a4 4 0 0 0-8 0zm16.294-3.294L18 13.413l-2.293 2.293-1.414-1.414L16.585 12l-2.292-2.293 1.414-1.414L18 10.586l2.293-2.293 1.414 1.414L19.414 12l2.293 2.293-1.413 1.413zM8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6a2 2 0 1 0 2 2.09v.4V8a2 2 0 0 0-2-2z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: 'user_close',
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
