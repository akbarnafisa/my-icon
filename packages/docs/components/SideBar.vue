<template>
  <nav
    class="nav__sidebar w-full h-screen overflow-y-scroll fixed left-0 top-0 bg-white p-4"
  >
    <div class="font-bold mb-2">GETTING STARTED</div>
    <div
      class="nav__sidebar__started text-gray-600"
      :class="{
        nav__sidebar__isActive: $route.name === 'index',
      }"
    >
      <nuxt-link class="px- py-2" to="/">Getting Started</nuxt-link>
    </div>
    <div>
      <nuxt-link to="/version">Version</nuxt-link>
    </div>

    <div class="font-bold mb-2 mt-4">ASSETS</div>
    <div>
      <nuxt-link to="/icons">Icons</nuxt-link>
    </div>
    <div>
      <nuxt-link to="/illustrations">Illustrations</nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navActive: false,
    }
  },
  methods: {
    escToggle(e) {
      if (e.keyCode === 27) {
        this.toggleNav(false)
      }
    },
    goToRoute($event) {
      if ($event.target.attributes.href) {
        this.toggleNav(false)
      }
    },
    toggleNav(val) {
      if (val) {
        document.addEventListener('keyup', this.escToggle)
      } else {
        document.removeEventListener('keyup', this.escToggle)
      }
      this.navActive = val
    },
  },
}
</script>

<style lang="less" scoped>
.nav__sidebar {
  @media (max-width: 992px) {
    opacity: 0;
    transition: opacity 0.1s ease;
  }
  &--active {
    display: block;
    z-index: 102;
    opacity: 1;
  }

  max-width: 279px;

  .nuxt-link-active {
    color: #8b5cf6;
    background-color: #f5f3ff;
    font-weight: 600;
  }

  &__started {
    .nuxt-link-active {
      color: #333;
      background-color: initial;
      font-weight: 400;
    }
  }

  &__isActive {
    .nuxt-link-active {
      color: #8b5cf6;
      background-color: #f5f3ff;
      font-weight: 600;
    }
  }

  a {
    padding: 12px 16px;
    transition: background-color 0.15s ease 0s, transform 0.15s ease-in 0s;
    display: block;
    border-radius: 4px;
    text-decoration: none;
    color: #333;
    transform: translateX(0px);

    &:hover {
      color: #333;
      transform: translateX(4px);
      color: #8b5cf6;
    }
  }
}
</style>
