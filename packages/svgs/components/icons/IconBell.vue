<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width || size"
    :height="height || size"
    viewBox="0 0 24 24"
  >
    <path
      :fill="color"
      fill-rule="evenodd"
      d="M19 14c.414 0 .75.336.75.75v1.5h1.5c.414 0 .75.336.75.75s-.336.75-.75.75h-1.5v1.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.5h-1.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.5v-1.5c0-.414.336-.75.75-.75zm1-10c1.105 0 2 .895 2 2v6.5c0 .276-.224.5-.5.5s-.5-.224-.5-.5V12H3v6c0 .552.448 1 1 1h10.5c.276 0 .5.224.5.5s-.224.5-.5.5H4c-1.105 0-2-.895-2-2V6c0-1.105.895-2 2-2h16zm-9 11c.552 0 1 .448 1 1s-.448 1-1 1H6c-.552 0-1-.448-1-1s.448-1 1-1h5zm9-10H4c-.552 0-1 .448-1 1v2h18V6c0-.552-.448-1-1-1z"
    ></path>
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
