<template>
  <div class="historical-record">
    <header-bar @gohome="back" :title="title"></header-bar>
    <scroll class="wrapper">
      <div>
        <div class="detail-group">
          <div class="item">
            <p>往期平均年化收益率</p>
            <p class="item-right red">15.0%</p>
          </div>
        </div>
        <div class="title">
          产品名称
        </div>
        <div class="detail-group">
          <div class="item">
            <p>千岛湖年味猪第1期</p>
            <p class="item-right red">15.6900%</p>
          </div>
          <div class="item">
            <p>千岛湖年味猪第1期</p>
            <p class="item-right red">16.01%</p>
          </div>
          <div class="item">
            <p>千岛湖年味猪第1期</p>
            <p class="item-right reduce">-14.58%</p>
          </div>
          <div class="item">
            <p>千岛湖年味猪第1期</p>
            <p class="item-right add">16.01%</p>
          </div>
          <div class="item">
            <p>千岛湖年味猪第1期</p>
            <p class="item-right reduce">-14.58%</p>
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
        title: '历史收益记录'
      }
    },
    components: {
      headerBar,
      Scroll
    },
    methods: {
      back() {
        this.$router.back()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/base.styl"
  .historical-record
    position: fixed
    z-index: 300
    top: 44px
    bottom: 0
    width: 100%
    background: $color-background-d
</style>
