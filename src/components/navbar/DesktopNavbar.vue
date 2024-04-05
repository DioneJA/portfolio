<template>
  <div
    class="flex items-center justify-between navbar roboto fixed top-0 left-0 right-0 z-50"
    :class="{'px-2': isMediumScreen, 
            'px-20': !isMediumScreen,
            'scroll-at-top': isScrollAtStart,
            'scroll-at-midle': !isScrollAtStart
          }"
  >
    <div class="flex items-center justify-between">
      <span
        class="text-2xl font-bold tracking-widest title"
      >
        {{ $t('myName').toUpperCase() }}
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
  props: {
    isScrollAtStart: {
      type: Boolean,
      default: true
    },
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
  max-height: 70px;
}

.title {
  color: var(--color-text-primary);
  font-weight: 500;
  letter-spacing: 0.2vw;
  text-shadow: .5px .55px .5px;
  cursor: pointer;
  &:hover {
    transition: .2s ease-in;
    color: var(--color-text-primary-light);
  }
}
.scroll-at-midle {
  transition: .4s ease;
  background-color: var(--color-background-primary);
}

.scroll-at-top {
  transition: .4s ease;
  background-color: transparent;
}
</style>