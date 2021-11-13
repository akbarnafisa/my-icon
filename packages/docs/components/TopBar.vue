<template>
  <div
    class="flex flex-col sm:flex-row justify-between items-center mt-16 lg:mt-0"
  >
    <div
      class="w-1/2 text-center mb-4 sm:w-1/3 sm:text-left sm:mb-0 text-lg font-semibold"
    >
      {{ totalFiles }} Files
    </div>
    <input
      class="w-72 sm:w-1/3 appearance-none border rounded-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
      type="text"
      placeholder="Search Assets"
      :value="searchFiles"
      @input="onInput"
    />
  </div>
</template>

<script>
export default {
  props: {
    totalFiles: {
      type: Number,
      default: 0,
    },
    totalSize: {
      type: Number,
      default: 0,
    },
    searchFiles: {
      type: String,
      default: '',
    },
  },
  methods: {
    onInput($event) {
      this.$emit('onInput', $event)
    },
  },
}
</script>
