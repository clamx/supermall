<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="var(--color-text)">
      <img slot="item_icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item_icon_active" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="item_text">主页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="var(--color-text)">
      <img slot="item_icon" src="~assets/img/tabbar/category.svg" alt="">
      <img slot="item_icon_active" src="~assets/img/tabbar/category_active.svg" alt="">
      <div slot="item_text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="var(--color-text)">
      <img slot="item_icon" src="~assets/img/tabbar/cart.svg" alt="">
      <img slot="item_icon_active" src="~assets/img/tabbar/cart_active.svg" alt="">
      <div slot="item_text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="var(--color-text)">
      <img slot="item_icon" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="item_icon_active" src="~assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item_text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import tabBar from "components/common/tabBar/tabBar";
import tabBarItem from "components/common/tabBar/tabBarItem";

export default {
  name: "MainTabBar",
  components: {
    tabBar,
    tabBarItem
  }
}
</script>

<style scoped>

</style>
