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
        :current-view="currentView"
        @toggle-menu="isMenuOpen = !isMenuOpen"
        @change-view="changeView"
      />
    </header>

    <Transition name="slide">
      <mobile-menu
        v-if="isMenuOpen"
        :current-view="currentView"
        @change-view="changeView"
      />
    </Transition>

    <div>
      <section>
        <router-view />
      </section>
    </div>

    <language-selector/>

    <Transition name="fade">
      <go-to-top-btn
        v-if="!isMenuOpen && !isScrollAtStart"
        @go-to-top="scrollToTop"
      />
    </Transition> 
  </div>
</template>

<script>
import { Locales } from './i18n/locales';
import { MobileScreenWidth } from './utils/screen/screenUtils';
import { ViewsType } from './utils/view/viewUtils';

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
      currentView: ViewsType.Home,
    };
  },
  mounted: function () {
    this.$bus.$on('active-section', (section) => {
      this.currentView = section;
    });
    this.loadComponent();
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy: function () {
    window.removeEventListener('scroll', this.handleScroll);
    this.$bus.$off('active-section');
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
    changeView: function (view) {
      this.isMenuOpen = false;
      this.$bus.$emit('change-view', view);
    },
    setDefaultLanguage: function () {
      if (!this.$store.getters.getLanguage) {
        this.$store.dispatch('setLanguage', Locales.ptBr);
      }
    },
    handleScroll: function () {
      this.isScrollAtTop = window.scrollY === 0;
    },
    scrollToTop: function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      this.isMenuOpen = false;
      this.currentView = ViewsType.Home;
    },
  },
};
</script>

<style>
.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter, .slide-leave-to {
  transform: translateY(-100%);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>