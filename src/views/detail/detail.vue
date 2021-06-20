<template>
  <div>
    <detail-navbar></detail-navbar>
    <detail-swiper :topImage="topImage"></detail-swiper>
  </div>
</template>

<script>
import DetailNavbar from './detailCom/detailNavbar.vue'
import DetailSwiper from './detailCom/detailSwiper.vue'

import { getDetailData } from '../../network/datail'
export default {

  name: 'detail',
  data () {
    return {
      iid: null,
      topImage: []
    }
  },
  components: {
    DetailNavbar,
    DetailSwiper

  },
  created () {
    this.iid = this.$route.query.iid
    this.getDetailData(this.iid)
  },
  methods: {
    getDetailData (iid) {
      getDetailData(iid).then(res => {
        this.topImage = res.result.itemInfo.topImages
      })
    }
  }
}
</script>

<style scoped>

</style>
