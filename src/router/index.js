import Vue from 'vue'
import Router from 'vue-router'
import Home from './../components/home/home.vue'
import Assets from '../components/assets/assets.vue'
import Order from '../components/order/order.vue'
import My from '../components/my/my.vue'
import FarmGoods from '../components/farm-goods/farm-goods.vue'
import GoodsDetail from '../components/goods-detail/goods-detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/assets',
      component: Assets
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/farmgoods',
      component: FarmGoods
    },
    {
      path: '/goodsdetail',
      component: GoodsDetail
    }
  ]
})
