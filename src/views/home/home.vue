<template>
  <div id="home">
    <navbar class="home-nav"><div slot="center">购物街</div></navbar>
    <swiper>
      <SwiperItem v-for="(item,index) in banners" :key="index">
        <a :href="item.link"></a>
        <img :src="item.image" height="200px" width="100%">
      </SwiperItem>
    </swiper>
    <home-recommon :recommend="recommends"></home-recommon>
    <feature-view></feature-view>
    <tabbarControl class="tab-control" :titles = "['流行','新款','精品']"></tabbarControl>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
        <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>

<div>我是填充</div>
<div>我是填充</div>
<div>我是填充</div>
<div>我是填充</div>
<div>我是填充</div>
<div>我是填充</div>
<div>我是填充</div>
<div>我是填充</div>
<div>我是填充</div>
<div>我是填充</div>
<div>我是填充</div>
<div>我是填充</div>

<div>我是填充</div>
<div>我是填充</div>
<div>我是填充</div>
<div>我是填充</div>
    <div>我是填充</div>
    <div>我是填充</div>
  </div>
</template>

<script>

import { Swiper, SwiperItem } from '../../components/swiper'
import HomeRecommon from './homeComps/homeRecommon.vue'
import featureView from './homeComps/featureView'

import Navbar from '../../components/common/navbar/navbar'
import tabbarControl from '../../components/content/tabberControl/tabberControl'

import { getHomeMultidata } from '../../network/home'

export default {
  name: 'Home',
  components: {
    Navbar,
    Swiper,
    SwiperItem,
    HomeRecommon,
    featureView,
    tabbarControl
  },
  data () {
    return {
      banners: [],
      recommends: []
    }
  },
  created () {
    // 请求多个数据
    getHomeMultidata().then((res) => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  }
}
</script>

<style scoped>
#home {
  padding-top: 44px;
}

.home-nav{
  background-color: var(--color-tint);
  color: white;

  position: fixed;
  left: 0;
  top:0;
  right : 0;
  z-index: 9;
}
.homerecommend{
  width: 100%;
}

.tab-control{
  position: sticky;
  top: 44px;
  background:#fff;
}
</style>
