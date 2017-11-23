import Vue from 'vue'
import Router from 'vue-router'
import Home from './../components/home/home.vue'
import Assets from '../components/assets/assets.vue'
import Order from '../components/order/order.vue'
import My from '../components/my/my.vue'
import FarmGoods from '../components/home/farm-goods/farm-goods.vue'
import GoodsDetail from '../components/home/goods-detail/goods-detail.vue'
import PanicBuying from '../components/home/panic-buying/panic-buying.vue'
import HistoryRecord from '../components/home/historical-record/historical-record.vue'
import Ranking from '../components/home/ranking/ranking.vue'
import Bill from '../components/assets/bill/bill.vue'
import Withdrawals from '../components/assets/withdrawals/withdrawals.vue'
import SelectBank from '../components/assets/select-bank/select-bank.vue'
import Rule from '../components/assets/rule/rule.vue'
import Yesterday from '../components/assets/yesterday/yesterday.vue'
import Cumulative from '../components/assets/cumulative/cumulative.vue'
import Cost from '../components/assets/cost/cost.vue'
import ExpectProfit from '../components/assets/expect-profit/expect-profit.vue'
import ExpectYear from '../components/assets/expect-year/expect-year.vue'

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
      component: Assets,
      children: [
        {
          path: 'bill',
          component: Bill
        },
        {
          path: 'yesterday',
          component: Yesterday
        },
        {
          path: 'cumulative',
          component: Cumulative
        },
        {
          path: 'cost',
          component: Cost
        },
        {
          path: 'expectProfit',
          component: ExpectProfit
        },
        {
          path: 'expectYear',
          component: ExpectYear
        },
        {
          path: 'withdrawals',
          component: Withdrawals,
          children: [
            {
              path: 'selectBank',
              component: SelectBank
            },
            {
              path: 'rule',
              component: Rule
            }
          ]
        }
      ]
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
