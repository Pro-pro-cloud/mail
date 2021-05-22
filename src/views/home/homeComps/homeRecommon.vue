
<template>
  <div class="recommend">
    <div v-for="(item,index) in recommend" :key="index" class="recmmend-item">
      <a :href="item.link">
        <img :src="item.image" width="60%"/>
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeRecommon',
  props: {
    recommend: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .recommend{
    display: flex;
    text-align: center;
    width: 100%;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }
  .recommend-item {
    flex: 1;
    width: 100%;
  }
  .recommend-item img{
    margin-top: 10px;
  }
</style>
