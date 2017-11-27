<template>
  <div class="my-contract">
    <router-view></router-view>
    <header-bar @gohome="back" :title="title"></header-bar>
    <scroll class="wrapper">
      <div>
        <div class="detail-group">
          <router-link tag="div" to="/my/myContract/rule" class="item">
            <p>千岛湖年味猪第1期</p>
            <p class="go item-right"><img src="./icon_more.png"></p>
          </router-link>
          <div class="item">
            <p>千岛湖年味猪第1期</p>
            <p class="go item-right"><img src="./icon_more.png"></p>
          </div>
          <div class="item">
            <p>千岛湖年味猪第1期</p>
            <p class="go item-right"><img src="./icon_more.png"></p>
          </div>
          <div class="item">
            <p>千岛湖年味猪第1期</p>
            <p class="go item-right"><img src="./icon_more.png"></p>
          </div>
          <div class="item">
            <p>千岛湖年味猪第1期</p>
            <p class="go item-right"><img src="./icon_more.png"></p>
          </div>
          <div class="item">
            <p>千岛湖年味猪第1期</p>
            <p class="go item-right"><img src="./icon_more.png"></p>
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
        title: '我的合同'
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
  .my-contract
    position: fixed
    top: 44px
    bottom: 0
    width: 100%
    background: $color-background-d
    z-index: 200
</style>
