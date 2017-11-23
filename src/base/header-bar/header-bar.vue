<template>
  <div class="header-bar">
    <div class="item left">
      <span class="icon icon-back" @click="back">
        <img src="./nav_icon_back.png">
      </span>
      <span class="icon icon-close">
        <img src="./nav_icon_close.png">
      </span>
    </div>
    <div class="item center">
      {{title}}
    </div>
    <div class="item right">
      <span v-show="question" @click="questionGo" class="icon icon-problem">
        <img src="./nav_icon_problem.png">
      </span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      question: {
        type: Boolean,
        default: false
      },
      title: {
        type: Object,
        default: ''
      }
    },
    methods: {
      back() {
        this.$emit('gohome')
      },
      questionGo() {
        this.$emit('questionGo')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/base.styl"

  .header-bar
    position: fixed !important
    z-index: 100
    top: 0
    left: 0
    right: 0
    height: 44px
    display: flex
    padding: 0 15px
    border-1px($color-theme-e)
    background: $color-text-f
    .item
      flex: 1
      min-width: 1px
      min-height: 1px
      display: inline-block
      align-self: center
      &.left
        .icon
          padding-right: 20px
        .icon-back
          img
            height: 18px
        .icon-close
          img
            height: 14px
            padding: 2px 0
       &.right
         text-align: right
        .icon-problem
             img
               height: 16px
      &.center
        font-size: $font-size-medium-x
        color: $color-text
        text-align: center
</style>
