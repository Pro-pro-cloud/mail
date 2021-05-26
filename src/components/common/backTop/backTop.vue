<template>
  <div class="backTop">
    <img src="../../../assets/img/common/top.png" alt="" @click="toTop">
  </div>
</template>

<script>
export default {
  name: 'backTop',
  methods: {
    toTop () {
      this.$emit('backToTop')
    }
  }
}
</script>

<style scoped>
  .backTop {
    position: fixed;
    right: 13px;
    bottom: 53px;
  }
  .backTop img {
    height: 43px;
    width: 43px;
  }
</style>
