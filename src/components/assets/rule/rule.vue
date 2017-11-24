<template>
  <div class="rule">
    <header-bar @gohome="back" :title="title"></header-bar>
    <scroll class="wrapper">
      <div class="">
        <div class="rule-wrapper">
          <div class="rule-item">
            <h3>一、提现次数：</h3>
            <p>每月可以提现3次；</p>
          </div>
          <div class="rule-item">
            <h3>二、提现金额：</h3>
            <p>每笔提现需大于2000元；</p>
          </div>
          <div class="rule-item">
            <h3>三、提现账户：</h3>
            <p>可以选择提现至工商银行、农业银行、支
              付宝、财付通及欧飞信用点账户（信用点
              账户仅支持SUP账户绑定的BOSS账户）</p>
          </div>
          <div class="rule-item">
            <h3>四、提现周期：</h3>
            <p>周一至周五(工作日)，每天处理两次提现；
              上午：10:30之前申请，当天14:00之前到账；
              下午：15:30之前申请，当天17:30之前到账；
              周六、日及法定节假日，处理一次提现；
              上午：9:30之前申请，当天17:30之前到账；</p>
          </div>
          <div class="rule-item">
            <h3>五、提现费率：</h3>
            <p>提现费率：3元/笔</p>
          </div>
          <div class="rule-item">
            <h3>六、备注：</h3>
            <p>工商银行提现仅支持工作日，周末及节假日请走其他 通道。</p>
          </div>
          <div class="rule-item bottom">
            <p>
              备注：如遇支付平台故障或网络故障， 提现可能会稍有延迟，敬请谅解。
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
        title: '提现规则'
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

  .rule
    position: fixed
    top: 44px
    bottom: 0
    width: 100%
    z-index: 300
    background: $color-background-d
    .wrapper
      .rule-wrapper
        padding-top: 20px
        background: $color-background
        .rule-item
          padding: 5px 10px
          color: $color-text
          h3
            font-size: $font-size-medium-x
            margin-bottom: 6px
          p
            font-size: $font-size-medium
            line-height: 1.4
            color: $color-text-d
            text-align: justify
          &.bottom
            padding: 80px 40px
            text-align: center

</style>
