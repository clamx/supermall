<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div  slot="center">潮流街</div>
    </nav-bar>
    <tab-control
      :titles="['流行','新款','精选']"
      ref="tabControl2"
      @tabClick="tabClick"
      class="tab-control"
      v-show="isShowTabControl">
    </tab-control>
    <BScroll class="content"
             ref="scroll"
             :probe-type="3"
             @scroll="contentScroll"
             :pullUpLoad="true"
             @pullingUp="lazyMore">
      <home-swiper :banners="banners" @swiperImageHeight="swiperImageHeight"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="['流行','新款','精选']" ref="tabControl" @tabClick="tabClick"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </BScroll>
    <backTop @click.native="backClick" v-show="isShowBackTop"></backTop>
  </div>

</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from './childComps/FeatureView'
import TabControl from "components/content/tabControl/TabControl";
import goodsList from "components/content/goods/goodsList";
import BScroll from 'components/common/bscroll/BScroll'
import {getHomeMultidata,getHomeGoods} from "network/home";
import {itemListenerMixin,backTopMixin} from "common/mixins.js"

export default {
    name: "home",
    components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      goodsList,
      BScroll
    },
    data(){
      return {
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        currentType:'pop',
        isShowTabControl:false,
        tabOffsetTop:null,
        saveY:0
      }
    },
    mixins:[itemListenerMixin,backTopMixin],
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    created() {
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    destroyed(){
      console.log('destroyed');
    },
    activated() {
      // console.log('jinliale')
      this.$refs.scroll.refresh()
      this.$refs.scroll.scrollTo(0,this.saveY,100)

    },
    deactivated() {
      this.saveY = this.$refs.scroll.getScrollY()
      console.log(this.saveY)
      this.$bus.$off('imageRefresh',this.itemImgListener)
    },
    mounted() {

    },
    methods:{
      tabClick(index){
        switch (index){
          case 0: this.currentType='pop'
          break
          case 1: this.currentType='new'
          break
          case 2:this.currentType='sell'
          break
        }
        this.$refs.tabControl.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },

      contentScroll(position){
        /*console.log(position);*/
        this.isShowBackTop= (-position.y) > 1000
        this.isShowTabControl = (-position.y)>this.tabOffsetTop
      },
      lazyMore(){
        this.getHomeGoods(this.currentType)
      },
      swiperImageHeight(){
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
      },
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page+1
        getHomeGoods(type,page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page= this.goods[type].page+1
          this.$refs.scroll.finishPullUp()
          /*console.log(res);*/
        })
      }
    }
}
</script>

<style scoped>
  #home{
    height: 100vh;
    position: relative;
  }
  .home-nav{
    color:#fff;
    background-color: var(--color-text);
    vertical-align: center;
    /*position: fixed;
    left:0;
    right:0;
    top:0;
    z-index: 9;*/
  }
  .tab-control{
    position: relative;
    z-index: 9;
  }
  .content{
    overflow: hidden;
    position: absolute;
    top:40px;
    bottom: 49px;
    left:0;
    right:0;
  }
</style>
