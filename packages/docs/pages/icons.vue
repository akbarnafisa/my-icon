<template>
  <div>
    <top-bar
      :total-files="totalFiles"
      :total-size="totalSize"
      :search-files="searchFiles"
      @onInput="onInput"
    />

    <icon-render
      :search-files="searchFiles"
      :icons="AssetsIcons"
      @updateQuery="searchFiles = $event"
    >
      <template slot-scope="options">
        <div v-if="options.items.length === 0" class="text-center mt-16">
          No icons found for <b>'{{ searchFiles }}'</b>
        </div>
        <div v-else class="mt-6 icon__container">
          <div
            v-for="item in options.items"
            :key="item.name"
            class="icon__wrapper"
          >
            <div class="icon__item">
              <component :is="item.name" size="28" />
            </div>
            <div class="icon__desc text-xs text-center">
              {{ item.name }}
            </div>
          </div>
        </div>
      </template>
    </icon-render>
  </div>
</template>

<script>
import AssetsIcons from '@myicon/svgs/components/icons.json'
import TopBar from '../components/TopBar.vue'
import IconRender from '../components/IconRender.vue'

export default {
  name: 'IconsPage',
  components: { TopBar, IconRender },
  data() {
    return {
      AssetsIcons,
      searchFiles: this.$route.query.q || '',
    }
  },

  computed: {
    totalFiles() {
      return this.AssetsIcons.total
    },

    totalSize() {
      return Math.round(
        this.AssetsIcons.files.reduce((total, curr) => total + curr.size, 0) /
          1024
      )
    },
  },

  methods: {
    onInput($event) {
      this.searchFiles = $event.target.value
    },
  },
}
</script>

<style lang="less" scoped>
.icon {
  &__container {
    place-content: start space-around;
    display: grid;
    gap: 24px 16px;
    grid-template-columns: repeat(auto-fill, 128px);
  }

  &__wrapper {
    position: relative;
    height: 128px;
    width: 128px;
  }

  &__item {
    transform: translate(-50%, -50%);
    position: absolute;
    left: 50%;
    top: 40px;
    max-width: 88px;
  }

  &__desc {
    transform: translate(-50%, -50%);
    position: absolute;
    left: 50%;
    top: 84px;
    padding: 0px 8px;
    width: 100%;
    text-align: center;
  }
}
</style>
