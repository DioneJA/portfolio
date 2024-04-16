<template>
  <div
    class="flex about-section gap-8 py-20 h-full"
    :class="isMobile ? 'flex-col-reverse px-7 items-center justify-center' : 'flex-row px-20 justify-between'"
  >
    <div
      class="basis-1/2 flex flex-col justify-between"
      :class="isMobile ? 'mt-5' : 'py-20'"
    >
      <div class="flex flex-col items-start justify-start gap-10">
        <h1 class="title">{{$t('aboutMe.title').toUpperCase()}}</h1>
        <div class="description">
          <country-flag country='br' shadow/>
          <span class="ml-4">{{`${$t('aboutMe.description')}`}}</span>
        </div>
        <ul class="about-list pl-8 flex flex-col gap-4">
          <li>{{$t('aboutMe.graduation')}}</li>
          <li>{{$t('aboutMe.yearsOfExperience', {x: 1})}}</li>
          <li>{{$t('aboutMe.englishLevel')}}</li>
          <li>{{$t('aboutMe.actuallyStuding')}}</li>
        </ul>
      </div>
      <div
        class="flex flex-row w-full gap-7 mt-20"
        :class="isMobile ? 'justify-center' : 'justify-start'"
      >
        <button id="linkedin" @click="openLinkedinUrl()" aria-label="Linkedin">
          <mdicon
            class="social-media"
            name="linkedin"
            size="35"
          >
          </mdicon>
        </button>
        <button id="instagram" @click="openInstagramUrl()" aria-label="Instagram">
          <mdicon
            class="social-media"
            name="instagram"
            size="35"
          >
          </mdicon>
        </button>
        <button id="facebook" @click="openFacebookUrl()" aria-label="Facebook">
          <mdicon
            class="social-media"
            name="facebook"
            size="35"
          >
          </mdicon>
        </button>
        <button id="github" @click="openGithubUrl()" aria-label="Github">
          <mdicon
            class="social-media"
            name="github"
            size="35"
          >
          </mdicon>
        </button>
      </div>
    </div>
    <div class="flex items-center justify-center profile-image-container basis-1/2">
      <img
        :src="imageSrc"
        alt="image"
        style="object-fit: cover"
        :style="isMobile ? 'width: 95%;' : 'width: 75%;'"
        class="image"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutSection',
  props: {
    isMobile: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      imageSrc: 'profile/full-image-profile.webp',
    };
  },
  methods: {
    goToUrl: function (url) {
      window.open(url, "_blank");
    },
    openGithubUrl: function () {
      this.goToUrl(import.meta.env.VITE_GITHUB_URL);
    },
    openFacebookUrl: function () {
      this.goToUrl(import.meta.env.VITE_FACEBOOK_URL);
    },
    openInstagramUrl: function () {
      this.goToUrl(import.meta.env.VITE_INSTAGRAM_URL);
    },
    openLinkedinUrl: function () {
      this.goToUrl(import.meta.env.VITE_LINKEDIN_URL);
    }
  }
};
</script>

<style lang="scss" scoped>
.about-section {
  background-color: var(--color-background-secondary);
}

.image {
  -moz-box-shadow: 0px 15px 15px var(--color-text-neutral-darkest);
  -webkit-box-shadow: 0px 15px 15px var(--color-text-neutral-darkest);
}

.description {
  font-weight: medium;
  font-size: 1.3rem;
  color: var(--color-text-neutral-light);
}
.about-list {
  list-style-type: disc;
  font-weight: normal;
  font-size: 1rem;
  color: var(--color-text-neutral-light);
}
.social-media {
  color: var(--color-text-neutral-light);
  cursor: pointer;
  &:hover {
    transition: 0.2s ease-in;
    color: var(--color-primary);
  }
}
</style>