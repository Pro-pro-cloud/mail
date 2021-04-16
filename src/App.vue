<template>
  <div id="app">
    <router-view></router-view>
    <main-tabbar></main-tabbar>
  </div>
</template>

<style lang="scss">
  @import "./assets/css/base.css";
</style>

<script>
import MainTabbar from './components/content/MainTabbar/MainTabbar'

export default {
  name: 'app',
  components: {
    MainTabbar
  }
}
</script>>
