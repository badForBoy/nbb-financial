<template>
  <div class="order">
    <header-bar @gohome="back" :title="title"></header-bar>
    <div class="wrapper">
      <div>
        <div class="tab">
          <router-link to="/order/allOrder" class="tab-item"><span>全部</span></router-link>
          <router-link to="/order/payAlready" class="tab-item"><span>待付款</span></router-link>
          <router-link to="/order/payCancel" class="tab-item"><span>已付款</span></router-link>
          <router-link to="/order/payWait" class="tab-item"><span>已取消</span></router-link>
          <router-link to="/order/settlement" class="tab-item"><span>已结算</span></router-link>
        </div>
        <scroll class="order-content" :data="list">
          <div>
            <router-view></router-view>
          </div>
        </scroll>
      </div>
    </div>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script type="text/ecmascript-6">
  import OrderList from '../../base/list-style/order-list.vue'
  import Scroll from '../../base/scroll/scroll.vue'
  import headerBar from '../../base/header-bar/header-bar.vue'
  import bottomBar from '../../base/bottom-bar/bottom-bar.vue'
  export default{
    data() {
      return {
        list: [],
        title: '订单'
      }
    },
    methods: {
      back() {
        this.$router.back()
      }
    },
    components: {
      OrderList,
      Scroll,
      headerBar,
      bottomBar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/base.styl"
  .order
    position: fixed
    top: 44px
    bottom: 48px
    width: 100%
    z-index: 10
    background: $color-background-d
    .wrapper
      height: 100%
      overflow: hidden
      .order-content
        position: fixed
        top: 102px
        bottom: 48px
        width: 100%
      .tab
        display: flex
        z-index: 10
        height: 48px
        align-items: center
        justify-content: space-around
        text-align: center
        background: $color-background
        border-1px($color-theme-e)
        margin-bottom: 10px
        .tab-item
          flex: 1
          span
            padding: 4px
          &.router-link-active
            color: $color-theme
            span
              display: inline-block
              box-sizing: border-box
              border-bottom :2px solid $color-theme
</style>
