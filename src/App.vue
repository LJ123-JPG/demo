<template>
  <div id="app">
    <div class="app-container">
     <!-- 顶部核心区 -->
   <mt-header fixed title="固定在顶部"></mt-header>  
   <!-- <router-view></router-view>放置 -->
   <router-view></router-view>
   <!-- tar栏-->
   <transition>
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/cart">
				<span class="mui-icon mui-icon-contact"><span class="mui-badge" id="badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>
    </transition>	
   <!--  -->
 </div>
    
  </div>
</template>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.app-container{
    padding-top: 40px;
    padding-bottom: 50px;
    overflow-x: hidden;
}
.v-enter{
  opacity: 0;
  transform:translateX(100%);
}
.v-leave-to{
   opacity: 0;
  transform:translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
 transition: all 4s ease;
}

</style>
<script>
// @ is an alias to /src
import Vue from 'vue';
import 'mint-ui/lib/style.css';
import { Header } from 'mint-ui';
// 引入MUI中的css样式
import './lib/css/mui.css';
Vue.component(Header.name, Header);
export default {
  components: {
   
  }
}
</script>

