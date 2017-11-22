import Vue from 'vue'
import Router from 'vue-router'
import Home from './../components/home/home.vue'
import Assets from '../components/assets/assets.vue'
import Order from '../components/order/order.vue'
import My from '../components/my/my.vue'
import FarmGoods from '../components/farm-goods/farm-goods.vue'
import GoodsDetail from '../components/goods-detail/goods-detail.vue'
import PanicBuying from '../components/panic-buying/panic-buying.vue'
import HistoryRecord from '../components/historical-record/historical-record.vue'
import Ranking from '../components/ranking/ranking.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'farmgoods',
          component: FarmGoods,
          children: [
            {
              path: 'goodsdetail',
              component: GoodsDetail,
              children: [
                {
                  path: 'panicBuying',
                  component: PanicBuying
                },
                {
                  path: 'historyRecord',
                  component: HistoryRecord
                },
                {
                  path: 'ranking',
                  component: Ranking
                }
              ]
            }
          ]
        }
      ]
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
    }
  ]
})
