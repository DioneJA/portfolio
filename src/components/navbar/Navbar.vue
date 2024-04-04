<template>
  <div>
    <desktop-navbar
      v-if="!isMobile"
    />
    <mobile-navbar
      v-else
      :is-menu-open="isMenuOpen"
      @toggle-menu="$emit('toggle-menu')"
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