<template>
  <div>
    <slot :items="filteredIcons" />
  </div>
</template>

<script>
export default {
  props: {
    icons: {
      type: Object,
      require: true,
      default: () => ({}),
    },
    searchFiles: {
      type: String,
      default: '',
    },
  },
  computed: {
    filteredIcons() {
      return this.icons.files.filter(icon =>
        icon.name.toLowerCase().includes(this.searchFiles.toLowerCase())
      )
    },
  },
  watch: {
    searchFiles() {
      this.updateQueryUrl()
    },

    $route(to) {
      const query = to.query || {}
      this.$emit('updateQuery', query.q || '')
    },
  },

  methods: {
    updateQueryUrl() {
      const data = {
        query: {
          q: this.searchFiles ? this.searchFiles : undefined,
        },
      }

      this.$router.replace(data)
    },
  },
}
</script>

<style lang="scss" scoped></style>
