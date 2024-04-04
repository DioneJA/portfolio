<template>
  <div
    id="app"
    class="w-screen"
    :class="isMenuOpen ? 'overflow-hidden' : ''"
  >
    <header>
      <navbar
        class="w-full"
        :is-menu-open="isMenuOpen"
        @toggle-menu="isMenuOpen = !isMenuOpen"
      />
    </header>

    <Transition name="slide">
      <mobile-menu v-if="isMenuOpen"/>
    </Transition>

    <template v-if="!isMenuOpen">
      <section  class="pt-20">
        <router-view />
      </section>
  
      <footer>
        teste footer
      </footer>
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

export default {
  name: 'App',
  components: {
    Navbar: () => import('./components/navbar/Navbar.vue'),
    MobileMenu: () => import('./components/navbar/MobileMenu.vue'),
    LanguageSelector: () => import('./components/language/LanguageSelector.vue'),
    GoToTopBtn: () => import('./components/buttons/GoToTopBtn.vue')
  },
  data: function () {
    return {
      isMenuOpen: false,
    };
  },
  mounted: function () {
    this.loadComponent();
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
