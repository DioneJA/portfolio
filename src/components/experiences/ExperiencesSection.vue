<template>
  <div
    class="flex flex-col w-full gap-20 experiences-section py-20"
    :class="isMobile || isMediumScreen
        ? 'flex-col px-7 justify-center'
        : 'flex-row px-20 justify-between'"
    >
    <div class="flex flex-col items-center justify-between">
      <div class="flex items-start w-full">
        <h1 class="title mb-10">{{$t('experiences.title').toUpperCase()}}</h1>
      </div>
      <div
        class="grid grid-cols-6 gap-4 w-full"
      >
        <experiences-card
          v-for="experience in workExperience"
          :key="experience.position"
          :company="experience.company"
          :position="experience.position"
          :description="experience.description"
          :tecnologies="experience.tecnologies"
          :period="experience.period"
          :company-logo="experience.logoSrc"
          :class="isMobile ? 'col-span-6' : 'col-span-3'"
          class="card"
          >
        </experiences-card>
      </div>
    </div>
  </div>
</template>

<script>
import { TabletScreenWidth } from '../../utils/screen/screenUtils';

export default {
  components: {
    ExperiencesCard: () => import('./ExperiencesCard.vue'),
  },
  name: 'ExperiencesSection',
  props: {
    isMobile: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
    };
  },
  computed: {
    isMediumScreen() {
      return window.innerWidth < TabletScreenWidth;
    },
    workExperience: function () { 
      return [
          {
            company: this.$t('workExperiences.exatiAnalytics.company'),
            period: this.$t('workExperiences.exatiAnalytics.period'),
            position: this.$t('workExperiences.exatiAnalytics.position'),
            description: this.$t('workExperiences.exatiAnalytics.description'),
            tecnologies: this.$t('workExperiences.exatiAnalytics.tecnologies'),
            logoSrc: '/src//assets/exati-logo.webp'
          },
          {
            company: this.$t('workExperiences.exatiIntern.company'),
            period: this.$t('workExperiences.exatiIntern.period'),
            position: this.$t('workExperiences.exatiIntern.position'),
            description: this.$t('workExperiences.exatiIntern.description'),
            tecnologies: this.$t('workExperiences.exatiIntern.tecnologies'),
            logoSrc: '/src/assets/exati-logo.webp'
          },
          {
            company: this.$t('workExperiences.incetec.company'),
            period: this.$t('workExperiences.incetec.period'),
            position: this.$t('workExperiences.incetec.position'),
            description: this.$t('workExperiences.incetec.description'),
            tecnologies: this.$t('workExperiences.incetec.tecnologies'),
            logoSrc: '/src/assets/ifsul-logo.webp'
          },
          {
            company: this.$t('workExperiences.citHallPassos.company'),
            period: this.$t('workExperiences.citHallPassos.period'),
            position: this.$t('workExperiences.citHallPassos.position'),
            description: this.$t('workExperiences.citHallPassos.description'),
            logoSrc: '/src/assets/prefeitura-passos-logo.webp'
          },
        ];
    },
  }
};
</script>

<style lang="scss" scoped>
.experiences-section {
  background-color: var(--color-background-tertiary);
}
.small-card {
  width: 47%;
}
</style>
