<template>
    <div>
       <comment id="$route.params.id"></comment>
    </div>
</template>
<style>

</style>
<script>
import comment from '../subcomponents/comment.vue';
export default {
    components:{
        comment
    }
    
}
</script>