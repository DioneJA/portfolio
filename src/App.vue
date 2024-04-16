<template>
  <div
    id="app"
    class="w-screen"
    ref="scrollableElement"
    :class="isMenuOpen ? 'overflow-hidden' : ''"
  >
    <preload-image
      v-for="image in criticalImages"
      :key="image.src"
      :src="image.src"
      @image-preloaded="imagePreloaded(image)"
    />
    <header>
      <navbar
        v-if="criticalImagesLoaded"
        class="w-full"
        :is-menu-open="isMenuOpen"
        :is-scroll-at-start="isScrollAtStart"
        @toggle-menu="isMenuOpen = !isMenuOpen"
        @change-view="changeView"
      />
    </header>

    <Transition name="slide">
      <mobile-menu
        v-if="isMenuOpen && criticalImagesLoaded"
        @change-view="changeView"
      />
    </Transition>

    <div  v-if="criticalImagesLoaded">
      <section>
        <router-view />
        <footer-component/>
      </section>
    </div>

    <language-selector v-if="criticalImagesLoaded"/>

    <Transition name="fade">
      <go-to-top-btn
        v-if="!isMenuOpen && !isScrollAtStart && criticalImagesLoaded"
        @go-to-top="scrollToTop"
      />
    </Transition> 
  </div>
</template>

<script>
import { Locales } from './i18n/locales';
import { MobileScreenWidth } from './utils/screen/screenUtils';
import PreloadImage from './components/preloadImage/PreloadImage.vue';
import { CriticalImages } from './utils/criticalImages/criticalImagesUtils.js';

export default {
  name: 'App',
  components: {
    Navbar: () => import('./components/navbar/Navbar.vue'),
    MobileMenu: () => import('./components/navbar/MobileMenu.vue'),
    LanguageSelector: () => import('./components/language/LanguageSelector.vue'),
    GoToTopBtn: () => import('./components/buttons/GoToTopBtn.vue'),
    FooterComponent: () => import('./components/footer/FooterComponent.vue'),
    PreloadImage: PreloadImage,
  },
  data: function () {
    return {
      isMenuOpen: false,
      isScrollAtTop: true,
      criticalImages: CriticalImages,
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
    isMobile: function () {
      return window.innerWidth < MobileScreenWidth;
    },
    isScrollAtStart() {
      return this.isScrollAtTop;
    },
    criticalImagesLoaded: function () {
      return this.criticalImages.every(image => image.loaded);
    },
  },
  methods: {
    loadComponent: function () {
      this.setDefaultLanguage();
    },
    imagePreloaded: function (image) {
      image.loaded = true;
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