<template>
  <div>
    <div
      class="flex justify-between items-center navbar px-6 fixed top-0 left-0 right-0 z-50"
      :class="{'scroll-at-top': isScrollAtStart,
            'scroll-at-midle': !isScrollAtStart
          }"
    >
      <div>
        <span
            class="text-2xl font-bold tracking-widest title"
          >
          {{ $t('myName').toUpperCase() }}
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
    isScrollAtStart: {
      type: Boolean,
      default: true
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
  max-height: 70px;
}

.title {
  font-weight: 500;
  letter-spacing: 0.2vw;
  text-shadow: .5px .55px .5px;
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
  padding: none;
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