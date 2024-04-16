<template>
  <div class="pa-5 skill-card flex flex-col gap-8 items-center justify-center">
    <h1
      v-if="!isMdi"
      :style="isMobile ? 'font-size: 2.5rem' : 'font-size: 3.2rem'"
    >
      <i :class="icon"></i>
    </h1>
    <mdicon
      v-else
      :name="icon"
      :size="isMobile ? 40 : 50"
    />
    <span
      class="text-bold"
      :style="isMobile ? 'font-size: 1.5rem' : 'font-size: 1.7rem'"
      v-html="label"
    />
  </div>
</template>

<script>
import 'devicon';

export default {
  name: 'SkillsCard',
  props: {
    icon: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    isMobile: {
      type: Boolean,
      default: false
    },
    isMdi: {
      type: Boolean,
      default: false
    },
  },
};
</script>

<style lang="scss" scoped>
.skill-card {
  border-radius: 8px;
  color: var(--color-text-neutral-light);
  background-color: var(--color-background-secondary);
  transition: .3s ease-in;
  min-height: 200px;
  &:hover {
    transition: .3s ease-in;
    translate: 0 -10px;
    background-color: var(--color-background-primary);
  }
}
</style>