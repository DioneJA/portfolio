<template>
  <div
    class="z-30 w-screen h-screen menu py-20 flex flex-col justify-center items-center gap-8"
    style="height: calc(100vh - 70px);"
  >
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
</template>

<script>
export default {
  name: 'MobileMenu',
  components: {
    NavbarButton: () => import('./buttons/MobileNavbarButton.vue'),
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
