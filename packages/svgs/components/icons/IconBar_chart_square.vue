
<template>
  <svg viewBox="0 0 24 24" :width="width || size" :height="height || size" :fill="color" xmlns="http://www.w3.org/2000/svg"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2zM5 5v14h14V5H5zm12 12h-2v-7h2v7zm-4 0h-2V7h2v10zm-4 0H7v-5h2v5z" :fill="color"/></svg>
</template>

<script>
export default {
  name: 'IconBar_chart_square',
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
