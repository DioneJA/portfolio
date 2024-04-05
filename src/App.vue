<template>
  <div
    id="app"
    class="w-screen"
    ref="scrollableElement"
    :class="isMenuOpen ? 'overflow-hidden' : ''"
  >
    <header>
      <navbar
        class="w-full"
        :is-menu-open="isMenuOpen"
        :is-scroll-at-start="isScrollAtStart"
        @toggle-menu="isMenuOpen = !isMenuOpen"
      />
    </header>

    <Transition name="slide">
      <mobile-menu v-if="isMenuOpen"/>
    </Transition>

    <template v-if="!isMenuOpen">
      <section>
        <router-view />
      </section>
    </template>

    <language-selector/>
    <go-to-top-btn
      v-if="!isMenuOpen"
      @go-to-top="isMenuOpen = false"
    />
  </div>
</template>

<script>
import { Locales } from './i18n/locales';
import { MobileScreenWidth } from './utils/screen/screenUtils';

export default {
  name: 'App',
  components: {
    Navbar: () => import('./components/navbar/Navbar.vue'),
    MobileMenu: () => import('./components/navbar/MobileMenu.vue'),
    LanguageSelector: () => import('./components/language/LanguageSelector.vue'),
    GoToTopBtn: () => import('./components/buttons/GoToTopBtn.vue'),
  },
  data: function () {
    return {
      isMenuOpen: false,
      isScrollAtTop: true,
    };
  },
  mounted: function () {
    this.loadComponent();
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy: function () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  computed: {
    isMobile() {
      return window.innerWidth < MobileScreenWidth;
    },
    isScrollAtStart() {
      return this.isScrollAtTop;
    },
  },
  methods: {
    loadComponent: function () {
      this.setDefaultLanguage();
    },
    setDefaultLanguage: function () {
      if (!this.$store.getters.getLanguage) {
        this.$store.dispatch('setLanguage', Locales.ptBr);
      }
    },
    handleScroll: function () {
      this.isScrollAtTop = window.scrollY === 0;
    }
  }
};
</script>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter, .slide-leave-to {
  transform: translateY(-100%);
}

</style>
