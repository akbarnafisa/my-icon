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
      d="M17.5 22a3.46 3.46 0 0 1-3.383-4.352l-6.26-3.578a3.494 3.494 0 1 1 .576-4.47l5.683-3.249A3.489 3.489 0 0 1 14 5.5a3.53 3.53 0 1 1 1.142 2.57l-6.151 3.515c-.006.26-.042.517-.108.768l6.259 3.577A3.495 3.495 0 1 1 17.5 22zm0-5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-12-7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm12-6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: 'share_outline',
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
