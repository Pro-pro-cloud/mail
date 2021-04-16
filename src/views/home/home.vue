<template>
  <div id="home">
    <navbar class="home-nav"><div slot="center">购物街</div></navbar>
  </div>
</template>

<script>
import Navbar from '../../components/common/navbar/navbar'

export default {
  name: 'Home',
  components: {
    Navbar
  }
}
</script>

<style scoped>
.home-nav{
  background-color: var(--color-tint);
  color: white;
}
</style>
