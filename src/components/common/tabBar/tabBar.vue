<template>
<div class="tabbar">
  <slot></slot>
</div>
</template>

<script>
import tabBarItem from "./tabBarItem";
export default {
name: "tabBar",
  components:{tabBarItem}
}
</script>

<style scoped>
.tabbar{
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  box-shadow: 0 -1px 1px rgba(100,100,100,.2);
}
</style>
