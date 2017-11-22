<template>
  <div class="goods-detail">
    <header-bar @gohome="back"></header-bar>
    <div class="warn" v-show="wran">
      <span>
        <img src="./icon_warn.png">
      </span>
      <span>您还没有进行身份认证，请认证后购买</span>
      <span class="close">
        <img src="./icon_close.png">
      </span>
    </div>
    <scroll :data="list" class="wrapper">
      <div>
        <goods-list :btn="listbtn" :listcount="listcount"></goods-list>
        <div class="detail-group">
          <div class="item">
            <p>产品分类</p>
            <p class="item-right">猪</p>
          </div>
          <div class="item">
            <p>产品规模</p>
            <p class="item-right">200头</p>
          </div>
          <div class="item">
            <p>入栏时间</p>
            <p class="item-right">2017-10-12 10:30:00</p>
          </div>
          <div class="item">
            <p>出栏时间</p>
            <p class="item-right">2017-10-12 10:30:00</p>
          </div>
          <div class="item">
            <p>收益兑换方式</p>
            <p class="item-right">年收益率10%</p>
          </div>
          <div class="item">
            <p>产品介绍</p>
            <p class="go item-right">
              <span>农爸比千岛湖年味猪是属于深山散养</span>
              <img src="./icon_more.png">
            </p>
          </div>
          <div class="item">
            <p>产品合同</p>
            <p class="go item-right">
              <img src="./icon_more.png">
            </p>
          </div>
          <div class="item">
            <p>历史收益记录</p>
            <p class="go item-right">
              <img src="./icon_more.png">
            </p>
          </div>
          <div class="item">
            <p>抢购排名</p>
            <p class="go item-right">
              <img src="./icon_more.png">
            </p>
          </div>
        </div>

        <div class="detail-group">
          <div class="item">
            <p>农场名称</p>
            <p class="item-right">农爸比千岛湖一号</p>
          </div>
          <div class="item">
            <p>编号</p>
            <p class="item-right">SDSADASDAS484548</p>
          </div>
          <div class="item">
            <p>农场负责人</p>
            <p class="item-right">A实阿斯顿</p>
          </div>
          <div class="item">
            <p>农村合伙负责人</p>
            <p class="item-right">阿斯顿</p>
          </div>
          <div class="item">
            <p>农场经营范围</p>
            <p class="item-right">猪，牛，羊养殖</p>
          </div>
          <div class="item">
            <p>农场介绍</p>
            <p class="go item-right">
              <span>农爸比千岛湖1号位于浙江省杭州市</span>
              <img src="./icon_more.png">
            </p>
          </div>
        </div>

        <div class="detail-group">
          <div class="item">
            <p>购买数量 <span class="small">(限购10头)</span> </p>
            <p class="count item-right">
              <span @click="reduce" class="num-btn">
                <img src="./icon_minus.png">
              </span>
              <span class="num">{{count}}</span>
              <span @click="add" class="num-btn">
                <img src="./icon_add.png">
              </span>
            </p>
          </div>
        </div>
        <div class="more">
          点击查看商品详情
        </div>
      </div>
    </scroll>
    <div class="buy-btn">
      立即抢购
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import headerBar from '../../base/header-bar/header-bar.vue'
  import goodsList from '../../base/list-style/goods-list.vue'
  import Scroll from '../../base/scroll/scroll.vue'

  export default{
    created() {
      this.listbtn = false
      this.listcount = 60
    },
    data() {
      return {
        list: [],
        count: 0,
        wran: true
      }
    },
    methods: {
      back() {
        this.$router.back()
      },
      add() {
        return this.count++
      },
      reduce() {
        if (this.count > 0) {
          this.count--
        }
        return this.count
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
  @import "../../common/stylus/detailgroup.styl"

  .goods-detail
    position: fixed
    top: 76px
    bottom: 44px
    width: 100%
    background: $color-theme-e
    .warn
      position: fixed
      top: 44px
      width: 100%
      display: flex
      justify-content: space-between
      align-items: center
      font-size: $font-size-medium
      color: $color-theme-b
      background: $color-theme-p
      height: 32px
      box-sizing: border-box
      padding: 0 10px
      span
        img
          height: 16px
      .close
        img
          height: 14px
    .wrapper
      height: 100%
      overflow: hidden
      .more
        text-align: center
        font-size: $font-size-medium
        color: $color-text-d
        padding: 20px

  .buy-btn
    position: fixed
    bottom: 0
    left: 0
    right: 0
    height: 44px
    line-height: 44px
    text-align: center
    background: $color-theme-b
    color: $color-text-f
</style>
