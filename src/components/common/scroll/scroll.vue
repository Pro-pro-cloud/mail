<template>
  <div class="wrapper" ref="wrapper" >
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      scroll: null
    }
  },
  mounted () {
    /*
    * 创建better-scroll 对象
    */
    this.scroll = new BScroll(this.$refs.wrapper, {
      observeDOM: true,
      observeImage: true,
      click: true,
      mouseWheel: true,
      probeType: this.probeType
    })

    /*
    * 滚动监听
    */
    this.scroll.on('scroll', (position) => {
      this.$emit('watchScroll', position)
    })
  },
  methods: {
    scrollTo (x, y, time = 300) {
      this.scroll.scrollTo(x, y, time)
    }
  }
}
</script>
