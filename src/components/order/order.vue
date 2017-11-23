<template>
  <div class="order">
    <header-bar @gohome="back" :title="title"></header-bar>
    <scroll class="wrapper" :data="list">
      <div>
        <order-list></order-list>
        <order-list></order-list>
        <order-list></order-list>
      </div>
    </scroll>
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
    background: $color-theme-e
    .wrapper
      height: 100%
      overflow: hidden
</style>
