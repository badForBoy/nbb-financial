<template>
  <div class="my" @click="go">
    <div class="info">
      <div class="info-title" v-show="infoTitle">
        <span><img src="./icon_hot.png"></span>
        <span class="title">农爸比第一期</span>
      </div>
      <div class="goods-title" v-show="goodsTitle">
        千岛湖年味猪第一期
      </div>
      <div class="profit" v-show="profit">
        <div class="probability">11.5<span class="small">%</span></div>
        <div class="title">预期年化收益率</div>
      </div>
      <div class="goods">
        <div class="item">
          <div class="count">230头</div>
          <div class="name">年味猪</div>
        </div>
        <div class="item">
          <div class="count">300只</div>
          <div class="name">放羊养</div>
        </div>
        <div class="item">
          <div class="count">60头</div>
          <div class="name">水牛</div>
        </div>
      </div>
      <div class="btn" v-show="btn">
        <span :class="btnColor">立即抢购</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      goodslist: {
        type: Array,
        default: function () {
          return []
        }
      },
      infoTitle: {
        type: Boolean,
        default: true
      },
      goodsTitle: {
        type: Boolean,
        default: true
      },
      profit: {
        type: Boolean,
        default: true
      },
      btn: {
        type: Boolean,
        default: true
      },
      btnColor: {
        type: String,
        default: 'red'
      }
    },
    methods: {
      go() {
        this.$emit('godetail')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/base.styl"

  .my
    background: $color-background
    margin-bottom: 12px
    .h-title
      display: flex
      height: 40px
      padding: 0 10px
      border-1px($color-theme-e)
      .item
        flex: 1
        align-self: center
        &.my-title
          text-align: left
          font-size: $font-size-medium
          color: $color-text
        &.more
          text-align: right
          font-size: $font-size-small
          color: $color-text-l
          span
            margin-left: 5px
            img
              height: 8px
    .info
      background: $color-background
      .info-title
        font-size: 0
        padding: 10px 10px
        display: flex
        box-sizing: border-box
        span
          font-size: $font-size-small
          color: $color-text-l
          padding-right: 4px
          height: 16px
          &.title
            padding: 2px 0
            &:after
              border: none
          img
            height: 16px
            vertical-align: bottom
      .goods-title
        font-size: $font-size-large-x
        color: $color-text
        text-align: center
        padding: 5px 0
      .profit
        display: flex
        align-items: flex-end
        padding: 10px 0
        .probability
          flex: 0 0 60%
          font-size: $font-size-large-xl
          color: $color-theme-b
          font-weight: 700
          text-align: right
          .small
            padding: 0 2px
            font-size: $font-size-small
        .title
          flex: 1
          font-size: $font-size-small
          color: $color-text-l
          padding-left: 5px
          padding-bottom: 3px
      .goods
        display: flex
        padding: 10px 0
        .item
          flex: 1
          border-right: 1px solid #e2e2e2
          text-align: center
          &:last-child
            border: none
          .count
            font-size: $font-size-medium-x
            color: $color-text-d
            line-height: 26px
          .name
            font-size: $font-size-small
            color: $color-text-l
      .btn
        text-align: center
        padding: 10px
        span
          display: block
          background: $color-text-d
          padding: 10px 0
          border-radius: 20px
          color: $color-text-f
          font-size: $font-size-medium
          &.blue
            background: $color-theme
          &.red
            background: $color-theme-b

</style>
