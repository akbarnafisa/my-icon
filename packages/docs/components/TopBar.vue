<template>
  <div class="flex justify-between items-center">
    <div class="w-1/3 text-lg font-semibold">
      {{ totalFiles }} Files ({{ totalSize }}Kb)
    </div>
    <input
      class="w-1/3 appearance-none border rounded-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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
