<template>
  <div id="app">
    <keep-alive exclude="detail">
      <!-- keep-alive 不会让组件在离开时销毁 -->
      <router-view></router-view>

    </keep-alive>
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
