<template>
  <div class="home" :data="goodslist">
    <router-view/>
    <header-bar :title="title"></header-bar>
    <scroll class="scroll-content">
      <div class="wrapper">
        <div class="banner">
          <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
          </mt-swipe>
        </div>
        <top-title></top-title>
        <goods-list :infoTitle="infoTitle" :goodsTitle="goodsTitle" :profit="profit" :btn="btn"></goods-list>
        <top-title @gofarmgoods="gofarmgoods"></top-title>
        <div class="lists">
          <mt-swipe :auto="4000">
            <mt-swipe-item>
              <goods-list @godetail="godetail"></goods-list>
            </mt-swipe-item>
            <mt-swipe-item>
              <goods-list @godetail="godetail" :btnColor="btnColor"></goods-list>
            </mt-swipe-item>
            <mt-swipe-item>
              <goods-list @godetail="godetail"></goods-list>
            </mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
    </scroll>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script type="text/ecmascript-6">
  import BottomBar from '../../base/bottom-bar/bottom-bar.vue'
  import HeaderBar from '../../base/header-bar/header-bar.vue'
  import GoodsList from '../../base/list-style/goods-list.vue'
  import Scroll from '../../base/scroll/scroll.vue'
  import TopTitle from '../../base/top-title/top-title.vue'
//  import { Swipe, SwipeItem } from 'mint-ui'

  export default{
    created() {
      this.infoTitle = false
      this.goodsTitle = false
      this.profit = false
      this.btn = false
      this.btnColor = 'blue'
      this.title = '农场'
    },
    data() {
      return {
        goodslist: []
      }
    },
    methods: {
      gofarmgoods() {
        this.$router.push('/home/farmgoods')
      },
      godetail() {
        this.$router.push('/home/farmgoods/goodsdetail')
      }
    },
    components: {
      BottomBar,
      HeaderBar,
      GoodsList,
      Scroll,
      TopTitle
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/base.styl"

  html,body
    height: 100%
    background: $color-background-d !important

  .home
    position :fixed
    top: 44px
    bottom: 48px
    width: 100%
    .scroll-content
      height: 100%
      overflow: hidden
      .wrapper
        .banner
          height: 200px
          background: $color-dialog-background
          margin-bottom: 12px
        .lists
          height: 290px
          background: $color-background

</style>
