<template>
  <div
    class="card w-full relative" :style="isMobile ? 'min-height: 300px;' : 'min-height: 300px;'"
  >
    <div
      class="flex items-center justify-center image-container absolute w-full h-full"
    >
      <img
        :src="imagePath"
        :alt="`${projectTitle.toUpperCase()}logo`"
        style=""
        class="image"
      />
    </div>
    <div
      class="absolute flex flex-col items-center gap-3 justify-center text-container absolute w-full h-full z-10 px-5 py-5"
    >
      <h1 class="card-title text-center">{{ projectTitle.toUpperCase() }}</h1>
      <span class="normal-text text-center">{{ projectDescription }}</span>
      <button class="flex items-center justify-center cursor-pointer button mt-5">
        <a :href="projectUrl" target="_blank">
          <mdicon
            name="open-in-new"
            size="25"
          />
        </a>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    imagePath: {
      type: String,
      required: true,
    },
    projectUrl: {
      type: String,
      required: true,
    },
    projectTitle: {
      type: String,
      required: true,
    },
    projectDescription: {
      type: String,
      required: true,
    },
    isMobile: {
      type: Boolean,
      default: false
    },
  },
  data: function () {
    return {
      isHovered: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
   background-color: var(--color-background-tertiary);
   border: 1px solid var(--color-border-primary);
   border-radius: 8px;
   overflow: hidden;
}

.image-container {
  overflow: hidden;
}
.image {
  object-fit: fill;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.text-container {
  transition: .3s ease-in;
  background-color: var(--color-background-tertiary);
  opacity: 0;
  &:hover {
    transition: .3s ease-in;
    opacity: .95;
  }
}
.card-title {
  color: var(--color-primary);
  font-size: 1.5rem;
  font-weight: bold;
}
.normal-text {
  color: var(--color-text-neutral-dark);
  font-size: 1.1rem;
}
.button {
  transition: .3s ease-in;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  padding: 10px;
  transition: .3s ease-in;
  border-radius: 50%;
  &:hover {
    transition: .3s ease-in;
    background-color: var(--color-primary);
    color: var(--color-text-neutral-light);
  }
}
</style>