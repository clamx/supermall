<template>
  <div v-if="Object.keys(CommentInfo).length!==0" class="commentInfo">
    <div class="comment-top">
      <span>用户评价</span>
      <span class="right">更多</span>
    </div>
    <div class="comment-content" v-if="CommentInfo.list">
      <div v-if="CommentInfo.list">
        <img :src="CommentInfo.list[0].user.avatar" class="userImg" alt="">
        <span class="userName">{{CommentInfo.list[0].user.uname}}</span>
      </div>
      <div v-if="CommentInfo.list" class="comment-text">{{CommentInfo.list[0].content}}</div>
      <div v-if="CommentInfo.list" class="commentTime">
        <span class="date-time">{{CommentInfo.list[0].created | showDate}}</span>
        <span>{{CommentInfo.list[0].style}}</span>
      </div>
      <img v-for="(item,index) in CommentInfo.list[0].images" :src="item" :key="index" class="comment-img" alt="">
    </div>
  </div>
</template>

<script>
  import {formatDate} from "common/utils";

  export default {
    name: "detailCommentInfo",
    props:{
      CommentInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    filters:{
      showDate(value){
        let date = new Date(value*1000)
        return formatDate(date,'yyyy-MM-dd hh:mm')
      }
    }
  }
</script>

<style scoped>
  .commentInfo{
    margin-top: 10px;
    border-bottom: 6px solid #ececec;
  }
  .comment-top{
    font-size: 13px;
    position: relative;
    padding: 20px 10px;
    border-bottom: 1px solid #f2f5f8;
    color: #333;

  }
  .right{
    position: absolute;
    right:10px;
  }
  .comment-content{
    padding: 10px 10px;
  }
  .userImg{
    width: 30px;
    height: 30px;
    border-radius: 100%;
    vertical-align: middle;
  }
  .userName{
    color: #333;
    font-size: 13px;
    height: 40px;
    line-height: 40px;
    padding-left: 5px;
  }
  .comment-text{
    font-size: 12px;
    padding: 10px 0;
    line-height: 1.5em;
    color: #777;;
  }
  .commentTime{
    font-size: 11px;
    color:#999;
  }
  .date-time{
    padding-right: 5px;
  }
  .comment-img{
    padding: 10px 0;
    width: 70px;
    height: 70px;
    padding-left: 5px;
  }
</style>
