<template>
  <div class="flex flex-col">
    <home-section
      :id="ViewsType.Home"
      :ref="ViewsType.Home"
      :is-mobile="isMobile"
      class="w-full first-section"
      @image-loaded="imageLoaded = true"
    />
    <about-section
      v-if="imageLoaded"
      :id="ViewsType.AboutMe"
      :ref="ViewsType.AboutMe"
      :is-mobile="isMobile"
      class="w-full section"
    />
    <experiences-section
      v-if="imageLoaded"
      :id="ViewsType.Experiences"
      :ref="ViewsType.Experiences"
      :is-mobile="isMobile"
      class="w-full section"
    />
    <projects
      v-if="imageLoaded"
      :id="ViewsType.Projects"
      :ref="ViewsType.Projects"
      :is-mobile="isMobile"
      class="w-full section"
    />
    <skills
      v-if="imageLoaded"
      :id="ViewsType.Skills"
      :ref="ViewsType.Skills"
      :is-mobile="isMobile"
      class="w-full section"
    />
  </div>
</template>

<script>
import { Locales } from '../i18n/locales';
import { MobileScreenWidth } from '../utils/screen/screenUtils';
import { ViewsType } from '../utils/view/viewUtils';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    HomeSection: () => import('../components/home/HomeSection.vue'),
    AboutSection: () => import('../components/about/AboutSection.vue'),
    ExperiencesSection: () => import('../components/experiences/ExperiencesSection.vue'),
    Skills: () => import('../components/skills/Skills.vue'),
    Projects: () => import('../components/projects/Projects.vue'),
  },
  data: function () {
    return {
      ViewsType: ViewsType,
      imageLoaded: false,
    };
  },
  computed: {
    isMobile() {
      return window.innerWidth < MobileScreenWidth;
    },
  },
  mounted() {
    this.$bus.$on('change-view', this.changeView);
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    this.$bus.$off('change-view', this.changeView);
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggleLanguage: function () {
      if (this.$store.getters.getLanguage === Locales.ptBr) {
        this.$store.dispatch('setLanguage', Locales.enUs);
        return;
      }
      this.$store.dispatch('setLanguage', Locales.ptBr);
    },
    changeView: function (view) {
      const section = this.$refs[view];
      if (section) {
        section.$el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>

<style>
.section {
  min-height: calc(100vh - 70px);
}
.first-section {
  height: 100vh;
}
.title {
  font-weight: 500;
  font-size: 2rem;
  color: var(--color-primary);
  border-bottom: 1px solid var(--color-primary);
}
.title-white {
  font-weight: 500;
  font-size: 2rem;
  color: var(--color-text-neutral-light);
  border-bottom: 1px solid var(--color-text-neutral-light);
}
</style>