<template>
  <div class="farm-goods">
    <router-view/>
    <header-bar @gohome="gohome" :title="title"></header-bar>
    <scroll :data="list" class="wrapper">
      <div>
        <goods-list @godetail="godetail"></goods-list>
        <goods-list @godetail="godetail" :btnColor="btnColor"></goods-list>
        <goods-list @godetail="godetail"></goods-list>
        <goods-list @godetail="godetail" :btnColor="btnColor"></goods-list>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import goodsList from '../../../base/list-style/goods-list.vue'
  import headerBar from '../../../base/header-bar/header-bar.vue'
  import Scroll from '../../../base/scroll/scroll.vue'

  export default{
    created() {
      this.btnColor = 'blue'
      this.title = '农场产品'
    },
    data() {
      return {
        list: []
      }
    },
    methods: {
      gohome() {
        this.$router.back()
      },
      godetail() {
        this.$router.push('/home/farmgoods/goodsdetail')
      }
    },
    components: {
      goodsList,
      headerBar,
      Scroll
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/variable.styl"

  .farm-goods
    background: $color-background-d
    position: fixed
    top: 44px
    bottom: 0
    width: 100%
    z-index: 200
    .wrapper
      height: 100%
      overflow: hidden
</style>
