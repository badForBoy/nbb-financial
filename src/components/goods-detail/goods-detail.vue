<template>
  <div class="goods-detail">
    <header-bar @gohome="back"></header-bar>
    <scroll :data="list" class="wrapper">
      <div>
        <goods-list></goods-list>
        <div class="detail">
          <div class="item">
            <span>产品分类</span>
            <shan>猪</shan>
          </div>
          <div class="item">
            <span>产品规模</span>
            <shan>200头</shan>
          </div>
          <div class="item">
            <span>入栏时间</span>
            <shan>2017-10-12 10:30:00</shan>
          </div>
          <div class="item">
            <span>出栏时间</span>
            <shan>2017-10-12 10:30:00</shan>
          </div>
          <div class="item">
            <span>收益兑换方式</span>
            <shan>年收益率10%</shan>
          </div>
          <div class="item">
            <span>产品介绍</span>
            <shan>农爸比千岛湖年味猪是属于深山散养</shan>
          </div>
          <div class="item">
            <span>产品合同</span>
            <shan></shan>
          </div>
          <div class="item">
            <span>历史收益记录</span>
            <shan></shan>
          </div>
          <div class="item">
            <span>抢购排名</span>
            <shan></shan>
          </div>
        </div>

        <div class="detail">
          <div class="item">
            <span>农场名称</span>
            <shan>农爸比千岛湖一号</shan>
          </div>
          <div class="item">
            <span>编号</span>
            <shan>SDSADASDAS484548</shan>
          </div>
          <div class="item">
            <span>农场负责人</span>
            <shan>A实阿斯顿</shan>
          </div>
          <div class="item">
            <span>农村合伙负责人</span>
            <shan>阿斯顿</shan>
          </div>
          <div class="item">
            <span>农场经营</span>
            <shan>年收益率10%</shan>
          </div>
          <div class="item">
            <span>产品介绍</span>
            <shan>农爸比千岛湖年味猪是属于深山散养</shan>
          </div>
          <div class="item">
            <span>产品合同</span>
            <shan></shan>
          </div>
          <div class="item">
            <span>历史收益记录</span>
            <shan></shan>
          </div>
          <div class="item">
            <span>抢购排名</span>
            <shan></shan>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import headerBar from '../../base/header-bar/header-bar.vue'
  import goodsList from '../../base/list-style/goods-list.vue'
  import Scroll from '../../base/scroll/scroll.vue'

  export default{
    data() {
      return {
        list: []
      }
    },
    methods: {
      back() {
        this.$router.back()
      }
    },
    components: {
      headerBar,
      goodsList,
      Scroll
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/base.styl"

  .goods-detail
    position: fixed
    top: 44px
    bottom: 0
    width: 100%
    background: $color-theme-e
    .wrapper
      height: 100%
      overflow: hidden

  .detail
    height: 2000px
    background: $color-background

</style>
