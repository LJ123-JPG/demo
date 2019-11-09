import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/HomeContainer.vue'
import Member from './components/MemberContainer.vue'
import Cart from './components/ShopcartContainer.vue'
import Search from './components/SearchContainer.vue'
import NewList from './components/newList.vue'
import NewsInfo from './components/NewsInfo.vue'
import Photolist from './components/photos/Photolist.vue'
import Photoinfo from './components/photos/Photoinfo.vue'
import Goodslist from './components/goods/Goodslist.vue'
import Goodsinfo from './components/goods/Goodsinfo.vue'
import GoodsDesc from './components/goods/GoodsDesc.vue'
import GoodsComment from './components/goods/GoodsComment.vue'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/home',

        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/member',
            name: 'member',
            component: Member
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart
        },
        {
            path: '/search',
            name: 'search',
            component: Search
        },
        {
            path: '/newList',
            name: 'newlist',
            component: NewList
        },
        {
            path: '/home/newsInfo/:id',
            name: 'newsInfo',
            component: NewsInfo
        },
        {
            path: '/home/photolist',
            name: 'photolist',
            component: Photolist
        },
        {
            path: '/home/photoinfo/:id',
            name: 'photoinfo',
            component: Photoinfo
        },
        {
            path: '/home/goodslist',
            name: 'goodslist',
            component: Goodslist
        },
        {
            path: '/home/goodsinfo/:id',
            name: 'goodsinfo',
            component: Goodsinfo
        },
        {
            path: '/home/goodsDesc/:id',
            name: 'goodsDesc',
            component: GoodsDesc
        },
        {
            path: '/home/goodsComment/:id',
            name: 'goodsComment',
            component: GoodsComment
        }
    ],
    linkActiveClass: 'mui-active'
})