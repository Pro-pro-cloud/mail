<template>
  <div class="detail-swiper">
    <swiper>
      <swiper-item v-for="(item,index) in topImage" :key="index" class="swiper-item">
        <img :src="'https:'+item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import Swiper from '../../../components/swiper/Swiper.vue'
import SwiperItem from '../../../components/swiper/SwiperItem.vue'

export default {
  components: { Swiper, SwiperItem },
  name: 'detailSwiper',
  props: {
    topImage: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>
.swiper-item {
  height: 300px;
  overflow: hidden;
}

</style>
