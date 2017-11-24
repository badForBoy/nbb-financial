<template>
  <div class="detail">
    <header-bar @gohome="back" :title="title"></header-bar>
    <scroll :data="list" class="wrapper">
      <div>
        <order-list :btnShow="btnShow"></order-list>
        <div class="detail-group">
          <div class="item">
            <p>订单号</p>
            <p class="item-right">2017101210301234</p>
          </div>
          <div class="item">
            <p>下单时间</p>
            <p class="item-right">2017.10.12 10:30:30</p>
          </div>
          <div class="item">
            <p>订单金额</p>
            <p class="item-right red">￥1000.00</p>
          </div>
          <div class="item">
            <p>农币抵扣</p>
            <p class="item-right red">￥90.00</p>
          </div>
          <div class="item">
            <p>支付方式</p>
            <p class="item-right">支付宝</p>
          </div>
          <div class="item">
            <p>订单状态</p>
            <p class="item-right">已结算</p>
          </div>
          <div class="item">
            <p>预期收益</p>
            <p class="item-right red">￥300.00</p>
          </div>
        </div>

      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from '../../../base/scroll/scroll.vue'
  import headerBar from '../../../base/header-bar/header-bar.vue'
  import OrderList from '../../../base/list-style/order-list.vue'

  export default{
    data() {
      return {
        title: '订单详情',
        btnShow: false,
        list: []
      }
    },
    methods: {
      back() {
        this.$router.back()
      }
    },
    components: {
      Scroll,
      headerBar,
      OrderList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/base.styl"
  @import "../../../common/stylus/detailgroup.styl"
  .detail
    position: fixed
    top: 44px
    bottom: 0
    width: 100%
    z-index: 500
    background: $color-background-d
    .wrapper
      height: 100%
      overflow: hidden
</style>
