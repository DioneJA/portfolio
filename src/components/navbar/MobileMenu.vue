<template>
  <div
    class="z-30 w-screen menu flex pb-20 flex-col justify-center items-center gap-8"
    style="height: calc(100vh - 70px);"
  >
    <navbar-button
      :label="$t('navbar.home')"
      @click="changeView(ViewsType.Home)"
    />
    <navbar-button
      :label="$t('navbar.aboutMe')"
      @click="changeView(ViewsType.AboutMe)"
    />
    <navbar-button
      :label="$t('navbar.experiences')"
      @click="changeView(ViewsType.Experiences)"
    />
    <navbar-button
      :label="$t('navbar.projects')"
      @click="changeView(ViewsType.Projects)"
    />
    <navbar-button
      :label="$t('navbar.skills')"
      @click="changeView(ViewsType.Skills)"
    />
  </div>
</template>

<script>
import { ViewsType } from '../../utils/view/viewUtils';

export default {
  name: 'MobileMenu',
  components: {
    NavbarButton: () => import('./buttons/MobileNavbarButton.vue'),
  },
  data: function () {
    return {
      ViewsType: ViewsType,
    };
  },
  methods: {
    changeView: function (view) {
      this.$emit('change-view', view);
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  background-color: var(--color-background-primary);
  position: fixed;
  top: 70px;
  left: 0;
}
</style>
