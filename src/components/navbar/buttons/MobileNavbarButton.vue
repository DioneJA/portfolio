<template>
  <button
    class="navbar-button text-lg font-medium tracking-wide"
    :class="isSelected ? 'selected' : ''"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'MobileNavbarButton',
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
  cursor: pointer;
  border: none;
  &:hover {
    transition: .3s ease-in;
    color: var(--color-text-primary);
  }
}

.selected {
  transition: .2s easy-in;
  border-bottom: 3px solid var(--color-text-primary);
  color: var(--color-text-primary);
  &:hover {
    transition: .3s ease-in;
    color: var(--color-text-primary-light);
  }
}

</style>