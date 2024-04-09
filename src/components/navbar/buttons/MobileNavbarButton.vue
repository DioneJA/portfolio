<template>
  <button
    class="navbar-button text-lg font-medium tracking-wide"
    :class="isSelected ? 'selected' : ''"
    @click="$emit('click')"
    >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "MobileNavbarButton",
  props: {
    label: {
      type: String,
      required: true,
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar-button {
  background-color: transparent;
  color: var(--color-text-neutral-light);
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
  color: var(--color-primary);
  &:hover {
    transition: 0.3s ease-in;
    color: var(--color-primary-light);
  }
}
</style>
