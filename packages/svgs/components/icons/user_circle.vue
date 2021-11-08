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
      d="M12 22a9.9 9.9 0 0 1-4.364-1 10.053 10.053 0 0 1-1.425-.845l-.137-.1a10.09 10.09 0 0 1-2.964-3.471A9.89 9.89 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a9.892 9.892 0 0 1-1.109 4.582 10.09 10.09 0 0 1-2.96 3.47c-.467.342-.963.643-1.482.9l-.08.04A9.9 9.9 0 0 1 12 22zm0-5a3.99 3.99 0 0 0-3.557 2.167 8.014 8.014 0 0 0 7.114 0v-.005A3.987 3.987 0 0 0 12 17zm0-2a6.015 6.015 0 0 1 5.229 3.056l.015-.013.014-.012-.017.015-.01.008a8 8 0 1 0-10.46 0A6.016 6.016 0 0 1 12 15zm0-1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: 'user_circle',
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
