<template>
  <button
    class="navbar-button font-medium text-md tracking-wider px-7"
    :class="{
      selected: isSelected,
      'scroll-in-top': scrollAtStart,
      'scroll-in-middle': !scrollAtStart,
    }"
    :style="isMediumScreen ? 'font-size: 0.9rem' : 'font-size: 1.1rem'"
    @click="$emit('click')"
    >
    {{ label }}
  </button>
</template>

<script>
import { TabletScreenWidth } from "../../../utils/screen/screenUtils";

export default {
  name: "DesktopNavbarButton",
  props: {
    label: {
      type: String,
      required: true,
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
    scrollAtStart: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isMediumScreen() {
      return window.innerWidth < TabletScreenWidth;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar-button {
  background-color: transparent;
  height: 70px;
  cursor: pointer;
  border: none;
  &:hover {
    transition: 0.3s ease-in;
    color: var(--color-primary);
  }
}

.selected {
  transition: 0.2s easy-in;
  border-bottom: 3px solid var(--color-primary);
  color: var(--color-primary) !important;
  &:hover {
    transition: 0.3s ease-in;
    color: var(--color-primary-light) !important;
    border-bottom: 3px solid var(--color-primary-light) !important;
  }
}

.scroll-in-top {
  transition: 0.2s ease;
  color: var(--color-primary-darkest);
}

.scroll-in-middle {
  transition: 0.2s ease;
  color: var(--color-text-neutral-light);
}
</style>
