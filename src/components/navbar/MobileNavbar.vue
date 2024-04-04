<template>
  <div>
    <div class="flex justify-between items-center navbar px-6 fixed top-0 left-0 right-0 z-50">
      <div>
        <span
            class="text-2xl font-semibold tracking-widest title"
          >
          {{ $t('portfolio') }}
        </span>
      </div>
  
      <div>
        <a
          class="navbar-btn text-md font-medium tracking-wide px-7 text-2xl"
          @click="$emit('toggle-menu')"
        >
          <Transition mode="out-in">
            <mdicon v-if="isMenuOpen" name="close" :width="30" :height="30"/> 
            <mdicon v-else name="menu" :width="30" :height="30"/> 
          </Transition>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileNavbar',
  props: {
    isMenuOpen: {
      type: Boolean,
      default: false
    },
  },
  data: function () {
    return {
    };
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: var(--color-background-primary);
  min-height: 65px;
}

.title {
  color: var(--color-text-primary);
  cursor: pointer;
  &:hover {
    transition: .2s ease-in;
    color: var(--color-text-primary-light);
  }
}
.navbar-btn {
  background-color: transparent;
  color: var(--color-text-neutral-dark);
  cursor: pointer;
  border: none;
}
</style>