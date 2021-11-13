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
      d="M19 22H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2V2h2v2h6V2h2v2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2zM5 10v10h14V10H5zm0-4v2h14V6H5zm4.8 13H8v-1.8l4.2-4.19 1.8 1.8L9.8 19zm4.825-4.818-1.8-1.8 1.375-1.369 1.8 1.8-1.37 1.37-.005-.001z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: 'calendar_edit',
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
