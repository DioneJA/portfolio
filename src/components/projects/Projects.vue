<template>
   <div
    class="flex flex-col w-full gap-20 project-section py-20"
    :class="isMobile || isMediumScreen
        ? 'flex-col px-7 justify-center'
        : 'flex-row px-20 justify-between'"
  >
    <div class="flex flex-col items-start justify-between">
      <div class="flex items-start w-full">
        <h1 class="title mb-10">{{$t('projects.title').toUpperCase()}}</h1>
      </div>
      <div
        class="flex items-center justify-center grid grid-cols-3 gap-8 w-full"
      >
        <project-card
          v-for="project in projects"
          :key="project.title"
          :class="{
            'col-span-3': isMobile || isMediumScreen,
            'col-span-1': !isMobile && !isMediumScreen,
          }"
          :image-path="project.imagePath"
          :project-title="project.title"
          :project-description="project.description"
          :projectUrl="project.projectUrl"
          :is-mobile="isMobile"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { TabletScreenWidth } from '../../utils/screen/screenUtils';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Projects',
  components: {
    ProjectCard: () => import('./ProjectCard.vue'),
  },
  props: {
    isMobile: {
      type: Boolean,
      default: false,
    },
    ProjectCardisMobile: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    isMediumScreen() {
      return window.innerWidth < TabletScreenWidth;
    },
    projects: function () {
      return [
        {
          title: this.$t('projects.portfolio.title'),
          description: this.$t('projects.portfolio.description'),
          imagePath: 'src/assets/projects/portfolio-img.webp',
          projectUrl: 'https://github.com/DioneJA/portfolio',
        },
        {
          title: this.$t('projects.toDoList.title'),
          description: this.$t('projects.toDoList.description'),
          imagePath: 'src/assets/projects/to-do-list.webp',
          projectUrl: 'https://github.com/DioneJA/toDo-list-vuejs',
        },
        {
          title: this.$t('projects.monsterKiller.title'),
          description: this.$t('projects.monsterKiller.description'),
          imagePath: 'src/assets/projects/monster-killer.webp',
          projectUrl: 'https://github.com/DioneJA/matador-de-monstros',
        },
        {
          title: this.$t('projects.baseVueProject.title'),
          description: this.$t('projects.baseVueProject.description'),
          imagePath: 'src/assets/projects/base-project-vue.webp',
          projectUrl: 'https://github.com/DioneJA/base-vue-project',
        },
        {
          title: this.$t('projects.javaCompilator.title'),
          description: this.$t('projects.javaCompilator.description'),
          imagePath: 'src/assets/projects/java-compiler.webp',
          projectUrl: 'https://github.com/PedroH-CElias/Compilador',
        },
        {
          title: this.$t('projects.netflixClone.title'),
          description: this.$t('projects.netflixClone.description'),
          imagePath: 'src/assets/projects/netflix-clone.webp',
          projectUrl: 'https://github.com/DioneJA/clone_front_netflix',
        },
        {
          title: this.$t('projects.afndConversor.title'),
          description: this.$t('projects.afndConversor.description'),
          imagePath: 'src/assets/projects/afnd-conversor.webp',
          projectUrl: 'https://github.com/DioneJA/Conversor-de-AFND-para-AFD',
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.project-section {
  background-color: var(--color-background-tertiary-light);
}

</style>