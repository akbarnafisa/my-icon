<template>
  <svg
    viewBox="0 0 24 24"
    :width="width || size"
    :height="height || size"
    :fill="color"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10zM11 4.062a8 8 0 1 0 5.419 14.608l-.1.071.094-.065.059-.041.064-.045.016-.011.009-.007-5.128-5.13A1.51 1.51 0 0 1 11 12.379V4.062zM13.829 13l4.227 4.227.007-.008.005-.006-.01.011A7.944 7.944 0 0 0 19.938 13h-6.109zM13 4.062V11h6.938A8 8 0 0 0 13 4.062z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: 'IconPie_chart_outline',
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
