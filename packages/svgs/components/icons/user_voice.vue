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
      d="M4 19.001H2a6 6 0 0 1 12 0h-2a4 4 0 0 0-8 0zm14.364-3.637L16.95 13.95a7 7 0 0 0 0-9.9l1.414-1.414a9 9 0 0 1 0 12.727v.001zm-2.829-2.828-1.414-1.416a3 3 0 0 0 0-4.24l1.414-1.417a5 5 0 0 1 0 7.071v.002zM8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6a2 2 0 1 0 2 2.09v.4V8a2 2 0 0 0-2-2z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: 'user_voice',
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
