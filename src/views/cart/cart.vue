<template>
   <div id="cart">
     <NavBar class="cartNav">
       <div slot="center">购物车({{cartLength}})</div>
     </NavBar>
     <BScroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
       <cartList class="cartList"/>
     </BScroll>
     <cartBotBar class="cartBottom"></cartBotBar>
   </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import {mapGetters} from "vuex";
  import cartList from "./childComps/cartList";
  import cartBotBar from "./childComps/cartBotBar";
  import BScroll from "components/common/bscroll/BScroll";
  export default {
    name: "cart",
    components:{
      NavBar,
      cartList,
      BScroll,
      cartBotBar
    },
    computed:{
      ...mapGetters(['cartLength'])
    },
    methods:{
      contentScroll(){
        this.$refs.scroll.refresh()
      }
    }
  }
</script>

<style lang="less" scoped>
  #cart{
    height: 100vh;
    .cartNav{
      background-color: var(--color-high-text);
      color: #fff;
    }
    .content{
      height: calc(100% - 135px);
      overflow: hidden;
    }
    .cartBottom{
      position: fixed;
      bottom: 49px;
      left: 0;
      right: 0;
    }
  }

</style>
