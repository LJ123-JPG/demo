<template>
 <div class="goods-list">
     <div class="goods-item" v-for="item in goodslist" :key="item.id" @click="goDetail(item.id)">
     <img :src="item.img_url" alt="">
     <h1 class="title">{{item.title}}</h1>
     <div class="info">
         <p class="price">
             <span class="now">￥{{item.sell_price}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
             <span class="ago">￥{{item.market_price}}</span>
         </p>
         <p class="num">
             <span class="right">热卖中</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <span class="left">剩{{item.stock_quantity}}件</span>
         </p>
     </div>
     </div>
<button type="button" class="mui-btn mui-btn-danger mui-btn-block mui-btn-outlined"  @click="getMore">加载更多</button>
 </div>
</template>
<style  lang="scss" scoped>
.goods-list{
    display:flex;
    /* 不理解是啥样式 */
    flex-wrap: wrap;
    padding:7px;
    justify-content: space-between;
}
.goods-item{
    width: 47%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin:4px 0;
    font-size:12px;
    font-weight: bold;

    img{
        width: 60%;
    }
    .title{
        font-size:14px;
    }
    .info{
        background-color: #eee;
        padding:5px;
        .price{
           .now{
               color: red;
               font-weight: bold;
               font-size: 18px;
           }
           .ago{
               text-decoration: line-through;
               font-size: 12px;

           } 
        }
    }
}
</style>
<script>
import '../../lib/css/mui.css';
export default {
    data(){
        return{
            pageindex:1,
            goodslist:[]

        }
    },
    methods:{
        getGoodsList(){
            //获取商品列表
            this.$http.get("api/getgoods?pageindex="+this.pageindex).then(result =>{
                if(result.body.status===0){
                    this.goodslist=this.goodslist.concat(result.body.message);
                }
            });
        },
        getMore(){
            this.getGoodsList();
        },
         goDetail(id){
           //使用js的形式进行路由导航
           //注意一定要区分this.$route和this.$router这两个对象
        //    其中this.$route是路由参数对象，所有路由中的参数，params,query都属于它
        // 其中this.$router是一个路由导航对象，用它可以方便的使用js代码，实现路由的前进后退，跳转到重新的URL地址
        //console.log(this);
        this.$router.push("/home/goodsinfo/"+id);
        // 传递命名的路由
        //this.$router.push({ name:"goodsinfo",params:{ id } });
       } 


    },
    created(){
        this.getGoodsList()
    }
  
}
</script>
