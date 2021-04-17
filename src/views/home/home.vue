<template>
  <div id="home">
    <navbar class="home-nav"><div slot="center">购物街</div></navbar>
  </div>
</template>

<script>
import Navbar from '../../components/common/navbar/navbar'
import { getHomeMultidata } from '../../network/home'

export default {
  name: 'Home',
  components: {
    Navbar
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
</style>
