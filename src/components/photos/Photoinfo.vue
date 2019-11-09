<template>
 <div class="photoinfo-container">
    <h3>{{photoinfo.title}}</h3>
    <p class="subtitle">
        <span>发表时间:{{photoinfo.add_time | dateFormat}}</span>
        <span>点击次数:{{photoinfo.click}}</span>
    </p>
    <hr/>
    <!-- 缩略图  cnpm i vue-preview -S -->
    <div class="thumbs">
        <!--这是以前的方法，现在不适用 <img class="preview-img" v-for="(item,index) in list" :src="item.src" height="100" @click="$preview.open(index,list)" :key="item.src"> -->
 <vue-preview :slides="list" @close="handleClose"></vue-preview>
</div>
    <!-- 图片内容 -->
    <div class="content" v-html="photoinfo.content"></div>
    <!-- 评论组件 -->
     <comment :id="this.id"></comment>
 </div>
</template>
<style lang="scss" scoped>
.photoinfo-container{
    padding:3px;
    h3{
        color: #26a2ff;

    }
}
.thumbs {
  /deep/ .my-gallery {
    display: flex;
    flex-wrap: wrap;
    figure {
      width: 30%;
      margin: 5px;
      img {
        width: 100%;
      }
    }
  }
}
</style>
<script>
// 导入评论子组件

import comment from '../subcomponents/comment.vue';
export default {
    data(){
        return{
            id:this.$route.params.id,
            photoinfo:{},
            list:[]
        }
    },
    created(){
        this.getPhotoInfo();
       this.getPhotominInfo()
    },
    methods:{
     getPhotoInfo(){
        //  获取图片详情
        this.$http.get('api/getimageInfo/'+this.id).then(result=>{
            if(result.body.status===0){
                this.photoinfo=result.body.message[0];
                // console.log(this.photoinfo);
            }
        })

},
      getPhotominInfo() {
      this.$http
.get("api/getthumimages/"+this.id)
.then(result => {
//循环每个图片数据,补全图片的宽和高
result.body.message.forEach(item => {
item.msrc = item.src;
item.w = 600;
item.h = 400;
});
this.list = result.body.message;
// console.log(this.list);
})
},
 handleClose() {
     // console.log("close event");
    }
    },
    components:{
     comment
    }
  
}
</script>
