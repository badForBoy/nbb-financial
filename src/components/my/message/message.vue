<template>
  <div class="message">
    <header-bar @gohome="back" :title="title"></header-bar>
    <scroll class="wrapper">
      <div>
        <div class="message-list">
          <p class="date">2017.10.12 10:25:36</p>
          <div class="message-content">
            <h3>订单信息</h3>
            <p>您已经成功购买农爸比千岛湖年味猪第1期10头您已经成功购买农爸比千岛湖年味猪第1期10头您已经成功购买农爸比千岛湖年味猪第1期10头</p>
          </div>
        </div>
        <div class="message-list">
          <p class="date">2017.10.12 10:25:36</p>
          <div class="message-content">
            <h3>订单信息</h3>
            <p>您已经成功购买农爸比千岛湖年味猪第1期10头您已经成功购买农爸比千岛湖年味猪第1期10头您已经成功购买农爸比千岛湖年味猪第1期10头</p>
          </div>
        </div>
        <div class="message-list">
          <p class="date">2017.10.12 10:25:36</p>
          <div class="message-content">
            <h3>订单信息</h3>
            <p>您已经成功购买农爸比千岛湖年味猪第1期10头您已经成功购买农爸比千岛湖年味猪第1期10头您已经成功购买农爸比千岛湖年味猪第1期10头</p>
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
        title: '我的消息'
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
  .message
    position: fixed
    top: 44px
    bottom: 0
    width: 100%
    background: $color-background-d
    z-index: 200
    .wrapper
      .message-list
        padding: 10px
        box-sizing: border-box
        margin-bottom: 10px
        .date
          text-align: center
          font-size: $font-size-medium
          color: $color-text-l
          margin: 10px
        .message-content
          border: 1px solid $color-theme-e
          background: $color-background
          border-radius: 8px
          padding: 20px 10px
          h3
            font-size: $font-size-medium-x
            color: $color-text
            font-weight: 700
            margin-bottom: 10px
          p
            font-size: $font-size-medium
            color: $color-text-d
            line-height: 1.4
</style>
