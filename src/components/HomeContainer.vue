<template>
 <div>
     <!-- 轮播图 传递数组的值-->
     <swiper :lunbotuList="lunbotuList" :isfull='true'></swiper>

<!-- 六宫格的制作 -->
<ul class="mui-table-view mui-grid-view mui-grid-9">
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
           <router-link to="/newList"> 
               <span class="mui-icon mui-icon-home"></span>
            <div class="mui-media-body">新闻资讯</div>
           </router-link>
    </li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
       <router-link to="/home/photolist">
            <span class="mui-icon mui-icon-home"></span>
            <div class="mui-media-body">图片分享</div>
       </router-link>
    </li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
       <router-link to="/home/goodslist">
            <span class="mui-icon mui-icon-home"></span>
            <div class="mui-media-body">商品购买</div>
       </router-link>
    </li>
    <br/>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
            <span class="mui-icon mui-icon-home"></span>
            <div class="mui-media-body">新闻资讯</div>
        </a>
    </li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
            <span class="mui-icon mui-icon-home"></span>
            <div class="mui-media-body">新闻资讯</div>
        </a>
    </li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
            <span class="mui-icon mui-icon-home"></span>
            <div class="mui-media-body">新闻资讯</div>
        </a>
    </li>
    
</ul>
 </div>
</template>
<style lang='scss' scoped>
</style>
<script>
import { Swipe, SwipeItem,Toast } from 'mint-ui';
import '../lib/css/mui.css';
import swiper from './swiper.vue';
import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

export default {
    data(){
        return{
             lunbotuList:[]

        }
    },
    created(){
       this.getLunBotu();
    },
    methods:{
         getLunBotu(){
            this.$http.get('api/getlunbo').then(result =>{
                //console.log(result.body);
                if(result.body.status===0){
                    this.lunbotuList=result.body.message;
                }else{
                    //失败
                    Toast('轮播图加载失败');
                }
            })
        }
        
    },
    components:{
        swiper
    }

  
}
</script>
