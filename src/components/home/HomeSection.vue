<template>
  <div class="flex items-center justify-center">
    <div class="absolute w-screen h-screen z-0">
      <img
        :src="backgroundImage"
        style="object-fit: cover; width: 100%; height: 100%;"
        alt="Imagem"
        class="background-image"
      />
    </div>
    <div class="flex flex-col text-center items-center justify-center z-10">
      <img
        :src="imageSrc"
        alt="Imagem"
        class="profile-image"
      />

      <div class="mt-7">
        <span class="complete-name">{{ $t("myCompleteName").toUpperCase() }}</span>
      </div>
      <div class="mt-3">
        <span class="normal-text ml-3 font-medium">{{ $t("iAm") }}</span>
        <span class="normal-text ml-1 font-medium">{{ $t("a") }}</span>
        <span class="normal-text ml-1 font-medium">{{ $t("role") }}</span>
      </div>
      <div class="mt-7">
        <button id="send-message" aria-label="Send Message" class="contact-me flex gap-3" @click="sendMessage">
          <mdicon name="whatsapp" />
          {{ $t("contactMe") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeSection',
  props: {
    isMobile: {
      type: Boolean,
      default: false
    },
  },
  data: function () {
    return {
      imageSrc: 'profile/image-profile.webp',
      backgroundImage: 'background/image-background.webp',
    };
  },
  methods: {
    sendMessage: function () {
      const link = `https://wa.me/${import.meta.env.VITE_PHONE_NUMBER}?link=${this.$t("sayHello")}`;
      window.open(link, "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
.background-image {
  opacity: 0.25;
  filter: grayscale(100%);
  filter: blur(1px);
}

.profile-image {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  opacity: 1;
  -moz-box-shadow: 0px 5px 5px grey;
  -webkit-box-shadow: 0px 5px 5px grey;
}

.complete-name {
  padding: 5px 10px;
  font-size: 1.8rem;
  font-weight: 500;
  border-radius: 8px;
  color: var(--color-primary);
}
.normal-text {
  color: var(--color-text-darkest);
}
.contact-me {
  transition: 0.2s ease;
  background-color: transparent;
  padding: 8px 25px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 20px;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  &:hover {
    transition: 0.2s ease;
    border: 2px solid var(--color-primary-light);
    color: var(--color-primary-light);
  }
}
</style>
