<template>
  <div class="bill">
    <header-bar @gohome="back" :title="title"></header-bar>
    <scroll :data="list" class="wrapper">
      <div>
        <div class="detail-group">
          <div class="item">
            <p>资产总额</p>
            <p class="item-right red">￥10000.00</p>
          </div>
          <div class="item item-lager">
            <p>
              提现到银行卡
              <span class="small">2017.10.12 10:30:30</span>
            </p>
            <p class="item-right reduce">
              -300.00
              <span class="small text-right">审核中</span>
            </p>
          </div>
          <div class="item item-lager">
            <p>
              提现到支付宝
              <span class="small">2017.10.12 10:30:30</span>
            </p>
            <p class="item-right reduce">
              -300.00
              <span class="small text-right">审核中</span>
            </p>
          </div>
          <div class="item item-lager">
            <p>
              购买千岛湖年味猪第1期
              <span class="small">2017.10.12 10:30:30</span>
            </p>
            <p class="item-right reduce">
              -300.00
              <span class="small text-right">审核中</span>
            </p>
          </div>
          <div class="item item-lager">
            <p>
              购买千岛湖年味猪第1期
              <span class="small">2017.10.12 10:30:30</span>
            </p>
            <p class="item-right add">
              +2000.00
              <span class="small text-right">审核中</span>
            </p>
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
        list: [],
        title: '资产明细'
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
  .bill
    position: fixed
    top: 44px
    bottom: 0
    width: 100%
    background: $color-theme-e
    z-index: 200
    .wrapper
      height: 100%
      overflow: hidden
      .detail-group
        .item-lager
          height: 68px
          span.small
            display: block
            margin-top: 10px
            font-size: $font-size-small
            color: $color-text-l
  .text-right
    text-align: right
</style>
