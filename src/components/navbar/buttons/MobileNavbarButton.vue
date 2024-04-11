<template>
  <button
    class="navbar-button text-lg font-medium tracking-wide"
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
</style>
