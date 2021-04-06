<template>
  <div class="detail-bottom-nav">
    <div class="bottomLeft">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bottomRight">
      <div class="cart" @click="showPopup">加入购物车</div>
      <van-popup  v-model="show"
                  closeable
                  close-icon="close"
                  position="bottom"
                  :style="{ height: '90%' }">
        <div class="cartParams" v-if="Object.keys(cartInfo)!==0">
          <div class="cartShopInfo" >
            <img :src="cartImg[0]" alt="">
            <span v-if="!(sizeSelected && colorSelected)">{{cartInfo.rangePrice}}</span>
            <span v-else >￥{{cartInfo.realPrice}}</span>
          </div>
          <div class="areaScroll">
            <div class="goodsSize" v-if="cartInfo.clothesParams">
              <span class="Name">尺码</span>
              <span class="selectSize"
                    v-for="(item,index) in cartInfo.clothesParams[1].list"
                    :key=index
                    @click="addToCartSize(index,item.name)"
                    :class="{sizeSeleced:ScurrentIndex === index}">
                    {{item.name}}
              </span>
            </div>
            <div class="goodsColor" v-if="cartInfo.clothesParams">
              <span class="Name">颜色</span>
              <span class="selectSize"
                    v-for="(item,index) in cartInfo.clothesParams[0].list"
                    :key=index
                    @click="addToCartColor(index,item.name)"
                    :class="{sizeSeleced:CcurrentIndex === index}">
                    {{item.name}}
              </span>
            </div>
            <div class="buyCount">
              <span>购买数量</span>
              <van-stepper v-model="value" integer class="counter"/>
            </div>
          </div>

          <van-button class="ok"
                      type="submit"
                      round
                      @click="addToCart">
            确定
          </van-button>
        </div>
      </van-popup>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
 import {Popup,Button,Cell, Stepper,Toast} from "vant";
  export default {
    name: "detailBottomNav",
    components:{
      [Popup.name] : Popup,
      [Button.name] : Button,
      [Cell.name] : Cell,
      [Stepper.name] : Stepper,
      [Toast.name] : Toast
    },
    data(){
      return {
        show:false,
        value:1,
        Sactive:false,
        Cactive:false,
        ScurrentIndex:null,
        CcurrentIndex:null,
        sizeSelected:false,
        colorSelected:false,
        getSize:null,
        getColor:null
      }
    },
    props:{
      shopInfo:{
        type:Object,
        default(){
          return {}
        }
      },
      cartInfo:{
        type:Object,
        default() {
          return {}
        }
      },
      cartSize:{
        type:Object,
        default() {
          return {}
        }
      },
      cartImg:{
        type:Array,
        default() {
          return []
        }
      }
    },
    methods:{
      showPopup(){
        this.show = true
      },
      addToCartSize(index,size){
        this.getSize = size
        this.ScurrentIndex = index
        this.sizeSelected = true
      },
      addToCartColor(index,color){
        this.getColor = color
        this.CcurrentIndex = index
        this.colorSelected = true
      },
      addToCart(){
        if(this.sizeSelected && this.colorSelected){
          this.show = false
          this.$emit('addToCart')
          Toast('添加成功，在购物车等亲~')
        }else{
          this.sizeSelected = false
          this.colorSelected = false
          Toast('请选择尺寸和颜色')
        }
      }

    }
  }
</script>

<style lang="less" scoped>
  .detail-bottom-nav{
    position: fixed;
    bottom: 0;
    left:0;
    right:0;
    background-color: #fff;
    display: flex;
    height: 49px;
    text-align: center;
    font-size: 13px;
  }
  .bottomLeft,
  .bottomRight{
    flex:1;
    display: flex;
    >div{
      flex: 1;
    }
  }
  .bottomLeft{
    .icon{
      display: block;
      width: 44px;
      height: 44px;
      margin: 12px auto 5px;
      background: url('~assets/img/home/detail/detail_bottom.png') 0 0/100%;
      zoom:0.5;
      -moz-transform:scale(0.5);
      -moz-transform-origin: 0 0;
    }
    .service{
      background-position: 0 -106px;
    }
    .shop{
      background-position: 0 -198px;
    }
    .select{
      background-position: -3 -2px;
    }
  }
  .cart{
    background-color: orange;
    color: #fff;
    line-height: 49px;
  }
  .buy{
    background-color: #f40;
    color: #fff;
    line-height: 49px;
  }
  .cartParams {
    margin: 15px;
    .cartShopInfo {
      display: flex;
      justify-content: left;
      padding-bottom: 15px;
      border-bottom: 1px solid #f2f5f8;
    }
    .cartShopInfo img {
      width: 20%;
      height: 20%;
    }
    .cartShopInfo span {
      margin-top: 10px;
      margin-left: 20px;
      color: red;
      font-size: 22px;
    }
    .goodsSize,
    .goodsColor{
      margin-top: 10px;
      border-bottom: 1px solid #f2f5f8;
      padding-bottom: 15px;
      .sizeSeleced{
        border: 1px solid #f40;
        color: #f40!important;
      }
    }
    .goodsSize .Name ,
    .goodsColor .Name,
    .buyCount{
      font-size: 15px;
      color: #333;
      display: flex;
      justify-content: left;
    }
    .goodsSize .selectSize,
    .goodsColor .selectSize{
      display: inline-block;
      background-color: #f2f5f8;
      margin: 10px 4px;
      color: #333;
      width: auto;
      height: 30px;
      line-height: 30px;
      padding: 0 15px;
      border-radius: 5px;
      font-size: 13px;
      box-sizing: border-box;
      -moz-box-sizing: border-box;
    }

    .ok{
      position: absolute;
      left:15px;
      bottom: 30px;
      width: calc(100% - 30px);
      height: 44px;
      background-color: #f40;
      color: #fff;
      font-size: 18px;
      border:none;

    }
    .buyCount{
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
    }
    .areaScroll{
      width: 100%;
      height: 100vh-44px;
      overflow-x: hidden;
      overflow-y: scroll;
      &::-webkit-scrollbar{
        display: none;
      }
    }
  }
</style>
