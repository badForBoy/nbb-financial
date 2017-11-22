<template>
  <div class="panic-buying">
    <header-bar @gohome="back"></header-bar>
    <scroll :data="list" class="wrapper">
      <div>
        <div class="detail-group">
          <div class="item">
            <p>订单号</p>
            <p class="item-right">245785612</p>
          </div>
          <div class="item">
            <p>姓名</p>
            <p class="item-right">萨丢斯</p>
          </div>
          <div class="item">
            <p>省份证号码</p>
            <p class="item-right">123456789</p>
          </div>
        </div>

        <div class="detail-group">
          <div class="item">
            <p>产品名称</p>
            <p class="item-right">千岛湖年味猪第一期</p>
          </div>
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
          <div class="item">
            <p>合计金额</p>
            <p class="item-right red">123456789</p>
          </div>
        </div>

        <div class="detail-group">
          <div class="item">
            <p>可用9000农币抵90元</p>
            <div class="item-right">
              <mt-switch v-model="value"></mt-switch>
            </div>
          </div>
        </div>

        <div class="title">
          请选择支付方式
        </div>

        <div class="">
          <mt-radio
            align="right"
            v-model="value"
            :options="options">
          </mt-radio>
        </div>

      </div>
    </scroll>
    <div class="buy-btn" @click="panicBuying">
      立即支付
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import headerBar from '../../base/header-bar/header-bar.vue'
  import Scroll from '../../base/scroll/scroll.vue'
  import { Switch, Radio } from 'mint-ui'

  export default{
    data() {
      return {
        list: [],
        count: 0
      }
    },
    created() {
      this.options = [
        {
          label: '余额支付',
          value: 'ye'
        },
        {
          label: '微信支付',
          value: 'wx'
        },
        {
          label: '支付宝',
          value: 'zfb'
        }
      ]
    },
    methods: {
      add() {
        return this.count++
      },
      reduce() {
        if (this.count > 0) {
          this.count--
        }
        return this.count
      },
      back() {
        this.$router.back()
      }
    },
    components: {
      headerBar,
      Scroll,
      Switch,
      Radio
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/base.styl"

  .panic-buying
    position: fixed
    top: 44px
    bottom: 44px
    width: 100%
    background: $color-background-d
    z-index: 200
    .wrapper
      height: 100%
      overflow: hidden

  .mint-radiolist-title
    display: none

  .mint-radiolist-label
    padding: 0

</style>
