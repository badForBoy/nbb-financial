<template>
  <div class="h-title">
    <div class="item my-title">
      我的养殖
    </div>
    <div class="item more" @click="go">
      查看明细
      <span>
          <img src="./icon_more.png">
        </span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    methods: {
      go() {
        this.$emit('gofarmgoods')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/base.styl"

  .h-title
    display: flex
    height: 40px
    padding: 0 10px
    border-1px($color-theme-e)
    background: $color-background
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
</style>
