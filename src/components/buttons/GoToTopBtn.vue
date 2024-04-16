<template>
  <button
    id="go-to-top-btn"
    class="go-to-top-btn"
    aria-label="Go to top"
    @click="$emit('go-to-top')"
  >
    <mdicon name="chevron-up" size="30"/>
  </button>
</template>

<script>
export default {
  name: 'GoToTopBtn',
};
</script>

<style lang="scss" scoped>
.go-to-top-btn {
  transition: .3s ease-in;
  background-color: var(--color-primary-light);
  border: none;
  cursor: pointer;
  padding: 5px;
  position: fixed;
  font-weight: bold;
  bottom: 20px;
  right: 20px;
  z-index: 100;
  border-radius: 50%;
  color: var(--color-text-neutral-dark);
  &:hover {
    transition: .3s ease-in;
    background-color: var(--color-primary-ultralight);
  }
}
</style>