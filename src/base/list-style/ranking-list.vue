<template>
  <div class="ranking-list">
    <div class="ranking-left">
      <div class="left-item my-time ranking-time" v-show="rankingtime">
        <p>排名</p>
        <p>14</p>
      </div>
      <div class="left-item ranking-time default" v-show="!rankingtime">
        15
      </div>
      <div class="left-item pic">
        <img src="//img.hb.aicdn.com/ae33521b96401212eee4ca4c2e8fd5001c380b251d3b5-LgMIla_fw658">
      </div>
      <div class="left-item ranking-name">农爸比007</div>
    </div>
    <div class="ranking-right">
      286头
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      rankingtime: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/base.styl"
  .ranking-list
    display: flex
    justify-content: space-between
    align-items: center
    background: $color-background
    height: 65px
    box-sizing: border-box
    padding: 0 15px
    border-1px($color-theme-e)
    .ranking-left
      display: flex
      justify-content: flex-start
      width: 300px
      .left-item
        line-height: 48px
        &.pic
          width: 48px
          height: 48px
          overflow: hidden
          padding-left: 6px
          img
            width: 48px
            height: 48px
            border-radius: 24px
            background: $color-text-d
        &.ranking-name
          font-size: $font-size-medium
          color: $color-text
          padding-left: 14px
        &.ranking-time
          width: 32px
          height: 32px
          line-height: 26px
          margin: 8px 8px 8px 0
          text-align: center
          font-size: $font-size-medium
          color: $color-text-f
          background-repeat: no-repeat
          background-size: 32px 32px !important
          &.default
            background: url("./icon_rank_0.png")
          &.rank-1
            background: url("./icon_rank_1.png")
          &.rank-2
            background: url("./icon_rank_2.png")
          &.rank-3
            background: url("./icon_rank_3.png")
          &.my-time
            font-size: $font-size-medium !important
            color: $color-theme
            line-height: 20px
            font-weight: 700 !important
    .ranking-right
      font-size: $font-size-medium !important
      color: $color-text-l

</style>
