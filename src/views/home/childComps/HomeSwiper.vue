<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageHeight">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index'

  export default {
    name: "HomeSwiper",
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      banners:{
        type:Array,
        default(){
          return []
        },
        isImage:false
      }
    },
    methods:{
      imageHeight(){
        if(!this.isImage){
          this.$emit('swiperImageHeight')
          this.isImage = true
        }

      }
    }
  }
</script>

<style scoped>

</style>
