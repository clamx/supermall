<template>
  <div class="goods-list">
        <goods-list-item v-for="item in goods" :goodsItem="item"></goods-list-item>
  </div>
</template>

<script>
  import goodsListItem from "./goodsListItem";
  export default {
    name: "goodsList",
    components:{
      goodsListItem
    },
    props:{
      goods:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding:0 2px;
  }
</style>
