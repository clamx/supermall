<template>
  <div v-if="Object.keys(goods)!==0" class="baseInfo" >
    <div class="info-Title">
      {{goods.title}}
    </div>
    <div class="info-price">
      <span class="n-price">{{goods.price}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="info-discount">{{goods.discount}}</span>
    </div>
    <div class="info-other" v-if="goods.columns">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div v-if="goods.services" class="info-services">
      <span v-for="index in goods.services.length-1" :key="index" class="servicesContent">
        <img v-if="goods.services[index-1].icon" :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailBaseInfo",
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .baseInfo{
    padding: 0 5px;
  }
  .info-Title{
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #222;
    line-height: 20px;
  }
  .n-price{
    font-size: 16px;
    color: var(--color-high-text);
    margin-right: 10px;
  }
  .o-price{
    font-size: 12px;
    color: #999;
    text-decoration: line-through;
    margin-right: 10px;
  }
  .info-discount{
    background-color: var(--color-high-text);
    color: #f2f5f8;
    border-radius: 8px;
    padding: 2px 4px;
    font-size: 12px;
    position: relative;
    top:-5px;
  }
  .info-other{
    display: flex;
    font-size: 12px;
    color: #999;
    justify-content: space-between;
    margin-top: 15px;
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .info-other span{
    margin-bottom: 8px;
  }
  .info-services{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #333;
    padding: 20px 5px;
  }
  .servicesContent img{
    width: 12px;
    height: 12px;
    vertical-align: middle;
    padding: 2px 2px;
  }
</style>
