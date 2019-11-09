import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'
import VueResource from 'vue-resource'
import Mint from "mint-ui"
import "mint-ui/lib/style.css"
import VuePreview from "vue-preview";
Vue.use(VuePreview)
Vue.use(Mint)
Vue.use(VueResource)
    // 全局设置vue-resource的路径请求表头
Vue.http.options.root = 'http://www.liulongbin.top:3005';
// 全局设置post请求时候表单数据格式
Vue.http.options.emulateJSON = true;
Vue.config.productionTip = false;

// 定义一个全局的过滤器
Vue.filter('dateFormat', function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    // moment 格式化时间
    return moment(dataStr).format(pattern);
})
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')