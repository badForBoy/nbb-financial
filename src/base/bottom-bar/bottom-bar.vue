<template>
  <div class="bottom-bar">
    <div class="border"></div>
    <div class="bar-parcage">
      <router-link class="item" to="/home">
        <div class="icon icon-farm"></div>
        <div class="text">农场</div>
      </router-link>
      <router-link class="item"  to="/assets">
        <div class="icon icon-assets"></div>
        <div class="text">资产</div>
      </router-link>
      <router-link class="item"  to="/order">
        <div class="icon icon-order"></div>
        <div class="text">订单</div>
      </router-link>
      <router-link class="item" to="/my">
        <div class="icon icon-me"></div>
        <div class="text">我的</div>
      </router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/base.styl"
  .bottom-bar
    position: fixed
    z-index: 100
    bottom: 0
    left: 0
    right: 0
    height: 48px
    background: $color-background
    .border
      border-1px($color-theme-e)
    .bar-parcage
      display: flex
      padding-top: 4px
      .item
        flex: 1
        text-align: center
        font-size: $font-size-small
        color: $color-text-l
        .icon
          display: inline-block
          background-repeat: no-repeat
          width: 24px
          height: 24px
          background-size: 24px 24px !important
          &.icon-farm
            background:url("icon_farm_default.png")
          &.icon-assets
            background:url("icon_assets_default.png")
          &.icon-order
            background:url("icon_order_default.png")
          &.icon-me
            background:url("icon_me_default.png")
        &.router-link-active
          color: $color-theme
          .icon-farm
            background:url("icon_farm_select.png")
          .icon-assets
            background:url("icon_assets_select.png")
          .icon-order
            background:url("icon_order_select.png")
          .icon-me
            background:url("icon_me_select.png")
</style>
