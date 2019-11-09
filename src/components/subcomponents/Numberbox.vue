<template>
     <div class="mui-numbox" data-numbox-min="1" data-numbox-max='9'>
  <!-- "-"按钮，点击可减小当前数值 -->
  <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
  <input class="mui-numbox-input" type="number" value="1"  @change="countChanged" ref="numbox"/>
  <!-- "+"按钮，点击可增大当前数值 -->
  <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
</div>
</template>
<style  scoped>

</style>
<script>
//import mui from "../../lib/js/mui.js";
export default {
   // mounted(){
   //   // 初始化数字选择框
   //  mui(".mui-numbox").numbox();
   // }
   data(){
      return{

      }
   },
   methods:{
      countChanged(){
         
      }

   }
    
}
</script>