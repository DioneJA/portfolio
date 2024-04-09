<template>
  <div class="flex flex-col">
    <home-section
      :ref="ViewsType.Home"
      :is-mobile="isMobile"
      class="w-full first-section"
    />
    <about-section
      :ref="ViewsType.AboutMe"
      :is-mobile="isMobile"
      class="w-full section"
    />
  </div>
</template>

<script>
import { Locales } from '../i18n/locales';
import { MobileScreenWidth } from '../utils/screen/screenUtils';
import { ViewsType } from '../utils/view/viewUtils';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    HomeSection: () => import('../components/home/HomeSection.vue'),
    AboutSection: () => import('../components/about/AboutSection.vue'),
  },
  data: function () {
    return {
      ViewsType: ViewsType,
    };
  },
  computed: {
    isMobile() {
      return window.innerWidth < MobileScreenWidth;
    },
  },
  mounted() {
    this.$bus.$on('change-view', this.changeView);
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    this.$bus.$off('change-view', this.changeView);
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggleLanguage: function () {
      if (this.$store.getters.getLanguage === Locales.ptBr) {
        this.$store.dispatch('setLanguage', Locales.enUs);
        return;
      }
      this.$store.dispatch('setLanguage', Locales.ptBr);
    },
    handleScroll: function () {
      const sections = [this.ViewsType.Home, this.ViewsType.AboutMe];
      let activeSection = null;
      for (let sectionId of sections) {
        const section = this.$refs[sectionId];
        const rect = section.$el.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          activeSection = sectionId;
          break;
        }
      }
      if (activeSection) {
        this.$bus.$emit('active-section', activeSection);
      }
    },
    changeView: function (view) {
      const section = this.$refs[view];
      if (section) {
        section.$el.scrollIntoView({ behavior: 'smooth' });
      }
      this.$bus.$emit('active-section', view);
    }
  }
};
</script>

<style>
.section {
  min-height: calc(100vh - 70px);
}
.first-section {
  height: 100vh;
}
</style>