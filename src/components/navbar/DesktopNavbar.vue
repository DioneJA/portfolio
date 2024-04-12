<template>
  <div
    class="flex items-center justify-between navbar roboto fixed top-0 left-0 right-0 z-50"
    :class="{'px-3': isMediumScreen, 
            'px-20': !isMediumScreen,
            'scroll-at-top': isScrollAtStart,
            'scroll-at-midle': !isScrollAtStart
          }"
  >
    <div class="flex items-center justify-between" style="height: 50px;">
      <img
        :src="isMediumScreen ? 'src/assets/logos/small-image-logo.png' : 'src/assets/logos/image-logo.png'"
        alt="logo"
        style="max-width: 100%; max-height: 100%; object-fit: contain;"
        class="cursor-pointer img-logo"
        @click="changeView(ViewsType.Home)"
      />
    </div>
    <div>
      <navbar-button
        :label="$t('navbar.home')"
        :scroll-at-start="isScrollAtStart"
        @click="changeView(ViewsType.Home)"
      />

      <navbar-button
        :label="$t('navbar.aboutMe')"
        :scroll-at-start="isScrollAtStart"
        @click="changeView(ViewsType.AboutMe)"
      />

      <navbar-button
        :label="$t('navbar.experiences')"
        :scroll-at-start="isScrollAtStart"
        @click="changeView(ViewsType.Experiences)"
      />

      <navbar-button
        :label="$t('navbar.projects')"
        :scroll-at-start="isScrollAtStart"
        @click="changeView(ViewsType.Projects)"
      />

      <navbar-button
        :label="$t('navbar.skills')"
        :scroll-at-start="isScrollAtStart"
        @click="changeView(ViewsType.Skills)"
      />
    </div>
  </div>
</template>

<script>
import { TabletScreenWidth } from '../../utils/screen/screenUtils';
import { ViewsType } from '../../utils/view/viewUtils';

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
  data: function () {
    return {
      ViewsType: ViewsType,
    };
  },
  computed: {
    isMediumScreen() {
      return window.innerWidth < TabletScreenWidth;
    },
  },
  methods: {
    changeView: function (view) {
      this.$emit('change-view', view);
    },
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 70px;
}

.title {
  color: var(--color-text-neutral-light);
  font-weight: 500;
  letter-spacing: 0.2vw;
  text-shadow: .5px .55px .5px;
  cursor: pointer;
  &:hover {
    transition: .2s ease-in;
    color: var(--color-text-neutral-light-light);
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

.img-logo {
  opacity: 1;
  transition: .4s ease;
  &:hover {
    opacity: .7;
  }
}
</style>