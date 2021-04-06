<template>
  <div class="detailNavBar">
    <nav-bar>
      <div class="back" slot="left">
        <img src="~assets/img/home/detail/arrow-left-bold.svg" alt="" @click="backClick">
      </div>
      <div class="title" slot="center" >
        <div class="title-item"
             v-for="(item,index) in title"
             @click="titleClick(index)"
             :class="{active:index===currentIndex}">
          {{item}}
        </div>
      </div>

    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "detailNavBar",
    components:{
      NavBar
    },
    data(){
      return{
        title:['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    methods:{
      titleClick(index){
        this.currentIndex = index
        this.$emit('titleClick',index)
      },
      backClick(){
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .title{
    display: flex;
    font-size: 13px;
  }
  .title-item{
    flex: 1;
  }
  .back img{
    width: 40%;
    height:40%;
    vertical-align: middle;
  }
  .active{
    color: var(--color-high-text);
  }
</style>
