<template>
  <div class="personal-info">
    <router-view></router-view>
    <header-bar @gohome="back" :title="title"></header-bar>
    <scroll class="wrapper">
      <div>
        <div class="detail-group">
          <div class="item item-lager">
            <p>头像</p>
            <div class="go item-right per-pic">
              <img src="http://tupian.geimian.com/pic/2015/06/2015-06-27_210910.jpg">
            </div>
          </div>
          <div class="item">
            <p>昵称</p>
            <p class="go item-right">nbb123</p>
          </div>
          <div class="item">
            <p>手机号码</p>
            <p class="go item-right">13665786632</p>
          </div>
          <router-link tag="div" to="/my/personalInfo/nameCertification" class="item">
            <p>身份信息</p>
            <p class="go item-right">未认证<img src="./icon_more.png"></p>
          </router-link>
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
        title: '个人信息'
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
  .personal-info
    position: fixed
    top: 44px
    bottom: 0
    width: 100%
    background: $color-background-d
    z-index: 200
    .wrapper
      .detail-group
        .item-lager
          height: 60px
        .item
          .per-pic
            border-radius: 24px
            height: 48px
            width: 48px
            overflow: hidden
            img
              height: 48px
              width: 48px
              padding: 0
</style>
