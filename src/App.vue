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
        @change-view="changeView"
      />
    </header>

    <Transition name="slide">
      <mobile-menu
        v-if="isMenuOpen"
        @change-view="changeView"
      />
    </Transition>

    <div>
      <section>
        <router-view />
        <footer-component/>
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

export default {
  name: 'App',
  components: {
    Navbar: () => import('./components/navbar/Navbar.vue'),
    MobileMenu: () => import('./components/navbar/MobileMenu.vue'),
    LanguageSelector: () => import('./components/language/LanguageSelector.vue'),
    GoToTopBtn: () => import('./components/buttons/GoToTopBtn.vue'),
    FooterComponent: () => import('./components/footer/FooterComponent.vue'),
  },
  data: function () {
    return {
      isMenuOpen: false,
      isScrollAtTop: true,
    };
  },
  mounted: function () {
    if (this.$router.name !== 'home') {
      this.$router.push({ name: 'notFound' });
      return;
    }
    this.loadComponent();
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy: function () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  computed: {
    isMobile: function () {
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
    changeView: async function (view) {
      if (this.$route?.name !== 'home') {
        await this.$router.push({ name: 'home' });
        setTimeout(() => {
          this.isMenuOpen = false;
          this.$bus.$emit('change-view', view);
        }, 50);
        return;
      }
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