<template>
  <div class="invitation">
    <header-bar @gohome="back" :title="title"></header-bar>
    <scroll class="wrapper">
      <div class="invitation-content">
        <div class="bg-pic">
          <img src="./img_invite_1.png" alt="">
        </div>
        <div class="btn-invi">
        <span>
          <img src="./button_invite.png">
        </span>
        </div>
        <div class="bg-pic">
          <img src="./img_invite_2.png" alt="">
        </div>
        <div class="name-list">
          <div class="group">
            <p>13675635689</p>
            <p>2017.10.12 10:30:30</p>
          </div>
          <div class="group">
            <p>13675635689</p>
            <p>2017.10.12 10:30:30</p>
          </div>
          <div class="group">
            <p>13675635689</p>
            <p>2017.10.12 10:30:30</p>
          </div>
          <div class="group">
            <p>13675635689</p>
            <p>2017.10.12 10:30:30</p>
          </div>
          <div class="group">
            <p>13675635689</p>
            <p>2017.10.12 10:30:30</p>
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
        title: '邀请好友'
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
  @import "../../../common/stylus/variable.styl"
  .invitation
    position: fixed
    top: 44px
    bottom: 0
    width: 100%
    background: #da4511
    z-index: 200
    .invitation-content
      .btn-invi
        text-align: center
        span
          /*margin-top: 100%*/
          width: 35%
          display: inline-block
          img
            width: 100%
      .bg-pic
        img
          width: 100%
      .name-list
        box-sizing: border-box
        padding: 10px
        .group
          display: flex
          justify-content: space-between
          font-size: $font-size-medium-x
          color: $color-text-f
          padding: 3px 0
</style>
