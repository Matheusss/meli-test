<template>
  <div id="app">
    <header class="header">
      <app-header></app-header>
    </header>
    <div class="router-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/modules/Shared/components/app-header/app-header.vue'

export default {
  components: {
    AppHeader,
  },
}
</script>

<style lang="scss">
#app {
  height: 100%;

  .header {
    height: $navbarHeight;
    width: 100%;
    background-color: $yellow;
    display: block;
    z-index: 99;
    padding: 8px 0;
    box-sizing: border-box;
  }
}
</style>
