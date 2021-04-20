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
  </div>
</template>

<script>
import Navbar from '../../components/common/navbar/navbar'
import { getHomeMultidata } from '../../network/home'
import { Swiper, SwiperItem } from '../../components/swiper'
import HomeRecommon from './homeComps/homeRecommon.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Swiper,
    SwiperItem,
    HomeRecommon
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
.home-nav{
  background-color: var(--color-tint);
  color: white;
}
.homerecommend{
  width: 100%;
}
</style>
