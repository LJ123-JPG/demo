<template>
 <div>
    <div id="slider" class="mui-slider ">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item',item.id==0 ? 'mui-active' :'']"  v-for="item in cates" :key='item.id' @click="getPhotoListCateId(item.id)" >
							{{item.title}}
						</a>
						
					</div>
				</div>

	</div>
	<!-- 图片列表区域 -->
	<ul class="photolist">
		<!-- tag是设置router-link渲染为li标签，默认的是a标签 -->
       <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.id" tag='li'>
          <img alt="出错" v-lazy="item.img_url"/>
	      <div class="info">
		    <h1 class="info-title">{{item.title}}</h1> 
			<p class="info-body">{{item.zhaiyao}}</p>
	     </div>
       </router-link>
   </ul>

			
 </div>
</template>
<style  lang="scss" scoped>
.photolist{
	list-style:none;
	padding:10px;
	margin:0;
	padding-bottom: 0;
	li{
background-color: #ccc;
text-align: center;
margin-bottom: 10px;
position:relative;
img{
	// width:100%;
	vertical-align: middle; //解决了图片与背景不重合的问题
}
img[lazy='loading']{
	width: 40px;
	height: 300px;
	margin:auto;
}
	}
}
.info{
color: white;
text-align: center;
position:absolute;
bottom:0;
background-color: rgba(0,0,0,0.4);
max-height:84px;
 width:100%;
.info-title{
	font-size: 14px;
}
.info-body{
	font-size:13px;
}
}
</style>
<script>
// 导入mui中的js和css，并调用官方提供的方法初始化滑动条正常触发滑动
// import '../../lib/js/mui.min.js';
import '../../lib/css/mui.min.css';
// mui('.mui-scroll-wrapper').scroll({
// 	deceleration:0.0005 //flick减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值为0.0006
// })
export default {
data(){
	return{
cates:[],//存放所有的分类
list:[],//存放图片的数组
	}
},
created(){
	this.getAllCategory();
	this.getPhotoListCateId(0)
},
methods:{
	getAllCategory(){
		//获取图片分类
		this.$http.get('api/getimgcategory').then(result =>{
			if(result.body.status===0){
				// 手动添加一个对象全部，全部不在分类里面
				result.body.message.unshift({
					title:'全部',
					id:0
				});
				this.cates=result.body.message
			}
		});
	},
	// 根据分类列表id获取图片列表
	getPhotoListCateId(cateId){
    this.$http.get('api/getimages/'+cateId).then(result =>{
	if(result.body.status===0){
		this.list=result.body.message;
	}
         })
	}
}

  
}
</script>
