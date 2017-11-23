<template>
  <div class="cost">
    <header-bar @gohome="back" :title="title"></header-bar>
    <scroll class="wrapper">
      <div>
        <div class="detail-group">
          <div class="item">
            <p>养殖成本</p>
            <p class="item-right red">￥9000.00</p>
          </div>
        </div>

        <div class="title">
          <div class="item item60">产品名称</div>
          <div class="item item20 left">养殖周期</div>
          <div class="item item20 right">成本</div>
        </div>
        <div class="detail-group">
          <div class="item">
            <p class="item60">千岛湖年味猪第1期</p>
            <p class="item20 left">365天</p>
            <p class="item-right red item20">￥600.00</p>
          </div>
          <div class="item">
            <p class="item60">千岛湖年味猪第1期</p>
            <p class="item20 left">365天</p>
            <p class="item-right red item20">￥600.00</p>
          </div>
          <div class="item">
            <p class="item60">千岛湖年味猪第1期</p>
            <p class="item20 left">365天</p>
            <p class="item-right red item20">￥600.00</p>
          </div>
          <div class="item">
            <p class="item60">千岛湖年味猪第1期</p>
            <p class="item20 left">365天</p>
            <p class="item-right red item20">￥600.00</p>
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
        title: '养殖成本'
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
  .cost
    position: fixed
    top: 44px
    bottom: 0
    width: 100%
    z-index: 200
    background: $color-theme-e
    .wrapper
      .detail-group
        .item
          p
            max-width: inherit
        .item20
          flex: 0 0 20%
          &.right
            text-align: right
          &.left
            text-align: left
        .item60
          flex: 0 0 60%
          padding-right: 8px
          box-sizing: border-box
      .title
        display: flex
        .item20
          flex: 0 0 20%
          &.right
            text-align: right
          &.left
            text-align: left
        .item60
          flex: 0 0 60%
          padding-right: 8px
          box-sizing: border-box
</style>
