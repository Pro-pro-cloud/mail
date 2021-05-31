<template>
  <div>
    <navbar>
      <div slot="left" @click="backClick">
        <img src="../../../assets/img/common/back.svg" alt="" class="back-img">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" :key="index" class="title-item" :class="{isActive : index === nowIndex}"
        @click="itemClick(index)">{{item}}</div>
      </div>
    </navbar>
  </div>
</template>

<script>
import navbar from '../../../components/common/navbar/navbar.vue'

export default {
  components: { navbar },
  name: 'detailNavbar',
  data () {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      nowIndex: 0
    }
  },
  methods: {
    itemClick (index) {
      this.nowIndex = index
    },
    backClick () {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
  .title {
    display: flex;
  }
  .title-item {
    flex: 1 ;
  }
  .isActive{
    color: var(--color-high-text);
  }
  .back-img{
    margin-top: 11px;
  }
</style>
