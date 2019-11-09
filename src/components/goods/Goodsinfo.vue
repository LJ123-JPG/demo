<template>
 <div>
     <transition
      @before-enter="beforeEnter"
         @enter="enter"
         @after-enter="afterEnter" >
     <div class="ball" v-show="ballFlag" ref="ball"></div>
     </transition>

     <!-- 轮播图区域 -->
   <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						 <swiper :lunbotuList="lunList" :isfull='false'></swiper>
					</div>
	           </div>
  </div>
  <!-- 商品购买区域 -->
  <div class="mui-card">
     <div class="header">{{goodsinfo.title}}</div>
   
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
                            市场价:<del>￥{{goodsinfo.market_price}}</del>&nbsp;&nbsp;销售价:<span class="now_price" >￥{{goodsinfo.sell_price}}</span>
                        </p>
                        <p>购买数量:
                           <numbox></numbox>
                        </p>
                        <p>
                            <mt-button type="primary" size="small">立即购买</mt-button>
                            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                        </p>
					</div>
	</div>
  </div>
    	<div class="mui-card">
            <div class="header">商品参数</div> 
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号:{{goodsinfo.goods_no}}</p>
                        <p>库存情况:{{goodsinfo.stock_quantity}}</p>
                        <p>上架时间:{{goodsinfo.add_time | dateFormat}}</p>
					</div>
                    <div class="mui-card-footer">
                         <mt-button type="primary" size="large" @click="goDesc(id)">图文介绍</mt-button>
                            <mt-button type="danger" size="large" @click="goComment(id)">商品评论</mt-button>
                    </div>
                   
	</div>
  </div>
 </div>
</template>
// 详情页中轮播图期望的高度是100%,宽度是自适应
<style  lang="scss" scoped>
.now_price{
    color: red;
    font-size: 14px;
    font-weight: bold;

}
.mui-card-footer{
    display: block;
    button{
        margin:15px 0;
    }
}
.header{
    margin-top: 10px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;

}
.ball{
    width: 15px;
    height:15px;
    border-radius: 50%;
    background-color: red;
    position:absolute;
    z-index: 99;
    top:475px;
    left:700px;

}
</style>
<script>
import '../../lib/css/mui.css';
import swiper from '../swiper.vue';
import numbox from '../subcomponents/Numberbox.vue';
export default {
    data(){
        return{
            id:this.$route.params.id,
            lunList:[], //轮播图的数据
            goodsinfo:[], //获取到的商品信息
            ballFlag:false, //用于设置小球显示或隐藏
            selectCount:1, //默认的选择的商品数

        }
    },
    methods:{
        GetImg(){
            this.$http.get("api/getthumimages/"+this.id).then( result =>{
                if(result.body.status===0){
                    // 先循环轮播图数组的每一项，为item添加img属性，因为轮播图只认识item.img属性不认识src属性
                     result.body.message.forEach(item=>{
                         item.img=item.src;
                     })
                    this.lunList=result.body.message;

                }
            } )
        },
        getCodaInfo(){
            // 获取商品信息
            this.$http.get("api/goods/getinfo/"+this.id).then(result =>{
                if(result.body.status===0){
                    this.goodsinfo=result.body.message[0];
                }
            })

        },
        goDesc(id){
            //点击使用编程式导航跳转到图文介绍页面
            this.$router.push({ name:'goodsDesc', params:{id} });
        },
        goComment(id){
           this.$router.push({ name:'goodsComment', params:{id} }); 
        },
        addToShopCar(){
            // 添加到购物车
            this.ballFlag=!this.ballFlag;
        },
        // 钩子函数
        beforeEnter(el){
            el.style.transform="translate(0,0)";
        },
        enter(el,done){
            el.offsetWidth;
            // 小球优化思路
            // 1.先分析导致动画不准确的原因是我们把小球最终的位置写死了
            // 只要移动了最初的位置就会发生变化，所以不能写死
            // 获取小球在页面中的位置getBoundingClientRect()返回一个矩形的四个值
            const ballPosition=this.$refs.ball.getBoundingClientRect();
            // 获取徽标在页面中的位置
            const badgePosition=document.getElementById("badge").getBoundingClientRect();
            const xDist=badgePosition.left-ballPosition.left;
            const yDist=badgePosition.top-ballPosition.top;
            el.style.transform=`translate(${xDist}px,${yDist}px)`;
            el.style.transition="all 1s cubic-bezier(0,0,.25,1)";
            done();
        },
        afterEnter(){
             this.ballFlag=!this.ballFlag;
        }

       
    },
    components:{
        swiper,
        numbox

    },
    created(){
        this.GetImg();
        this.getCodaInfo();
    }
  
}
</script>
