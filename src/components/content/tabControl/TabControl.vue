<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) in titles"
         :class='{active:index === currentIndex}' @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currentIndex:0
    }
  },
  methods:{
    itemClick(index){
       this.currentIndex = index
       this.$emit('tabClick',index)
    }
  }
}
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    /*position: sticky;*/
    /*top: 40px;*/
    background-color: #fff;
    z-index: 9;
  }
  .tab-control-item{
    flex: 1;
  }
  .tab-control-item span{
    padding: 4px 5px;
  }
  .active{
    color:var(--color-text);
  }
  .active span{
    border-bottom: 3px solid var(--color-text);
  }
</style>
