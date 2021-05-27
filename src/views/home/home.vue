<template>
  <div id="home">
    <navbar class="home-nav"><div slot="center">购物街</div></navbar>

    <scroll class="wrapper" ref="scroll" :probe-type="3" @watchScroll="watchScroll" :pull-up-load="true"
    @pullUp = "pullUpLoadMore">
      <swiper>
        <SwiperItem v-for="(item,index) in banners" :key="index">
          <a :href="item.link"></a>
          <img :src="item.image" height="200px" width="100%">
        </SwiperItem>
      </swiper>
      <home-recommon :recommend="recommends"></home-recommon>
      <feature-view></feature-view>
      <tabbarControl class="tab-control" :titles = "['流行','新款','精品']" @tabClick = 'tabClick'></tabbarControl>
      <goods-list :goods = "goods[nowtype].list" class="homeGoods"></goods-list>
    </scroll>

    <back-top @backToTop ='homeToTop' v-show="isShowToTop"></back-top>
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
import Scroll from '../../components/common/scroll/scroll.vue'
import BackTop from '../../components/common/backTop/backTop.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Swiper,
    SwiperItem,
    HomeRecommon,
    featureView,
    tabbarControl,
    GoodsList,
    Scroll,
    BackTop

  },
  data () {
    return {
      banners: [],
      recommends: [],
      isShowToTop: false,
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      nowtype: 'pop'
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
    /*
    * Multidata请求数据
    */
    getHomeMultidata () {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    /*
    * 请求商品数据
    */
    getHomeGoodsFun (nowtype) {
      // 去除单引号
      const trueType = nowtype.replace(/'/g, '')
      const page = this.goods[trueType].page + 1
      getHomeGoods(nowtype, page).then((res) => {
        this.goods[trueType].list.push(...res.data.list)
        this.goods[trueType].page += 1
        console.log(this.$refs.scroll)
        this.$refs.scroll.finishPullUp()
      })
    },

    /*
    * 返回顶部
    */
    homeToTop () {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },

    /*
    * 上拉加载更多
    */
    pullUpLoadMore () {
      this.getHomeGoodsFun(this.nowtype)
    },

    /*
    * 事件监听相关
    */
    tabClick (index) {
      if (index === 0) {
        this.nowtype = 'pop'
      } else if (index === 1) {
        this.nowtype = 'new'
      } else if (index === 2) {
        this.nowtype = 'sell'
      }
    },
    watchScroll (position) {
      if (-position.y < 1000) {
        this.isShowToTop = false
      } else {
        this.isShowToTop = true
      }
    }
  }
}
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
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

.wrapper{
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
  overflow: hidden;
}
</style>
