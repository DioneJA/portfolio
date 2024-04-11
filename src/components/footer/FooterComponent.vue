<template>
  <div
    class="footer flex flex-row justify-center text-medium text-lg items-center w-full pt-5 flex-wrap"
    :class="isMobile ? 'pb-20' : 'pb-5'"
  >
    <span class="w-full text-center" v-html="$t('copyright')"></span>
  </div>
</template>

<script>
import { MobileScreenWidth } from '../../utils/screen/screenUtils';
export default {
  name: 'FooterComponent',
  computed: {
    isMobile() {
      return window.innerWidth < MobileScreenWidth;
    },
  }
};
</script>

<style>
.footer {
  background-color: var(--color-background-primary);
  color: var(--color-primary);
}
</style>