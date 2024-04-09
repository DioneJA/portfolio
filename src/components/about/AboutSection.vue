<template>
  <div
    class="flex about-section gap-8 py-20 h-full"
    :class="isMobile ? 'flex-col-reverse px-7 items-center justify-center' : 'flex-row px-20 items-center justify-between'"
  >
    <div class="basis-1/2 flex flex-col items-start justify-end">
      <div class="flex flex-col items-start justify-start gap-10">
        <h1 class="title">{{$t('aboutMe.title').toUpperCase()}}</h1>
        <h2 class="description">{{`${$t('aboutMe.description')}.`}}</h2>
        <ul class="about-list pl-8 flex flex-col gap-4">
          <li>{{$t('aboutMe.graduation')}}</li>
          <li>{{$t('aboutMe.yearsOfExperience', {x: 1})}}</li>
          <li>{{$t('aboutMe.englishLevel')}}</li>
          <li>{{$t('aboutMe.actuallyStuding')}}</li>
        </ul>
      </div>
      <div class="flex flex-row w-full gap-7 mt-20 justify-center">
        <mdicon class="social-media" name="linkedin" size="35"></mdicon>
        <mdicon class="social-media" name="instagram" size="35"></mdicon>
        <mdicon class="social-media" name="facebook" size="35"></mdicon>
        <mdicon class="social-media" name="twitter" size="35"></mdicon>
        <mdicon class="social-media" name="github" size="35"></mdicon>
      </div>
    </div>
    <div class="flex items-center justify-center profile-image-container basis-1/2">
      <img
        src="src/assets/full-image-profile.webp"
        alt="image"
        style="object-fit: cover"
        :style="isMobile ? 'max-width: 95%; ' : 'max-width: 75%; '"
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
.title {
  font-weight: 500;
  font-size: 2rem;
  color: var(--color-primary);
  border-bottom: 1px solid var(--color-primary);
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