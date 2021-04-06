<template>
  <div id="cartListItem">
    <div v-for="(item,index) in cartList" :key="index" class="cartItem">
      <div class="item">
        <span class="shopImg"></span>
        <span class="shopName">{{item.shopName}}</span>
      </div>
      <div class="itemContent flex">
        <div class="flex itemLeft">
          <checkBox class="check"
                    :is-checked="item.checked"
                    @click.native="checkClick(index)"></checkBox>
          <img :src="item.shopImages" >
        </div>
        <div class="itemRight">
          <div class="itemContentTop">
            <p>{{item.title}}</p>
            <div>
              <span>{{item.color}}</span>
              <span>{{item.size}}</span>
            </div>
          </div>
          <div class="itemContentBottom">
            <span class="price">￥{{item.realPrice}}</span>
            <van-stepper v-model="item.count" integer class="count"></van-stepper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Stepper,Checkbox} from "vant"
  import checkBox from "components/content/checkbox/checkBox";
  export default {
    name: "cartListItem",
    components:{
      [Stepper.name] : Stepper,
      [Checkbox.name] : Checkbox,
      checkBox
    },
    data(){
      return{
        result:['index']
      }
    },
    props:{
      cartList:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      checkClick(index){
        this.cartList[index].checked = !this.cartList[index].checked
      }
    }
  }
</script>

<style lang="less" scoped>
 #cartListItem{
   .cartItem{
     margin: 5px 5px;
     width: auto;
     height: 140px;
     border-bottom: 1px solid #eee;
     &:last-child{
     border: none;
   }
   }
   .item{
     .shopImg{
       display: inline-block;
       width: 44px;
       height: 44px;
       zoom: 0.5;
       -moz-transform:scale(0.5);
       -moz-transform-origin: 0 0;
       background: url('~assets/img/home/detail/detail_bottom.png') 0 0/100%;
       background-position: 0 -198px;
       margin: 10px 6px 15px 0;
       vertical-align: middle;
     }
     .shopName{
       font-size: 14px;
       color: #333;
     }
   }
  .itemContent{
    justify-content: left;
    .itemLeft{
      width: 88px;
      height: 87px;
      padding: 4px;
      .check{
        margin-top: 33.5px;
      }
      img{
        width: 58px;
        height: 87px;
        overflow: hidden;
        border-radius: 5px;
        margin-left: 10px;
      }
    }
    .itemRight{
      margin-left: 25px;
      height: 95px;
      overflow: hidden;
      p{
        display: block;
        padding-top: 5px;
        font-size: 13px;
        color: #333;
        white-space: nowrap;
        width: auto;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-bottom: 5px;
      }
    }
    .itemContentTop span{
      font-size: 13px;
      color: #ccc;
    }
    .itemContentBottom{
      position: relative;
      padding-top: 24px;
    }
    .price,
    .count{
      display: inline-block;
      font-size: 16px;
    }
    .price{
      color: #f40;
    }
    .count{
      position: absolute;
      right: 10px;
      color: #333;
      margin-left: 80px;
    }
  }
 }
</style>
