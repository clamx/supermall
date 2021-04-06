<template>
  <div v-if="Object.keys(itemParams).length!==0" class="detail-params-info">
      <div v-for="item in itemParams.rule.tables">
        <div v-for="(list,index) in item" class="list">
          <div v-for="(listItem,index) in list" class="list-item">
            {{listItem}}
          </div>
        </div>
      </div>
    <div>
      <div v-for="(item,index) in itemParams.info.set" :key="index" class="info-list-wrap">
        <div class="info-list-tit">{{item.key}}</div>
        <div class="info-list-tit list-tit-color">{{item.value}}</div>
      </div>
    </div>
    <div class="info-img" v-if="itemParams.info.images">
      <img :src="itemParams.info.images[0]" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailParamInfo",
    props:{
      itemParams:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detail-params-info{
    margin-top: 20px;
    padding:20px 8px;
    font-size: 12px;
    border-bottom: 6px solid #f2f5f8;
  }
  .list{
    display: flex;
  }
  .list-item,
  .info-list-tit{
    flex: 1;
    padding-bottom: 10px;
    border-bottom: 1px solid #ececec;
    margin-bottom: 10px;
  }
  .info-list-wrap{
    display: flex;
  }
  .list-tit-color{
    color: var(--color-high-text)
  }
  .info-img img{
    width: 100%;
  }
</style>
