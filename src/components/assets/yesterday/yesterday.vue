<template>
  <div class="yesterday">
    <header-bar @gohome="back" :title="title"></header-bar>
    <scroll class="wrapper">
      <div>
        <div class="detail-group">
          <div class="item">
            <p>昨日总收益</p>
            <p class="item-right red">+10000.00</p>
          </div>
          <div class="item">
            <p>千岛湖年味猪第1期</p>
            <p class="item-right red">+5.00</p>
          </div>
          <div class="item">
            <p>千岛湖年味猪第1期</p>
            <p class="item-right red">+5.00</p>
          </div>
          <div class="item">
            <p>千岛湖年味猪第1期</p>
            <p class="item-right red">+5.00</p>
          </div>
          <div class="item">
            <p>千岛湖年味猪第1期</p>
            <p class="item-right red">+5.00</p>
          </div>
          <div class="item">
            <p>千岛湖年味猪第1期</p>
            <p class="item-right red">+5.00</p>
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
        title: '昨日收益'
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
  .yesterday
    position: fixed
    top: 44px
    bottom: 0
    width: 100%
    z-index: 200
    background: $color-theme-e
</style>
