<template>
  <div class="order-list">
    <div class="order-title">
      <p>订单号: 48784s878sad48</p>
      <p>待付款</p>
    </div>
    <div class="order-contend">
      <div class="item item-pic">
        <img src="http://tupian.geimian.com/pic/2015/06/2015-06-27_210910.jpg">
      </div>
      <div class="item item-text">
        <p>千岛湖年味猪第1期</p>
        <p>预期年化收益率：11.50%</p>
        <p class="bottom">养殖周期：180天</p>
      </div>
      <div class="item item-num red">
        x5
      </div>
    </div>
    <div class="order-active">
      <div class="active-left">
        实付：<span class="red">￥900.00</span>
      </div>
      <div class="active-right">
        <span class="close">取消订单</span>
        <span class="pay blue">立即付款</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/base.styl"
  .order-list
    background: $color-background
    margin-bottom: 10px
    .order-title
      padding: 10px
      display: flex
      justify-content: space-between
      color: $color-text
      font-size: $font-size-medium
      border-1px($color-theme-e)
    .order-contend
      border-1px($color-theme-e)
      padding: 10px
      display: flex
      .item-pic
        flex: 0 0 68px
        img
          width: 68px
          height: 68px
          border-radius: 8px
      .item-text
        flex: 1
        display: flex
        flex-direction: column
        align-content: space-between
        align-items: center
        justify-content: center
        height: 68px
        padding-left: 10px
        box-sizing: border-box
        color: $color-text-d
        font-size: $font-size-medium
        p
          flex: 1
          width: 100%
          overflow: hidden
          white-space: nowrap
          &.bottom
            display: flex
            align-items: flex-end
      .item-num
        flex: 0 0 48px
        align-self: flex-end
        text-align: right
        color: $color-theme-b
    .order-active
      display: flex
      justify-content: space-between
      padding: 20px 10px
      .active-left
        color: $color-text
        font-size: $font-size-medium
        .red
          color: $color-theme-b
      .active-right
        font-size: $font-size-medium-x
        .close
          color: $color-text-d
          border: 1px solid $color-theme-e
          padding: 6px 10px
          border-radius: 6px
        .pay
          color: $color-text-f
          padding: 7px 11px
          border-radius: 6px
          &.red
            background: $color-theme-b
          &.blue
            background: $color-theme
</style>
