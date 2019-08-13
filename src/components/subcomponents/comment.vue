<template>
  <div class="cmt-container">
    <h3>发布评论</h3>
    <hr />
    <textarea name id cols="20" rows="3" placeholder="请输入要BB的内容（最多吐槽120字）" maxlength="120"></textarea>

    <mt-button type="primary" size="large" style="margin-bottom:5px">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;发表时间：2017-07-07 22:22:22</div>
        <div class="cmt-body">锄禾日当午</div>
      </div>
      <div class="cmt-item">
        <div class="cmt-title">第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;发表时间：2017-07-07 22:22:22</div>
        <div class="cmt-body">汗滴禾下土</div>
      </div>
      <div class="cmt-item">
        <div class="cmt-title">第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;发表时间：2017-07-07 22:22:22</div>
        <div class="cmt-body">谁知盘中餐</div>
      </div>
      <div class="cmt-item">
        <div class="cmt-title">第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;发表时间：2017-07-07 22:22:22</div>
        <div class="cmt-body">粒粒皆辛苦</div>
      </div>
    </div>
    <mt-button plain type="danger" size="large">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui' 

export default {
    data(){
        return {
            // pageIndex:1,//默认展示第一页数据
            // comments:[]//所有的评论数据
        }
    },
    methods:{
        // getComments(){
        //     this.$http.get('api/getcomments/'+this.id+"?pageindex="+this.pageIndex).then(result=>{
        //         if(result.body.status===0){
            // 老数据拼接新数据
        //             this.comments = this.comments.concat(result.body.message);
        //         }else{
        //             Toast("获取评论失败！")
        //         }
        //     })
        // }，
        getMore(){
            this.pageIndex++;
            this.getComments();
        }
    }
};
</script>

<style lang="scss">
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    margin-bottom: 0;
    font-size: 14px;
  }
  .cmt-list {
    .cmt-title {
      font-size: 12px;
      background-color: #ccc;
      line-height: 30px;
    }
    .cmt-body {
      font-size: 14px;
      text-indent: 2em;
      line-height: 35px;
    }
  }
}
</style>