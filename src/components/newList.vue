<template>
 <div>
<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in  newsList" :key="item.id">
                    <router-link :to="'/home/newsInfo/'+item.id">  
					<!-- <router-link to="/newsInfo"> -->
						<img class="mui-media-object mui-pull-left" :src="item.img_url" alt="出错">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
                                 <span>发表时间：{{item.add_time | dateFormat('YYYY-MM-DD')}}</span>
                                 <span>点击次数:{{item.click}}</span>
                            </p>
						</div>
					</router-link>
				</li>
			</ul>
 </div>
</template>
<style scoped>
ul{
color: #6d6d72;
font-size: 12px;
}
ul li h1 {
  font-size: 14px;
}
.mui-ellipsis{
display:flex;
justify-content: space-between;
}
</style>
<script>
import Toast from 'mint-ui';
export default {
    data(){
        return{
            newsList:[]
        }
    },
    created(){
       this.getNewList();
    },
    methods:{

        getNewList(){
            this.$http.get('api/getnewslist').then(result =>{
                //console.log(result.body);
                if(result.body.status===0){
                    this.newsList=result.body.message;
                    // console.log(this.newsList);
                }else{
                    //失败
                    Toast('获取新闻列表加载失败');
                }
            })


        }
    }

  
}
</script>
