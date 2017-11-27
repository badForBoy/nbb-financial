<template>
  <div>
    <div class="center">
      <vue-core-image-upload
        class="btn btn-primary"
        :crop="false"
        @imageuploaded="imageUploded"
        :max-file-size="5242880"
        url="http://101.198.151.190/api/upload.php" >
      </vue-core-image-upload>
    </div>
    <!--<vue-core-image-upload-->
      <!--class="btn btn-primary"-->
      <!--:crop="false"-->
      <!--@imageuploaded="imageUploded"-->
      <!--:max-file-size="5242880"-->
      <!--:multiple="true"-->
      <!--:multiple-size="3"-->
      <!--url="http://101.198.151.190/api/upload2.php">-->
    <!--</vue-core-image-upload>-->
  </div>
</template>

<script type="text/ecmascript-6">
  import VueCoreImageUpload from 'vue-core-image-upload'

  export default{
    components: {
      VueCoreImageUpload
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
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
