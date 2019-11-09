<template>
 <div>
     <!-- 轮播图组件,父组件向子组件传值 -->
<mt-swipe :auto="4000">
    <!-- 谁使用lunbolist谁传值 -->
  <mt-swipe-item v-for='item in lunbotuList' :key='item.url' >
      <img :src="item.img" alt="出错" :class="{'full':isfull}">
  </mt-swipe-item>
</mt-swipe>
 </div>
</template>
<style lang='scss' scoped>
.mint-swipe{
    height: 300px;
    .mint-swipe-item{
    img{
       // width: 100%;
        height: 100%;
    }
    
    }   
}
.full{
    width:100%;
}
</style>
<script>
export default {
  data(){
      return{
         
         

      }
  },
  props:['lunbotuList',"isfull"],
  methds:{
      
  }
}
</script>
