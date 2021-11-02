
<template>
  <svg viewBox="0 0 24 24" :width="width || size" :height="height || size" :fill="color" xmlns="http://www.w3.org/2000/svg"><path d="M4 22H2V2h2v20zm11-1H5v-3h10v3zm3-5H5v-3h13v3zm3-5H5V8h16v3zm-8-5H5V3h8v3z" :fill="color"/></svg>
</template>

<script>
export default {
  name: 'IconBar_chart_horizontal',
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
