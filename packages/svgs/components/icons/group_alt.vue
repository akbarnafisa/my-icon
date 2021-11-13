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
      d="M11 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM9 7a2 2 0 1 0-4 0 2 2 0 0 0 4 0zM21 11.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0zm-2 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zM10 21v-4a3 3 0 1 0-6 0v4H2v-4a5 5 0 0 1 10 0v4h-2zM20 20.5v.5h2v-.5a4.5 4.5 0 1 0-9 0v.5h2v-.5a2.5 2.5 0 0 1 5 0z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: 'group_alt',
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
