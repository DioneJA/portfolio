<template>
  <div class="flex flex-col" style="gap: 70px">
    <home-section class="w-full section"/>
    <home-section class="w-full section"/>
  </div>
</template>

<script>
import { Locales } from '../i18n/locales';
import { MobileScreenWidth } from '../utils/screen/screenUtils';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    HomeSection: () => import('../components/home/HomeSection.vue'),
  },
  computed: {
    isMobile() {
      return window.innerWidth < MobileScreenWidth;
    },
  },
  methods: {
    toggleLanguage: function () {
      if (this.$store.getters.getLanguage === Locales.ptBr) {
        this.$store.dispatch('setLanguage', Locales.enUs);
        return;
      }
      this.$store.dispatch('setLanguage', Locales.ptBr);
    }
  }
};
</script>

<style>
.section {
  height: calc(100vh - 70px);
}
</style>