<template>
  <button
    class="navbar-button text-md font-medium tracking-wide px-7"
    :class="isSelected ? 'selected' : ''"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'DesktopNavbarButton',
  props: {
    label: {
      type: String,
      required: true
    },
    isSelected: {
      type: Boolean,
      default: false,
    }
  },
};
</script>

<style lang='scss' scoped>
.navbar-button {
  background-color: transparent;
  color: var(--color-text-neutral-dark);
  height: 65px;
  cursor: pointer;
  border: none;
  &:hover {
    transition: .3s ease-in;
    color: var(--color-text-primary);
  }
}

.selected {
  transition: .2s easy-in;
  border-bottom: 3px solid ;
  color: var(--color-text-primary);
}
</style>