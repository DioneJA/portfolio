<template>
  <div>
    <desktop-navbar
      v-if="!isMobile"
      :is-scroll-at-start="isScrollAtStart"
      @change-view="event => $emit('change-view', event)"
    />
    <mobile-navbar
      v-else
      :is-menu-open="isMenuOpen"
      :is-scroll-at-start="isScrollAtStart"
      @toggle-menu="$emit('toggle-menu')"
      @change-view="event => $emit('change-view', event)"
    />
  </div>
</template>

<script>
import { MobileScreenWidth } from '../../utils/screen/screenUtils';

export default {
  name: 'NavBar',
  components: {
    DesktopNavbar: () => import('./DesktopNavbar.vue'),
    MobileNavbar: () => import('./MobileNavbar.vue'),
  },
  props: {
    isMenuOpen: {
      type: Boolean,
      default: false
    },
    isScrollAtStart: {
      type: Boolean,
      default: true
    },
  },
  computed: {
    isMobile() {
      return window.innerWidth < MobileScreenWidth;
    },
  },
};
</script>

<style>

</style>