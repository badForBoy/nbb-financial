<template>
  <div>
    <order-list @toDetail="toDetail"></order-list>
    <order-list></order-list>
    <order-list></order-list>
  </div>
</template>

<script type="text/ecmascript-6">
  import OrderList from '../../../base/list-style/order-list.vue'

  export default{
    methods: {
      toDetail() {
        this.$router.push('/order/orderDetail')
      }
    },
    components: {
      OrderList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
