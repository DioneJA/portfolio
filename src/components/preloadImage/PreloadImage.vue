<template>
  <div style="display: none;">
    <img :src="src" style="display: none;" @load="$emit('image-preloaded')"/>
  </div>
</template>

<script>
export default {
  name: 'ImagePreload',
  props: {
    src: {
      type: String,
      required: true
    }
  },
};
</script>

<style scoped>
</style>