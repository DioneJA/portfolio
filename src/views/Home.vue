<template>
  <div>
    <button
      type="button"
      class="relative inline-flex items-center ml-3 justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
      aria-controls="mobile-menu"
      aria-expanded="false"
      @click="toggleLanguage"
    >
      Change language
    </button>
    <span>{{ $t('hello') }}</span>
  </div>
</template>

<script>
import { Locales } from '../i18n/locales';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  methods: {
    toggleLanguage: function () {
      if (this.$store.getters.getLanguage === Locales.ptBr) {
        this.$store.dispatch('setLanguage', Locales.enUs);
        return;
      }
      this.$store.dispatch('setLanguage', Locales.ptBr);
    }
  }
};
</script>

<style>

</style>