<template>
 <div class="cot-coment">
<h3>发表评论</h3>
<hr>
<textarea maxlength="120" placeholder="请输入评论，最多可输入120字"  v-model="msg"></textarea>
 <button type="button" class="mui-btn mui-btn-primary mui-btn-block" @click="postComment" >发表评论</button>
 <div>
 <div class="item-list" v-for="(item,i) in commentList" :key="item.add_time">
     <div class="item-title">
         第{{i+1}}楼 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;发表时间:{{item.add_time | dateFormat}}
     </div>
     <div class='item-body'>
         <!-- {{item.content}} -->
        {{item.content==='null'?'此用户很懒':item.content }} 
     </div>
 </div>
 </div>
  <button type="button" class="mui-btn mui-btn-danger mui-btn-block mui-btn-outlined" @click="getMore">点击更多</button>
 </div>
</template>
<style  lang="scss" scoped>
.cot-coment{
   text-align: left;
    h3{
font-size: 18px;
    }
    textarea{
        height:90px;
        margin:0;
        font-size: 10px;
    }
    .item-list{
        font-size: 13px;
        .item-title{
            background-color: #ccc;
            line-height: 40px;
        }
        .item-body{
            line-height: 40px;
            text-indent: 2px;
        }

    }
}
</style>
<script>
import {Toast} from 'mint-ui';
import '../../lib/css/mui.css';
export default {
    data(){
        return{
pageindex:1,
commentList:[],
msg:'',
        }
    },
     created(){
       this.getComment();
    },
    methods:{
        getComment(){ 
            this.$http.get('api/getcomments/'+this.id+"?pageindex="+this.pageindex).then(result =>{
                //console.log(result.body);
                if(result.body.status===0){
                    this.commentList=this.commentList.concat(result.body.message); //拼接数组，把原来的数据和新获取到的数据拼接在一起
                }else{
                    //失败
                    Toast('评论获取失败');
                }
            })
        
        },
         getMore(){ //加载更多
            this.pageindex++;
            this.getComment();
        },
        // 发表评论，使用post
         postComment(){ 
            //  校验是否评论内容为空
            //  if(this.msg.trim.length===0){
            //     return Toast("评论内容不能为空");
            // }
            this.$http.post('api/postcomment/'+this.$route.params.id,{
                content:this.msg.trim()
                })
                .then(function(result){
                if(result.body.status===0){
                    // 拼接出一个评论对象
                    var cmt={
                        user_name:'匿名用户',
                        add_time:Date.now,
                        content:this.msg.trim()
                        };
                        // 不理解unshift()
                        this.commentList.unshift(cmt);
                        this.msg='';
                }else{
                    //失败
                    Toast('发表评论失败失败');
                }
            })
            
        },
    },
    props:['id'],

    
  
}
</script>
