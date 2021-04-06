<template>
  <div class="de-shopInfo">
    <div class="shop-name-info">
      <img :src="shopInfo.shopLogo" alt="">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="shop-other-info">
      <div class="shop-other-item shop-left">
        <span>
<!--          使用过滤器{{数据属性|过滤器名}}-->
          <p class="sell-goods">{{shopInfo.cSells | sellCountFilter}}</p>
          <p>总销量</p>
        </span>
        <span>
          <p class="sell-goods">{{shopInfo.cGoods}}</p>
          <p>全部宝贝</p>
        </span>
      </div>
      <div class="shop-other-item">
        <div class='shop-other-item-info shop-right' v-for="item in shopInfo.score">
          <span>{{item.name}}</span>
          <span class='score' :class="{active:item.isBetter}">{{item.score}}</span>
          <span class='score-bg' :class="{active:item.isBetter}">{{item.isBetter?'高':'低'}}</span>
        </div>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop-wrap">进店逛逛</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "dataShopInfo",
    props:{
      shopInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    filters:{
      sellCountFilter:function (value){
        if(value<10000) return value
        return (value/10000).toFixed(1)+'万'
      }
    }
  }
</script>

<style lang="less" scoped>
  .de-shopInfo{
    font-size: 12px;
    border-top: 6px solid #f2f5f8;
    border-bottom: 6px solid #f2f5f8;
  }
  .shop-name-info{
    height: 80px;
    padding: 15px 0px;
    margin-left: 5px;
  }
  .shop-name-info img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    vertical-align: middle;
  }
  .shop-name-info span{
    display: inline-block;
    margin-left: 10px;
    line-height: 80px;
  }
  .shop-other-info{
    display: flex;
    align-items: center;
  }
  .shop-other-item{
    flex: 1;
    color:#333;
  }
  .sell-goods{
    padding-bottom: 3px;
  }
  .shop-left{
    display: flex;
    justify-content: space-evenly;
    border-right: 2px solid rgba(100,100,100,.1);
    text-align: center;
  }
  .shop-right{
    padding-top: 3px;
    margin-left: 40px;
  }
  .shop-other-item span{
    display: inline-block;
    margin-right: 5px;
  }
  .score{
    color: #006666;
    &.active{
      color: #880000;
    }
  }
  .score-bg{
    color: #fff;
    background-color: #006666;
    &.active{
      color: #fff;
      background-color: #880000;
    }
  }
  .shop-bottom{
    text-align: center;
  }
  .enter-shop-wrap{
    display: inline-block;
    font-size: 14px;
    margin-top: 25px;
    margin-bottom: 25px;
    width: 150px;
    height: 30px;
    line-height: 30px;
    background-color: #f2f5f8;
    text-align: center;
    border-radius: 10%;
  }
</style>
