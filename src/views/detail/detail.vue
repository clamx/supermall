<template>
  <div id="detail">
    <detailNavBar ref="detailNav" class="detail-nav-bar" @titleClick="detailNavGetHeight"/>
    <BScroll class="content"
             ref="scroll"
             :probeType=3
             @scroll="contentScroll">
      <detailSwiper :topImages="topImages">{{topImages}}</detailSwiper>
      <detailBaseInfo :goods="goods"/>
      <dataShopInfo :shopInfo="shopInfo"/>
      <detailGoodsInfo :deGoodsInfo="goodsInfo" @imageLoad="imageLoad"/>
      <detailParamInfo ref="paramsHeight" :itemParams="itemParams"/>
      <detailCommentInfo ref="commentHeight" :CommentInfo="CommentInfo"/>
      <goodsList ref="goodsListHeight" :goods="RecommendInfo" class="goodsRecommend"/>
    </BScroll>
    <backTop @click.native="backClick" v-show="isShowBackTop"></backTop>
   <!-- <div :class="{addSuccess:active}" v-show="active" >
      <img src="~assets/img/home/detail/addToCart.svg" alt="">
      <span>添加成功，在购物车等亲~</span>
    </div>-->
    <detailBottomNav
      ref="getDa"
      :shopInfo="shopInfo"
      :cartInfo="goods"
      :cartSize="itemParams"
      :cartImg="topImages"
      @addToCart="addToCart"/>
  </div>
</template>

<script>
  import detailNavBar from "./childComps/detailNavBar";
  import detailSwiper from "./childComps/detailSwiper";
  import detailBaseInfo from "./childComps/detailBaseInfo";
  import dataShopInfo from "./childComps/dataShopInfo";
  import BScroll from "components/common/bscroll/BScroll";
  import detailGoodsInfo from "./childComps/detailGoodsInfo";
  import detailParamInfo from "./childComps/detailParamInfo";
  import detailCommentInfo from "./childComps/detailCommentInfo";
  import goodsList from "components/content/goods/goodsList";
  import detailBottomNav from "./childComps/detailBottomNav"
  import {itemListenerMixin,backTopMixin} from "common/mixins.js"
  import {debounce} from "common/utils.js"
  import {getHomeDetails,goodsInfo,shopInfo,getRecommend} from "network/detail";

  export default {
    name: "detail",
    data(){
      return {
        iid:null,
        topImages: [],
        goods: {},
        shopInfo: {},
        goodsInfo: {},
        counter:0,
        itemParams: {},
        CommentInfo:{},
        RecommendInfo:[],
        themeTopYs:[],
        getThemeY:null,
        currentIndex:0,
        active:false
      }
    },
    mixins:[itemListenerMixin,backTopMixin],
    components:{
      detailNavBar,
      detailSwiper,
      detailBaseInfo,
      dataShopInfo,
      BScroll,
      detailGoodsInfo,
      detailParamInfo,
      detailCommentInfo,
      goodsList,
      detailBottomNav
    },
    mounted() {

    },
    destroyed() {
      this.$bus.$off('imageRefresh',this.itemImgListener)
    },
    created() {
      this.iid = this.$route.query.iid
      getHomeDetails(this.iid).then(res => {
        console.log(res);
        const data = res.result
        this.topImages = data.itemInfo.topImages
        this.goods = new goodsInfo(data.itemInfo,data.columns,
          data.shopInfo.services,data.skuInfo)
        this.shopInfo = new shopInfo(data.shopInfo)
        this.goodsInfo = data.detailInfo
        this.itemParams = data.itemParams
        this.CommentInfo = data.rate
      })
      getRecommend().then(res => {
        console.log(res);
        this.RecommendInfo = res.data.list
      })
      this.getThemeY = debounce(()=>{
        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.paramsHeight.$el.offsetTop)
        this.themeTopYs.push(this.$refs.commentHeight.$el.offsetTop)
        this.themeTopYs.push(this.$refs.goodsListHeight.$el.offsetTop)
        console.log(this.themeTopYs)
      },200)
    },
    methods:{
      imageLoad(){
        this.newRefresh()
        this.getThemeY()
      },
      detailNavGetHeight(index){
        console.log(index)
        this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
      },
      contentScroll(position){
        this.isShowBackTop= (-position.y) > 1000
        const positionY = -position.y
        const length = this.themeTopYs.length
        for(let i=0; i<length;i++){
          if(this.currentIndex !== i && (i < this.themeTopYs.length-1 &&
            this.themeTopYs[i] <= positionY && this.themeTopYs[i+1] > positionY ||
            i === this.themeTopYs.length-1 && this.themeTopYs[i] <= positionY)){
            this.currentIndex = i
            console.log(this.currentIndex)
            this.$refs.detailNav.currentIndex  = this.currentIndex
          }
        }
      },
      addToCart(){
        this.active = true
        const product = {}
        product.shopImages = this.topImages[0]
        product.shopName = this.shopInfo.name
        product.size = this.goods.clothesParams[0].list.name
        product.title = this.goods.title
        product.realPrice = this.goods.realPrice
        product.iid = this.iid
        product.size = this.$refs.getDa.getSize
        product.color = this.$refs.getDa.getColor
        product.count = this.$refs.getDa.value
        /*console.log(product.count);*/
        this.$store.dispatch('addCart',product).then(res=>{
          console.log(res)
        })
        // if(this.active){
        //   setTimeout("{this.active = false;" +
        //     "console.log(this.active)}",5000)
        // }
      /*  console.log(this.active)
        console.log('--');*/
      }
    }
  }
</script>

<style lang="less" scoped>
  #detail{
    position: relative;
    background-color: #fff;
    z-index: 9;
    height: 100vh;
  }
  .addSuccess{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-110px,-80px);
    width: 220px;
    height: 50px;
    line-height: 50px;
    color: #fff;
    font-size: 14px;
    background-color: rgba(0,0,0,.7);
    text-align: center;
    z-index: 99;
    border-radius: 8px;
    img{
      width: 15px;
      height: 15px;
      margin-right: 8px;
      vertical-align: middle;
    }
  }
  .content{
    overflow: hidden;
    position: absolute;
    top:40px;
    bottom: 49px;
    left:0;
    right:0;
  }
  .goodsRecommend{
    margin-top: 20px;
  }
</style>
