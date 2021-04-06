<template>
  <div class="cartBotBar">
    <div class="cartBotLeft">
      <checkBox class="check-box"
                :is-checked="isSelectAll"
                @click.native="selectClick"></checkBox>
      <span>全选</span>
    </div>
    <div class="cartBotRight">
      <span>合计：</span>
      <span class="calculate">￥{{totalPrice}}</span>
      <button class="buy" type="submit">结算({{buyGoodsCount}})</button>
    </div>
  </div>
</template>

<script>
  import checkBox from "components/content/checkbox/checkBox";
  import {mapGetters} from "vuex"
  export default {
    name: "cartBotBar",
    components:{
      checkBox
    },
    computed:{
      ...mapGetters(['cartList']),
      totalPrice(){
        return this.cartList.filter(item =>{
          return item.checked
        }).reduce((preV,item) => {
          return preV + item.realPrice * item.count
        },0).toFixed(2)
      },
      buyGoodsCount(){
        return this.cartList.filter(item => {
          return item.checked
        }).length
      },
      isSelectAll(){
        if(this.cartList.length === 0) return false
        return !this.cartList.find(item => !item.checked)
      }
    },
    methods:{
      selectClick(){
        if(this.isSelectAll){
          return this.cartList.forEach(item => item.checked = false)
        }
        else {
          return this.cartList.forEach(item => item.checked = true)
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .cartBotBar{
    border-top: 1px solid #f2f5f8;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    height: 45px;
    background-color: #fff;
    .cartBotLeft{
      display: flex;
      line-height: 40px;
      .check-box{
        margin: 6px 5px 0 10px;
      }
    }
    .cartBotRight{
      font-size: 14px;
      margin-top: 2.5px;
      span{
        margin-right: 5px;
      }
      .buy{
        font-size: 14px;
        margin-right: 10px;
        width: 80px;
        height: 36px;
        line-height: 36px;
        border-radius: 25px;
        background-color: #f40;
        border: none;
        color: #fff;
      }
      .calculate{
        color: #f40;
      }
    }
  }
</style>
