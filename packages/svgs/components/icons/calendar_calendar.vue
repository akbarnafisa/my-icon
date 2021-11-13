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
      d="M18.999 22h-14a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2V2h2v2h6V2h2v2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2zm-14-12v10h14V10h-14zm0-4v2h14V6h-14z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: 'calendar_calendar',
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
