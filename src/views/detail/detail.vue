<template>
  <div>
    <detail-navbar></detail-navbar>
  </div>
</template>

<script>
import DetailNavbar from './detailCom/detailNavbar.vue'
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
    DetailNavbar

  },
  created () {
    this.iid = this.$route.query.iid

    getDetailData(this.iid).then(res => {
      console.log(res)
      this.topImage = res.result.itemInfo.topImages
    })
  }
}
</script>

<style scoped>

</style>
