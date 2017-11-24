<template>
  <div class="my-coin">
    <router-view></router-view>
    <header-bar @gohome="back" :title="title" :question="question" @questionGo="goExplain"></header-bar>
    <scroll class="wrapper" :data="list">
      <div>
        <div class="assets-all">
          <div class="all-bg">
            <h3>当前农币(个)</h3>
            <h1>123456</h1>
            <p><span>(请于2018.01.01 24:00之前使用)</span></p>
          </div>
        </div>
        <div class="title">
          农币明细
        </div>
        <div class="detail-group">
          <div class="item">
            <p class="item50">购买千岛湖小香薯</p>
            <p class="item25 left">2017.10.12</p>
            <p class="item-right red item25 right">￥600.00</p>
          </div>
          <div class="item">
            <p class="item50">购买千岛湖年味猪第1期</p>
            <p class="item25 left">2017.10.12</p>
            <p class="item-right red item25 right">￥600.00</p>
          </div>
          <div class="item">
            <p class="item50">千岛湖年味猪第1期</p>
            <p class="item25 left">2017.10.12</p>
            <p class="item-right red item25 reduce right">-￥600.00</p>
          </div>
          <div class="item">
            <p class="item50">千岛湖年味猪第1期</p>
            <p class="item25 left">2017.10.12</p>
            <p class="item-right red item25 right">￥600.00</p>
          </div>
        </div>
      </div>
    </scroll>

  </div>
</template>

<script type="text/ecmascript-6">
  import headerBar from '../../../base/header-bar/header-bar.vue'
  import Scroll from '../../../base/scroll/scroll.vue'

  export default{
    data() {
      return {
        title: '我的农币',
        list: [],
        question: true
      }
    },
    methods: {
      back() {
        this.$router.back()
      },
      goExplain() {
        this.$router.push('/my/myCoin/rule')
      }
    },
    components: {
      headerBar,
      Scroll
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/base.styl"
  @import "../../../common/stylus/detailgroup.styl"

  .my-coin
    position: fixed
    top: 44px
    bottom: 0
    width: 100%
    background: $color-background-d
    z-index: 200
    .wrapper
      height: 100%
      overflow: hidden
      .assets-all
        background: $color-background
        box-sizing: border-box
        color: $color-text-f
        text-align: center
        margin-bottom: 10px
        h1
          font-size: $font-size-large-xl
          line-height: 40px
          margin-bottom: 5px
        h3
          font-size: $font-size-large
          line-height: 28px
        p
          font-size: $font-size-medium
        .all-bg
          padding: 20px
          background: url("./integral_bj.png") no-repeat
          background-size: 100% 100%
          height: 100px
          margin-bottom: 15px
        .assets-active
          display: flex
          .active-item
            flex: 1
            text-align: center
            color: $color-text
            p
              line-height: 18px
            .item-title
              color: $color-text-l
              font-size: $font-size-small
            .btn
              background: $color-theme-b
              display: block
              padding: 12px 10px
              border-radius: 20px
              color: $color-text-f

      .detail-group
        .item
          .item25
            flex: 0 0 25%
            &.right
              text-align: right
            &.left
              text-align: left
          .item50
            flex: 0 0 50%
            padding-right: 8px
            box-sizing: border-box

</style>
