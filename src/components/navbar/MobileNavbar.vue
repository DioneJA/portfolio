<template>
  <div>
    <div
      class="flex justify-between items-center navbar pl-0 pr-6 fixed top-0 left-0 right-0 z-50"
      :class="{
        'scroll-at-top': isScrollAtStart && !isMenuOpen,
        'scroll-at-midle': !isScrollAtStart || isMenuOpen,
      }">
      <div class="flex items-center justify-between" style="height: 45px">
        <img
          :src="logoUrl"
          alt="logo"
          style="width: 100%; height: 100%; object-fit: contain"
          class="cursor-pointer"
          @click="$emit('change-view', ViewsType.Home)"
        />
      </div>

      <div>
        <button
          id="mobile-navbar-btn"
          aria-label="Mobile Navbar Button"
          class="navbar-btn text-md font-medium tracking-wide text-2xl"
          :class="!isScrollAtStart || isMenuOpen ? 'text-light' : 'text-dark'"
          @click="$emit('toggle-menu')">
          <Transition mode="out-in">
            <mdicon v-if="isMenuOpen" name="close" :width="30" :height="30" />
            <mdicon v-else name="menu" :width="30" :height="30" />
          </Transition>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ViewsType } from '../../utils/view/viewUtils';

export default {
  name: "MobileNavbar",
  props: {
    isMenuOpen: {
      type: Boolean,
      default: false,
    },
    isScrollAtStart: {
      type: Boolean,
      default: true,
    },
  },
  data: function () {
    return {
      ViewsType: ViewsType,
      logoUrl: 'logos/image-logo.png',
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 70px;
}

.title {
  font-weight: 500;
  letter-spacing: 0.2vw;
  text-shadow: 0.5px 0.55px 0.5px;
  color: var(--color-primary);
  cursor: pointer;
  &:hover {
    transition: 0.2s ease-in;
    color: var(--color-primary-light);
  }
}
.navbar-btn {
  background-color: transparent;
  color: var(--color-text-neutral-light);
  cursor: pointer;
  border: none;
  padding: none;
}

.scroll-at-midle {
  transition: 0.4s ease;
  background-color: var(--color-background-primary);
}

.scroll-at-top {
  transition: 0.4s ease;
  background-color: transparent;
}

.text-dark {
  color: var(--color-text-neutral-darkest);
}

.text-light {
  color: var(--color-text-neutral-light);
}
</style>
