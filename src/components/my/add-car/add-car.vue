<template>
  <div class="add-car">
    <header-bar @gohome="back" :title="title"></header-bar>
    <scroll class="wrapper">
      <div>
        <div class="detail-group">
          <div class="item">
            <p class="item-left">持卡人</p>
            <input type="text" class="item-right input" placeholder="请输入持卡人姓名">
          </div>
          <div class="item">
            <p class="item-left">银行名称</p>
            <input type="text" class="item-right input" placeholder="请输入银行名称">
          </div>
          <div class="item">
            <p class="item-left">银行卡号</p>
            <input type="text" class="item-right input" placeholder="请输入银行卡号">
          </div>
        </div>
        <div class="wrong">
          <p>*请输入正确的银行卡信息</p>
        </div>
        <div class="btn">
          <span :class="{'red': checked}">确认添加</span>
        </div>
        <div class="group-checkbox">
          <span class="icon-check" :class="{'yes':checked,'no':!checked}"></span>
          <!--<img src="./button_select_1.png">-->
          <input type="checkbox" id="checkbox" v-model="checked">
          <label for="checkbox">本人已阅读并同意{{ checked }}</label>
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
        title: '添加银行卡',
        checked: true
      }
    },
    methods: {
      back() {
        this.$router.back()
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

  .add-car
    position: fixed
    top: 44px
    bottom: 0
    width: 100%
    background: $color-background-d
    z-index: 300
    .detail-group
      .item-left
        flex: 0 0 68px
      .item-right
        flex: 1
    .btn
      text-align: center
      padding: 0 10px
      box-sizing: border-box
      margin-top: 60px
      span
        display: block
        padding: 15px 0
        border-radius: 8px
        color: #fff
        font-size: $font-size-medium
        background: $color-text-l
        &.red
          background: $color-theme-b

  .input
    padding: 6px 4px

  .wrong
    font-size: $font-size-medium
    color: $color-theme-b
    padding: 4px 10px

  .group-checkbox
    display: flex
    padding: 16px 10px
    color: $color-text-l
    position: relative
    span
      position: absolute
      left: 10px
      top: 14px
      background-repeat: no-repeat
      width: 18px
      height: 18px
      background-size: 18px 18px !important
      &.yes
        background: url("button_select_1.png")
      &.no
        background: url("button_select_2.png")
    #checkbox
      margin-right: 10px
      opacity: 0
</style>
