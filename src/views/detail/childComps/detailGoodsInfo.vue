<template>
  <div v-if="Object.keys(deGoodsInfo).length!==0" class="detail-goods-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{deGoodsInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-list" v-for="item in deGoodsInfo.detailImage">
      <div class="info-key">
        {{item.key}}
      </div>
      <div v-for="(item,index) in item.list">
        <img :src="item" :key=index alt="" @load="imgLoad">
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "detailGoodsInfo",
    props:{
      deGoodsInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return {
        counter:0
      }
    },
    methods:{
      imgLoad(){
        /*if(++this.counter === this.imageLength)*/
        this.$emit('imageLoad')
      }
    }
    /*
    watch:{
      deGoodsInfo(){
        this.imageLength = this.deGoodsInfo.detailImage[0].list.length
      }
    }*/
  }
</script>

<style scoped>
  .detail-goods-info{
    margin-top: 30px;
    padding-bottom: 30px;
    border-bottom: 6px solid #f2f5f8;
  }
  .info-desc{
    font-size: 14px;
    padding: 0 10px;
  }
  .start,
  .end{
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }
  .start{
    float:left;
  }
  .end{
    float:right
  }
  .start::before,
  .end::after{
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }
  .end::after{
    right: 0;
  }
  .desc{
    padding: 10px 20px;
  }
  .info-key{
    font-size: 15px;
    padding: 10px 25px;
    color: #333;
  }
  .info-list img{
    width: 100%;
  }
</style>
