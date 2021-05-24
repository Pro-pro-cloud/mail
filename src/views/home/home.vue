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
    <tabbarControl class="tab-control" :titles = "['流行','新款','精品']" @tabClick = 'tabClick'></tabbarControl>
    <goods-list :goods = "goods[type].list" class="homeGoods"></goods-list>
  </div>
</template>

<script>

import { Swiper, SwiperItem } from '../../components/swiper'
import HomeRecommon from './homeComps/homeRecommon.vue'
import featureView from './homeComps/featureView'
import GoodsList from '../../components/content/goods/GoodsList'

import Navbar from '../../components/common/navbar/navbar'
import tabbarControl from '../../components/content/tabberControl/tabberControl'

import { getHomeMultidata, getHomeGoods } from '../../network/home'

export default {
  name: 'Home',
  components: {
    Navbar,
    Swiper,
    SwiperItem,
    HomeRecommon,
    featureView,
    tabbarControl,
    GoodsList

  },
  data () {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      type: 'pop'
    }
  },
  created () {
    // 请求多个数据
    this.getHomeMultidata()
    // 请求商品数据
    this.getHomeGoodsFun('pop')
    this.getHomeGoodsFun('new')
    this.getHomeGoodsFun('sell')
  },
  methods: {
    getHomeMultidata () {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoodsFun (type) {
      // 去除单引号
      const trueType = type.replace(/'/g, '')
      const page = this.goods[trueType].page + 1
      getHomeGoods(type, page).then((res) => {
        this.goods[trueType].list.push(...res.data.list)
        this.goods[trueType].page += 1
      })
    },
    /*
    * 事件监听
    */
    tabClick (index) {
      if (index === 0) {
        this.type = 'pop'
      } else if (index === 1) {
        this.type = 'new'
      } else if (index === 2) {
        this.type = 'sell'
      }
    }
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
  z-index: 9;
}

.homeGoods{
  padding-bottom: 49px;
}
</style>
