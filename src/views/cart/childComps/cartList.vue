<template>
  <div id="cartL">
    <cartListItem :cart-list="cartList"></cartListItem>
  </div>
</template>

<script>
  import cartListItem from "./cartListItem"
  export default {
    name: "cartList",
    components:{
      cartListItem
    },
    computed:{
      cartList(){
        return this.$store.state.cartList
      }
    }
  }
</script>

<style lang="less" scoped>
  #cartL{

  }
</style>
