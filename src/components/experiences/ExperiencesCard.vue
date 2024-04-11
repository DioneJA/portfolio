<template>
  <div class="card w-full h-full flex flex-col items-center justify-between gap-5 flex-wrap px-5 pt-20 pb-10 relative">
    <span class="normal-text absolute top-5 left-5 text-sm">{{ `(${period})` }}</span>
    <div class="mb-4 image-container">
        <img
          class="w-20 h-20"
          :src="companyLogo"
          alt="experience-icon"
          style="max-width: 100%; max-height: 100%; object-fit: contain;"
        />
      </div>
    <h1
      class="card-title w-full text-center font-bold primary-text"
    >
      {{ company.toUpperCase() }}
      <span  class="primary-dark-text w-full text-center font-medium text-md ">{{ `- ${position}` }}</span>
    </h1>
    <p class="normal-text w-full text-center text-sm">{{ description }}</p>
    <div
      class="normal-text w-full text-center"
    >
      <span v-if="tecnologies" class="text-md">
        <p class="font-medium mb-2">{{ `${$t('tecnologies')}:` }}</p>
      </span>
      <span class="text-sm">
        {{ tecnologies ?? '' }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperiencesCard',
  props: {
    company: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    tecnologies: {
      type: String,
      default: ''
    },
    period: {
      type: String,
      default: ''
    },
    companyLogo: {
      type: String,
      default: ''
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  transition: .3s ease-in;
  border-radius: 8px;
  background-color: var(--color-background-tertiary-light);
  border: 1px solid var(--color-border-primary);
  &:hover {
    transition: .3s ease-in;
    background-color: var(--color-background-tertiary-dark);
  }
}

.primary-dark-text {
  font-size: 1.1rem;
  color: var(--color-text-neutral-darkest) !important;
}

.primary-text {
  color: var(--color-primary);
  font-size: 1.2rem;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 5px;
  background-color: white;
  border: 1px solid var(--color-border-primary);
}

.normal-text {
  color: var(--color-text-neutral-dark) !important;
}

</style>