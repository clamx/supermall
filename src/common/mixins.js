import {debounce} from "common/utils.js"
import backTop from "components/content/backtop/backTop";
export const itemListenerMixin = {
  data(){
    return {
      itemImgListener:null,
      newRefresh:null
    }
  },
  mounted(){
    this.newRefresh = debounce(this.$refs.scroll.refresh,500)
    this.itemImgListener = ()=>{
      this.newRefresh()
    }
    this.$bus.$on('imageRefresh',this.itemImgListener)
  }
}

export const backTopMixin = {
  components:{
    backTop
  },
  data(){
    return{
      isShowBackTop:false
    }
  },
  methods:{
    backClick(){
      this.$refs.scroll.scrollTo(0,0,200)
    }
  }
}
