<template>
  <div class="name-certification">
    <router-view></router-view>
    <header-bar :title="title" @gohome="back"></header-bar>
    <scroll class="wrapper">
      <div class="content-box">
        <div class="bg-img">
          <img src="./authentication_bj.png">
        </div>
        <div class="content-wrapper">
          <div class="detail-group">
            <div class="file-group">
              <label class="label">真实姓名</label>
              <input class="input" type="text" placeholder="请输入您的真实姓名，认证后不可更改">
            </div>
            <div class="file-group">
              <label class="label">身份证号</label>
              <input class="input" type="text" placeholder="请输入您真实姓名对应的身份证号">
            </div>
          </div>
          <div class="title">
            上传证件材料(身份证正面*1 身份证背面*1 手持身份证照片*1)
          </div>
          <div class="car-pic">
            <uploader class="" :src="'/api/imgs'"></uploader>
          </div>
          <!--<div class="car-pic">-->
            <!--<div class="item-pic">-->
              <!--<p>身份证正面</p>-->
            <!--</div>-->
          <!--</div>-->
          <div class="title">
            <span class="icon"></span>
            证件必须是清晰彩色原件电子版本，可以是扫描件或者数码拍摄
            照片，仅支持jpg、png、jpeg的图片格式。
          </div>
          <div class="h80px">
            <!--<router-link to="/my/personalInfo/nameCertification/uploadDemo">demo</router-link>-->
          </div>
        </div>
      </div>
    </scroll>
    <div class="btn">
      <span>确认保存</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import headerBar from '../../../base/header-bar/header-bar.vue'
  import Scroll from '../../../base/scroll/scroll.vue'
  import Uploader from '../../../base/uploader/uploader.vue'
  import VueCoreImageUpload from '../../../base/vue-core-image-upload/vue-core-image-upload.vue'

  export default{
    created() {
      this.title = '实名认证'
    },
    data() {
      return {
        fileList: []
      }
    },
    methods: {
      imageUploded(res) {
        if (res.errcode === 0) {
          this.fileList = res.data
        }
      },
      back() {
        this.$router.back()
      }
    },
    components: {
      headerBar,
      Scroll,
      Uploader,
      VueCoreImageUpload
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/base.styl"

  .name-certification
    position: fixed
    top: 44px
    bottom: 48px
    width: 100%
    background: $color-background-d
    z-index: 300
    .content-box
      padding: 82px 10px 20px
      position: relative
      .bg-img
        position: absolute
        left: 0
        top: 0
        img
          width: 100%
      .content-wrapper
        position: relative
        z-index: 10
        .detail-group
          border-radius: 8px
        .car-pic
          display: flex
          .item-pic
            flex: 1
            background: $color-background
            margin-right: 5px
            padding: 15px
            font-size: $font-size-medium
            color: $color-text-l
            justify-content: center
            text-align: center
            border-radius: 8px
            .icon-pic
              display: inline-block
              width: 28px
              height: 28px
              background: url("./icon_sfz_add.png") no-repeat
              background-size: 28px 28px
              margin-bottom: 8px
            &.last-child
              margin-right: 0
    .btn
      position: fixed
      bottom: 0
      width: 100%
      height: 48px
      line-height: 48px
      color: $color-background
      font-size: $font-size-medium
      background: $color-theme-b
      text-align: center

  .file-group
    display: flex
    align-items: center
    height: 48px
    padding: 8px 0
    &:last-child
      &:after
        border: none
    .label
      flex: 0 080px
      font-size: $font-size-medium
      color: $color-text
    .input
      flex: 1
      padding: 6px
      border: 1px solid $color-theme-e
      border-radius: 4px

  .title
    line-height: 18px
    .icon
      position: relative
      top: 3px
      display: inline-block
      width: 16px
      height: 16px
      margin-right: 2px
      background: url("./icon_warn.png") no-repeat
      background-size: 16px 16px
  .h80px
    width: 100%
    height: 80px
</style>
