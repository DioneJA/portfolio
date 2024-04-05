<template>
  <div class="flex items-center justify-center">
    <div class="background-image absolute w-full h-full z-0"/>
    <div class="flex flex-col text-center items-center justify-center z-10">
      <div class="profile-image"></div>
      <div class="mt-7">
        <span class="complete-name">{{ $t('myCompleteName') }}</span>
      </div>
      <div class="mt-3">
        <span class="hello">{{ $t('hello') }}</span>
        <span class="normal-text ml-3 font-medium">{{ $t('iAm') }}</span>
        <span class="normal-text ml-1 font-medium">{{ $t('a') }}</span>
        <span class="normal-text ml-1 font-medium">{{ $t('role') }}</span>
      </div>
      <div class="mt-7">
        <button class="contact-me" @click="sendMessage">{{ $t('contactMe') }}</button>
      </div>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
import { MobileScreenWidth } from '../../utils/screen/screenUtils';

export default {
  name: 'HomeSection',
  computed: {
    isMobile() {
      return window.innerWidth < MobileScreenWidth;
    },
  },
  methods: {
    sendMessage: function () {
      const link = `https://wa.me/${import.meta.env.VITE_PHONE_NUMBER}?link=${this.$t('sayHello')}`;
      window.open(link, '_blank');
    }
  }
};
</script>

<style lang="scss" scoped>
.background-image {
  background-image: url('../../assets/image-background.webp');
  background-size: cover;
  background-position: center;
  opacity: 0.1;
  filter: grayscale(100%);
  filter: blur(2px);
}

.profile-image {
  width: 250px;
  height: 250px;
  background-image: url('../../assets/image-profile.webp');
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  opacity: 1;
}

.hello {
  padding: 5px 10px;
  font-size: 1.3rem;
  font-weight: medium;
  background-color: var(--color-text-secondary);
  border-radius: 8px;
  opacity: 1;
  color: white;
}

.complete-name {
  padding: 5px 10px;
  font-size: 2rem;
  font-weight: 500;
  border-radius: 8px;
  color: var(--color-text-secondary);
}
.normal-text {
  color: var(--color-text-secondary);
}
.contact-me {
  transition: .2s ease;
  background-color: var(--color-text-primary);
  padding: 8px 20px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 4px;
  color: var(--color-text-neutral-darkest);
  border: none;
  &:hover {
    transition: .2s ease;
    transform: scale(1.05);
    background-color: var(--color-text-primary-light);
  }
}
</style>