<template>
 <div class="newsinfo-container">
    <h3 class="title">{{newsInfo.title}}</h3>
    <p class="subtitle">
        <span>{{newsInfo.add_time | dateFormat}}</span>
        <span>{{newsInfo.click}}</span>
    </p>
    <hr/>
    <div class="content" v-html="newsInfo.content">
    </div>
    <!-- 评论组件 -->
    <comment :id="this.id"></comment>


 </div>
</template>
<style lang="scss">
.newsinfo-container{
padding:0 4px;
}
.title{
text-align: center;
font-size: 16px 0;
margin:15px 0;
color: red;

}
.subtitle{
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content:space-between;

}
.content{
    img{
        width:100%;
    }
}

</style>
<script>
import {Toast} from 'mint-ui';
import comment from './subcomponents/comment.vue';
export default {
    data(){
        return{
            // 将url传递过来的id值挂载到上面方便以后调用
             id:this.$route.params.id,
             newsInfo:[]
        }
    },
    created(){
       this.getNewsInfo();
    },
    methods:{
         getNewsInfo(){
            this.$http.get('api/getnew/'+this.id).then(result =>{
                //console.log(result.body);
                if(result.body.status===0){
                    this.newsInfo=result.body.message[0];
                }else{
                    //失败
                    Toast('轮播图加载失败');
                }
            })
        }
    },
    components:{
        comment,
    }
  
}
</script>
