<template>
  <div class="ranking">
    <header-bar @gohome="back"></header-bar>
    <scroll class="wrapper">
      <div>
        <div class="ranking-group">
          <rankling-list :rankingtime="rankingtime"></rankling-list>
        </div>
        <div class="ranking-group">
          <rankling-list></rankling-list>
          <rankling-list></rankling-list>
          <rankling-list></rankling-list>
          <rankling-list></rankling-list>
          <rankling-list></rankling-list>
          <rankling-list></rankling-list>
          <rankling-list></rankling-list>
          <rankling-list></rankling-list>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import headerBar from '../../base/header-bar/header-bar.vue'
  import Scroll from '../../base/scroll/scroll.vue'
  import RanklingList from '../../base/list-style/ranking-list.vue'

  export default{
    created() {
      this.rankingtime = true
    },
    components: {
      headerBar,
      Scroll,
      RanklingList
    },
    methods: {
      back() {
        this.$router.back()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/base.styl"
  .ranking
    position: fixed
    z-index: 300
    top: 44px
    bottom: 0
    width: 100%
    background: $color-background-d
    .ranking-group
      margin-bottom: 20px
      border-1px($color-theme-e)
      .ranking-list
        &:last-child
          &:after
            border: none
</style>
