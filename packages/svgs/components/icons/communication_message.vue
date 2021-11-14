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
      d="M3 21V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9c-.433 0-.854.14-1.2.4L3 21zM5 5v12l2.134-1.6a1.99 1.99 0 0 1 1.2-.4H19V5H5z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: 'communication_message',
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
