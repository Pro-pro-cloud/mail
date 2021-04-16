<template>
      <tabbar>
      <TabbarItem path="/home">
        <img slot="item-icon" src="../../../assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="../../../assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </TabbarItem>
      <TabbarItem path="/categery">
        <img slot="item-icon" src="../../../assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="../../../assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </TabbarItem>
      <TabbarItem path="/cart">
        <img slot="item-icon" src="../../../assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="../../../assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </TabbarItem>
      <TabbarItem path="/profile">
        <img slot="item-icon" src="../../../assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="../../../assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </TabbarItem>
    </tabbar>
</template>

<script>
import Tabbar from '../../common/tabbar/Tabbar'
import TabbarItem from '../../common/tabbar/TabbarItem'
export default {
  name: 'MainTabbar',
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>
