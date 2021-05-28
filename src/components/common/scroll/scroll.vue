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
    },
    pullUpLoad: {
      type: Boolean,
      default: false
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
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })

    /*
    * 滚动监听
    */
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on('scroll', (position) => {
        this.$emit('watchScroll', position)
      })
    }

    /*
    * 上拉监听
    */
    if (this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {
        this.$emit('pullUp')
      })
    }
  },
  methods: {
    scrollTo (x, y, time = 300) {
      this.scroll.scrollTo(x, y, time)
    },
    finishPullUp () {
      this.scroll.finishPullUp()
    }
  }
}
</script>
