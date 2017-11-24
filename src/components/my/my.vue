<template>
  <div class="my-center">
    <router-view></router-view>
    <header-bar @gohome="back" :title="title"></header-bar>
    <scroll class="wrapper">
      <div>
        <div class="base">
          <div class="base-top">
            <div class="top-left">
              <img src="http://tupian.geimian.com/pic/2015/06/2015-06-27_210910.jpg">
            </div>
            <div class="top-right">
              <p class="right-item">nbb123</p>
              <p class="right-item">电话：13665786632</p>
              <span class="icon right-item">
                <img src="./icon_-certified.png">
              </span>
            </div>
          </div>
          <div class="base-bot">
            <div class="item">
              <div class="item-count">
                10000.00
              </div>
              <div class="item-title">
                余额（元）
              </div>
            </div>
            <router-link to="/my/myCoin" tag="div" class="item">
              <div class="item-count">
                1234
              </div>
              <div class="item-title">
                农币（个）
              </div>
            </router-link>
            <router-link to="/my/invitation" tag="div" class="item">
              <div class="item-count">
                123456
              </div>
              <div class="item-title">
                我的邀请码
              </div>
            </router-link>
          </div>
        </div>
        <div class="info">
          <div class="info-list">
            <router-link to="/assets" class="info-item">
              <div class="info-pic">
                <img src="./icon_my-assets.png">
              </div>
              <div class="info-title">
                <h3>我的资产</h3>
                <p>10000.00</p>
              </div>
            </router-link>
            <router-link to="/my/myCar" class="info-item">
              <div class="info-pic">
                <img src="./icon_bank-card.png">
              </div>
              <div class="info-title">
                <h3>我的银行卡</h3>
                <p>2张</p>
              </div>
            </router-link>
          </div>
          <div class="info-list">
            <router-link to="/order" class="info-item">
              <div class="info-pic">
                <img src="./icon_my-order.png">
              </div>
              <div class="info-title">
                <h3>我的订单</h3>
                <p>无未处理订单</p>
              </div>
            </router-link>
            <router-link to="/my/myContract" class="info-item">
              <div class="info-pic">
                <img src="./icon_my-contract.png">
              </div>
              <div class="info-title">
                <h3>我的合同</h3>
                <p>签订3份</p>
              </div>
            </router-link>
          </div>
        </div>
        <div class="info">
          <div class="info-list">
            <router-link to="/my/friends" class="info-item">
              <div class="info-pic">
                <img src="./icon_my-friend.png">
              </div>
              <div class="info-title">
                <h3>我的好友</h3>
                <p>120个</p>
              </div>
            </router-link>
            <router-link to="/my/message" class="info-item">
              <div class="info-pic">
                <img src="./icon_my-message.png">
              </div>
              <div class="info-title">
                <h3>我的消息</h3>
                <p>6条新消息</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </scroll>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script type="text/ecmascript-6">
  import headerBar from '../../base/header-bar/header-bar.vue'
  import bottomBar from '../../base/bottom-bar/bottom-bar.vue'
  import Scroll from '../../base/scroll/scroll.vue'

  export default{
    data() {
      return {
        title: '我的'
      }
    },
    methods: {
      back() {
        this.$router.back()
      }
    },
    components: {
      headerBar,
      bottomBar,
      Scroll
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/base.styl"
  .my-center
    position: fixed
    top: 44px
    bottom: 48px
    width: 100%
    z-index: 10
    margin-bottom: 0
    background: $color-background-d
    color: $color-text
    font-size: $font-size-medium-x
    .wrapper
      height: 100%
      overflow: hidden
      .base
        display: flex
        flex-direction: column
        background: $color-background
        margin-bottom: 10px
        box-sizing: border-box
        padding: 20px 25px 10px
        .base-top
          display: flex
          margin-bottom: 20px
          box-sizing: border-box
          padding: 0 15px
          .top-left
            width: 80px
            height: 80px
            background: url("./icon_avatar_default-.png") no-repeat
            background-size: 80px 80px
            img
              width: 80px
              height: 80px
              border-radius: 40px
          .top-right
            display: flex
            flex-direction: column
            padding-left: 10px
            .right-item
              flex: 1
            .icon
              img
                height: 20px
        .base-bot
          display: flex
          .item
            flex: 1
            display: flex
            flex-direction: column
            text-align: center
            border-right: 1px solid $color-theme-e
            &:last-child
              border: none
            .item-title
              padding: 6px
              color: $color-text-l
              font-size: $font-size-small
            .item-count
              font-size: $font-size-large

      .info
        margin-bottom: 10px
        .info-list
          display: flex
          align-content: space-between
          .info-item
            flex-basis: 100%
            display: flex
            justify-content: space-between
            background: $color-background
            box-sizing: border-box
            padding: 25px 20px
            &:first-child
              margin: 0 1px 1px 0
            &:last-child
              margin: 0 0 1px 0
            .info-pic
              flex: 0 036px
              img
                height: 36px
            .info-title
              flex: 1
              padding-left: 10px
              h3
                color: $color-text
                font-size: $font-size-large
                margin: 4px 0
              p
                color: $color-text-l
                font-size: $font-size-medium

</style>
