<template>
  <div class="my-car">
    <transition name="slide">
      <router-view></router-view>
    </transition>
    <header-bar @gohome="back" :title="title"></header-bar>
    <scroll class="wrapper">
      <div>
        <div class="bank-type-box">
          <div class="bank-type" v-for="item in options" :class="item.value" ref="myCar">
            <div class="bank-icon">
              {{item.text}}
            </div>
            <div class="bank-info">
              <div>
                <h3>交通银行</h3>
                <p>储蓄卡</p>
              </div>
              <div>
                <h1><span>****</span> <span>****</span> <span>****</span> <span>1234</span></h1>
              </div>
            </div>
            <div class="bank-selected">
              <input type="radio" name="bankType" :value="item.value" v-model="selected">
              <!--<img src="./icon_select_ok.png" v-show="selected === item.value">-->
            </div>
          </div>
        </div>
        <router-link to="/my/myCar/addCar" tag="div" class="add-bank-car">
          <img src="./button_bank-card.png">
        </router-link>
        <div class="add-bot"></div>
        <div>{{selected}}</div>
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
        scrollX: true,
        wX: 0,
        probeType: 3,
        listenScroll: true,
        title: '我的银行卡',
        selectedIcon: false,
        selected: '',
        options: [
          {
            value: 'jiaotong',
            text: '交行'
          },
          {
            value: 'jianghang',
            text: '建行'
          },
          {
            value: 'zhaohang',
            text: '招行'
          }
        ]
      }
    },
    methods: {
      scroll(pos) {
        this.wX = pos.y
      },
      moveX() {
        console.log(1)
      },
      back() {
        this.$router.back()
      }
    },
    components: {
      headerBar,
      Scroll
    },
    watch: {
      wX(newX) {
        console.log(newX)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/base.styl"
  .my-car
    position: fixed
    top: 44px
    bottom: 0
    width: 100%
    z-index: 300
    background: $color-background-d
    .wrapper
      .banner
        height: 150px
      .add-bank-car
        padding: 10px 10px 14px 10px
        box-sizing: border-box
        border-radius: 8px
        background: $color-background
        margin: 10px
        img
          width: 100%
      .add-bot
        height: 40px
        width: 100%
      .bank-type-box
        position: relative
        width: 100%
        overflow: hidden
        .bank-type
          display: flex
          padding: 25px 10px
          box-sizing: border-box
          margin: 10px
          border-radius: 8px
          overflow: hidden
          box-sizing: border-box
          &.jiaotong
            background: #4859A1
            color: #4859A1
          &.jianghang
            background: #52cad4
            color: #52cad4
          &.zhaohang
            background: #ec9f4c
            color: #ec9f4c
          .bank-icon
            flex: 0 0 50px
            width: 50px
            height: 50px
            line-height: 50px
            text-align: center
            font-weight: 700
            border-radius: 25px
            background: $color-background
          .bank-info
            flex: 1
            padding-left: 10px
            color: $color-text-f
            h1
              font-size: 6vw
              margin: 25px 0
            h3
              font-size: 5vw
              margin-bottom: 8px
            p
              font-size: 2vw
              color: $color-theme-h
              margin-bottom: 8px
          .bank-selected
            flex: 0 0 24px
            display: flex
            align-items: center
            text-align: right
            img
              display: inline-block
              height: 24px
            input
              position: absolute
              left: 0
              top: 0
              width: 100%
              height: 100%
              opacity: 0


  .slide-enter-active, .slide-leave-active
    transition: all 0.5s
  .slide-enter, .slide-leave-active
    transform: translate3d(100%, 0, 0)
</style>
