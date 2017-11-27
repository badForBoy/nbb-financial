<template>
  <div class="withdrawals">
    <router-view></router-view>
    <header-bar @gohome="back" @questionGo="goRule" :question="question" :title="title"></header-bar>
    <scroll class="wrapper">
      <div>
        <div class="detail-group">
          <div class="item">
            <div>提现方式</div>
            <select @change="togglePayWay" v-model="selected" class="item-right text-right input">
              <span></span>
              <option :value="item.value" v-for="(item, index) in options">{{item.label}}</option>
              <span></span>
            </select>
          </div>
          <div class="pay-zfb" v-show="payWay">
            <div class="item">
              <div>支付宝姓名</div>
              <input type="text" class="item-right text-right input" placeholder="请输入真实姓名">
            </div>
            <div class="item">
              <div>支付宝账号</div>
              <input type="text" class="item-right text-right input" placeholder="请输入支付宝账号">
            </div>
          </div>
          <div class="pay-bank" v-show="!payWay">
            <div class="item" @click="selectBank">
              <div>提现至</div>
              <p class="go item-right">
                <img src="./icon_more.png">
              </p>
            </div>
          </div>
        </div>
        <div class="detail-group">
          <div class="item">
            <p>金额（元）</p>
            <p class="item-right">当前账户余额1000.00元</p>
          </div>
        </div>
        <div class="title">
          本月还可提现
        </div>
        <div class="btn">
          <span class="red">确定</span>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from '../../../base/scroll/scroll.vue'
  import headerBar from '../../../base/header-bar/header-bar.vue'
  export default{
    data() {
      return {
        title: '提现',
        payWay: false,
        selected: 'bank',
        options: [
          {
            label: '支付宝',
            value: 'zfb'
          },
          {
            label: '银行卡',
            value: 'bank'
          }
        ]
      }
    },
    created() {
      this.question = true
    },
    computed: {
    },
    methods: {
      goRule() {
        this.$router.push('/assets/withdrawals/rule')
      },
      selectBank() {
        this.$router.push('/assets/withdrawals/selectBank')
      },
      togglePayWay() {
        this.payWay = !this.payWay
      },
      back() {
        this.$router.back()
      }
    },
    components: {
      Scroll,
      headerBar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/base.styl"
  .withdrawals
    position: fixed
    top: 44px
    bottom: 0
    width: 100%
    z-index: 200
    background: $color-background-d
    .detail-group
      .item
        .item-right.input
          padding: 6px 4px;
          width: 60%;
          text-align: right
          span
            width: 100%
            padding: 0 6px
    .btn
      text-align: center
      padding: 0 10px
      box-sizing: border-box
      margin-top: 60px
      span
        display: block
        background: $color-theme-b
        padding: 15px 0
        border-radius: 8px
        color: $color-text-f
        font-size: $font-size-medium

  .text-right
    text-align: right

</style>
