<template>
  <div id="app">
    <transition name="slide-fade" mode="out-in">
      <Settings v-if="showSettings" key="settings" />
      <Weather v-if="!showSettings" key="weather" @openSettings="handleClick" />
    </transition>
    <aside class="right-bar">
      <span class="right-bar__fab-button" @click="handleClick">
        <mdicon :name="icon" />
      </span>
    </aside>
  </div>
</template>

<script>
import '@/plugins/icons';
import store from '@/store';
import { GET_USER_LOCATIONS } from '@/store/actionsType';

import Weather from '@/views/Weather';
import Settings from '@/views/Settings';

export default {
  store,
  name: 'App',
  components: {
    Weather,
    Settings,
  },
  data() {
    return {
      showSettings: false,
    };
  },
  mounted() {
    this.$store.dispatch(GET_USER_LOCATIONS);
  },
  computed: {
    icon() {
      return this.showSettings ? 'close' : 'cog';
    },
  },
  methods: {
    handleClick() {
      this.showSettings = !this.showSettings;
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>
