<template>
  <div class="assets">
    <router-view></router-view>
    <header-bar @gohome="back" :title="title"></header-bar>
    <scroll class="wrapper" :data="list">
      <div>
        <div class="assets-all">
          <div class="all-bg">
            <h3>资产总额
              <span class="eyes open" :class="{'open': toggleeyes,'closed': !toggleeyes}" @click="toggleEyes"></span>
            </h3>
            <h1>{{toggleeNum}}</h1>
            <p @click="bill"><span>查看详情</span> <span class="icom-assets-more"><img src="./icon_assets_more.png"></span></p>
          </div>
          <div class="assets-active">
            <div class="active-item">
              <p class="item-title">可用余额</p>
              <p>9000.00</p>
            </div>
            <div @click="withdrawals" class="active-item">
              <span class="btn">
                提现
              </span>
            </div>
          </div>
        </div>
        <div class="detail-group">
          <div class="item" @click="yesterday">
            <p>昨日收益</p>
            <p class="go item-right">
              <img src="./icon_more.png">
            </p>
          </div>
          <div class="item" @click="cumulative">
            <p>累计收益</p>
            <p class="go item-right">
              <img src="./icon_more.png">
            </p>
          </div>
          <div class="item" @click="cost">
            <p>养殖成本</p>
            <p class="go item-right">
              <img src="./icon_more.png">
            </p>
          </div>
          <div class="item" @click="expectYear">
            <p>预期年化收益率</p>
            <p class="go item-right">
              <img src="./icon_more.png">
            </p>
          </div>
          <div class="item" @click="expectProfit">
            <p>预期收益</p>
            <p class="go item-right">
              <img src="./icon_more.png">
            </p>
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
        list: [],
        toggleeyes: true,
        num: 0,
        title: '资产'
      }
    },
    computed: {
      toggleeNum: function () {
        if (this.toggleeyes) {
          this.num = 10000.68
        } else {
          this.num = '******'
        }
        return this.num
      }
    },
    methods: {
      back() {
        this.$router.back()
      },
      withdrawals() {
        this.$router.push('/assets/withdrawals')
      },
      bill() {
        this.$router.push('/assets/bill')
      },
      yesterday() {
        this.$router.push('/assets/yesterday')
      },
      cumulative() {
        this.$router.push('/assets/cumulative')
      },
      cost() {
        this.$router.push('/assets/cost')
      },
      expectYear() {
        this.$router.push('/assets/expectYear')
      },
      expectProfit() {
        this.$router.push('/assets/expectProfit')
      },
      toggleEyes() {
        this.toggleeyes = !this.toggleeyes
      }
    },
    components: {
      headerBar,
      Scroll,
      bottomBar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/base.styl"
  @import "../../common/stylus/detailgroup.styl"
  .assets
    position: fixed
    top: 44px
    bottom: 48px
    width: 100%
    background: $color-theme-e
    .wrapper
      height: 100%
      overflow: hidden
      .assets-all
        background: $color-background
        padding: 20px
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
          background: url("./assets_bj.png") no-repeat
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

  .icom-assets-more
    img
      height: 12px
      vertical-align: bottom
      padding-bottom: 1px

  .eyes
    display: inline-block
    width: 18px
    height: 14px
    background-repeat: no-repeat
    background-size: 18px 14px !important
    &.open
      background: url("./icon_eyes_open.png")
    &.closed
      background: url("./icon_eyes_closed.png")
</style>
