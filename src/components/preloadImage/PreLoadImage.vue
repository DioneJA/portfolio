<template>
  <div>
    <img ref="preloadImage" style="display: none;" />
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
  mounted() {
    this.preloadImage();
  },
  methods: {
    preloadImage: function () {
      const img = new Image();
      img.src = this.src;
      img.onload = () => {
        this.$emit('image-preloaded');
      };
      this.$refs.preloadImage.appendChild(img);
    }
  }
};
</script>

<style scoped>
</style>