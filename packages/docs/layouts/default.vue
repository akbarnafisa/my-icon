<template>
  <div class="flex">
    <side-bar />
    <div class="content">
      <div class="content__wrapper">
        <div class="content__main">
          <Nuxt />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.content {
  @media (max-width: 992px) {
    margin-left: 0;
  }
  width: 100%;
  min-height: 100vh;
  margin-left: 279px;

  &__wrapper {
    @media (max-width: 992px) {
      padding: 24px;
    }

    @media (max-width: 480px) {
      padding: 16px;
    }

    padding: 36px;
    margin: 0 auto;
    max-width: 1240px;
    position: relative;
    display: flex;
  }

  &__main {
    width: 100%;
    margin: 0 auto;
  }
}
</style>
