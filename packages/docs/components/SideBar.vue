<template>
  <div>
    <div class="nav__menu" @click="toggleNav(true)">
      <div class="nav__menu__wrapper">
        <div class="nav__menu__icon">
          <svg
            viewBox="0 0 448 512"
            role="presentation"
            aria-hidden="true"
            class="css-12j51pv css-3vopgu css-kzfxtu"
          >
            <path
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              fa-key="3"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <div v-if="navActive" class="nav__overlay" @click="toggleNav(false)" />

    <nav
      :class="navActive ? 'nav__sidebar--active' : ''"
      class="nav__sidebar w-full h-screen overflow-y-scroll fixed left-0 top-0 bg-white p-4"
      @click="goToRoute"
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
    </nav>
  </div>
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
.nav__menu {
  @media (min-width: 1024px) {
    display: none;
  }

  position: fixed;
  top: 16px;
  left: 16px;
  z-index: 101;

  &__wrapper {
    width: 50px;
    height: 50px;
    box-shadow: 0 4px 6px 0 rgba(32, 33, 36, 0.32);
    border-radius: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: whitesmoke;
    }
  }
  &__icon {
    width: 20px;
    height: 20px;
    font-size: 16px;
  }
  &__icon svg {
    width: 100%;
    height: 100%;
  }
}

.nav__overlay {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  min-height: 100%;
  min-width: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.48);
}

.nav__sidebar {
  @media (max-width: 1024px) {
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
