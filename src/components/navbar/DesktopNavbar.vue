<template>
  <div
    class="flex items-center justify-between navbar roboto fixed top-0 left-0 right-0 z-50"
    :class="isMediumScreen ? 'px-2' : 'px-20'"
  >
    <div>
      <span
        class="text-2xl font-semibold tracking-widest title"
      >
        {{ $t('portfolio') }}
      </span>
    </div>
    <div>
      <navbar-button
        :label="$t('navbar.home')"
        is-selected
      />

      <navbar-button
        :label="$t('navbar.aboutMe')"
      />

      <navbar-button
        :label="$t('navbar.experiences')"
      />

      <navbar-button
        :label="$t('navbar.projects')"
      />

      <navbar-button
        :label="$t('navbar.skills')"
      />
    </div>
  </div>
</template>

<script>
import { TabletScreenWidth } from '../../utils/screen/screenUtils';

export default {
  name: 'DesktopNavBar',
  components: {
    NavbarButton: () => import('./buttons/DesktopNavbarButton.vue'),
  },
  computed: {
    isMediumScreen() {
      return window.innerWidth < TabletScreenWidth;
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: var(--color-background-primary);
}

.title {
  color: var(--color-text-primary);
  cursor: pointer;
  &:hover {
    transition: .2s ease-in;
    color: var(--color-text-primary-light);
  }
}
</style>