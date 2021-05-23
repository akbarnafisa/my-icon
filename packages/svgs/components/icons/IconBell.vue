<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width || size"
    :height="height || size"
  >
    <path
      :fill="color"
      fill-rule="evenodd"
      d="M19 14a.75.75 0 0 1 .75.75v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.5A.75.75 0 0 1 19 14zm1-10a2 2 0 0 1 2 2v6.5a.5.5 0 0 1-1 0V12H3v6a1 1 0 0 0 1 1h10.5a.5.5 0 0 1 0 1H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16zm-9 11a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2h5zm9-10H4a1 1 0 0 0-1 1v2h18V6a1 1 0 0 0-1-1z"
    />
  </svg>
</template>

<script>
export default {
  name: 'IconBell',
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
