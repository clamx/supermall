<template>
  <swiper class="de-swiper">
    <swiper-item v-for="item in topImages">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  export default {
    name: "detailSwiper",
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      topImages:{
        Array,
        default:[]
      }
    }
  }
</script>

<style scoped>

 .de-swiper{
   height: 280px;
   overflow: hidden;
 }
</style>
