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
import AllOrder from '../components/order/all-order/all-order.vue'
import PayAlready from '../components/order/pay-already/pay-already.vue'
import PayCancel from '../components/order/pay-cancel/pay-cancel.vue'
import PayWait from '../components/order/pay-wait/pay-wait.vue'
import Settlement from '../components/order/settlement/settlement.vue'
import OrderDetail from '../components/order/order-detail/order-detail.vue'
import MyCar from '../components/my/my-car/my-car.vue'
import MyContract from '../components/my/my-contract/my-contract.vue'
import Friends from '../components/my/friends/friends.vue'
import Message from '../components/my/message/message.vue'
import MyCoin from '../components/my/my-coin/my-coin.vue'
import Invitation from '../components/my/invitation/invitation.vue'
import AddCar from '../components/my/add-car/add-car.vue'

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
      component: Order,
      children: [
        {
          path: '/',
          redirect: 'allOrder'
        },
        {
          path: 'allOrder',
          component: AllOrder
        },
        {
          path: 'payAlready',
          component: PayAlready
        },
        {
          path: 'payCancel',
          component: PayCancel
        },
        {
          path: 'payWait',
          component: PayWait
        },
        {
          path: 'settlement',
          component: Settlement
        }
      ]
    },
    {
      path: '/order/orderDetail',
      component: OrderDetail
    },
    {
      path: '/my',
      component: My,
      children: [
        {
          path: 'myCar',
          component: MyCar,
          children: [
            {
              path: 'addCar',
              component: AddCar
            }
          ]
        },
        {
          path: 'myContract',
          component: MyContract
        },
        {
          path: 'friends',
          component: Friends
        },
        {
          path: 'message',
          component: Message
        },
        {
          path: 'myCoin',
          component: MyCoin,
          children: [
            {
              path: 'rule',
              component: Rule
            }
          ]
        },
        {
          path: 'invitation',
          component: Invitation
        }
      ]
    }
  ]
})
