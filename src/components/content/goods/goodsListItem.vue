<template>
  <div class="goods-list-item" @click="itemClick">
      <img :src="showImage" alt="" @load="imageLoad">
      <div class="goods-info">
        <p>{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.price}}</span>
        <span class="collect">{{goodsItem.cfav}}</span>
      </div>
  </div>
</template>

<script>
  export default {
    name: "goodsListItem",
    props:{
      goodsItem: {
        type:Object,
        default(){
          return {}
        }
      }
    },
    computed:{
      showImage(){
        return this.goodsItem.image || this.goodsItem.show.img
      }
    },
    methods:{
      imageLoad(){
        this.$bus.$emit('imageRefresh')
      },
      itemClick(){
        // this.$router.push('/detail/'+this.goodsItem.iid)
        this.$router.push({
          path:'/detail',
          query:{
            iid:this.goodsItem.iid
          }
        })
      }
    }
  }
</script>

<style scoped>
  .goods-list-item{
    width: 48%;
    padding-bottom: 44px;
    position: relative;
  }
  .goods-list-item img{
    width: 100%;
    border-radius: 5px;
  }
  .goods-info{
    font-size: 12px;
    position: absolute;
    bottom:5px;
    left:0px;
    right:0px;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding-bottom: 8px;
  }
  .goods-info .price{
    color: var(--color-text);
    margin-right: 30px;
  }
  .goods-info .collect{
    position: relative;
  }
  .goods-info .collect::before{
    content: '';
    position: absolute;
    top:-1px;
    left:-14px;
    width: 12px;
    height: 12px;
    background: url("../../../assets/img/home/icon03.png") 0 0/12px 12px no-repeat;
  }
</style>
