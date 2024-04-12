<template>
  <div
    class="flex flex-col w-full gap-20 skills-section py-20"
    :class="isMobile || isMediumScreen
        ? 'flex-col px-7 justify-center'
        : 'flex-row px-20 justify-between'"
  >
    <div class="flex flex-col items-center justify-between">
      <div class="flex items-start w-full">
        <h1 class="title-white mb-10">{{$t('skills.title').toUpperCase()}}</h1>
      </div>
      <div
        class="grid grid-cols-4 gap-8 w-full"
      >
        <skills-card
          v-for="skill in skills"
          :key="skill.label"
          :class="{
            'col-span-4': isMobile ,
            'col-span-2': isMediumScreen ,
            'col-span-1': !isMobile && !isMediumScreen,
          }"
          :is-mobile="isMobile"
          :label="skill.label"
          :icon="skill.icon"
          :is-mdi="skill.isMdi"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { TabletScreenWidth } from '../../utils/screen/screenUtils';
import { skills } from './skills';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Skills',
  components: {
    SkillsCard: () => import('./SkillsCard.vue'),
  },
  props: {
    isMobile: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      skills: skills,
    };
  },
  computed: {
    isMediumScreen() {
      return window.innerWidth < TabletScreenWidth;
    },
  }
};
</script>

<style lang="scss" scoped>
.skills-section {
  background-color: var(--color-primary);
}
</style>