
<template>
  <svg viewBox="0 0 24 24" :width="width || size" :height="height || size" :fill="color" xmlns="http://www.w3.org/2000/svg"><path d="M22 21H2V11a2 2 0 0 1 2-2h4V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3h4a2 2 0 0 1 2 2v12zM16 9v10h4V9h-4zm-6-5v15h4V4h-4zm-6 7v8h4v-8H4z" :fill="color"/></svg>
</template>

<script>
export default {
  name: 'IconBar_chart_alt',
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
