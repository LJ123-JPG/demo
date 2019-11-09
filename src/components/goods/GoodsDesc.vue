<template>
   <div>
       <h3>{{info.title}}</h3>
       <hr/>
       <div v-html="info.content" class="content">

       </div>
      
   </div>
</template>
<style lang="scss">
h3{
    color: #226aff;
    margin: 15px 0;
}
.content{
    img{
        width: 80%;
       
    }
}

</style>
<script>
export default {
    data(){
        return{
            info:{},  //保存图文对象
        }
    },
    created(){
        this.getDesc();
    },
    methods:{
        getDesc(){
            this.$http.get("api/goods/getdesc/"+this.$route.params.id).then( result =>{
                if(result.body.status===0){
                    this.info=result.body.message[0];
                }
            })
        }
    }
    
}
</script>