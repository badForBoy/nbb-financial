<template>
  <div class="friends">
    <header-bar @gohome="back" :title="title"></header-bar>
    <div class="word">
      <ul>
        <li :class="{'active':index===currendIndex}" v-for="(item, index) in friendsList" @click="scrollTo(index)">
          {{item.title}}
        </li>
      </ul>
    </div>
    <scroll class="wrapper"
            ref="listContent"
            @scroll="scroll"
            :probeType="probeType"
            :listenScroll="listenScroll"
            :data="friendsList">
      <div ref="list">
        <div v-for="(item, index) in friendsList" ref="group">
          <h2 class="list-title">{{item.title}}</h2>
          <div class="friends-list">
            <div class="item-list" v-for="personal in item.items">
              <div class="pic">
                <img :src="personal.avatar">
              </div>
              <div class="name">{{personal.name}}</div>
            </div>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import headerBar from '../../../base/header-bar/header-bar.vue'
  import Scroll from '../../../base/scroll/scroll.vue'
  import { friendsListOptions } from '../../../common/js/options'

  export default{
    data() {
      return {
        title: '我的好友',
        friendsList: [],
        scrollY: 0,
        heightList: [],
        currendIndex: 0
      }
    },
    created() {
      this.probeType = 3
      this.listenScroll = true
    },
    mounted() {
      this.getList()
    },
    methods: {
      back() {
        this.$router.back()
      },
      getList() {
        this.$jsonp('/api/v1/restserver/ting', friendsListOptions
        ).then(json => {
          this.friendsList = this._normarlazeList(json.artist)
        }).catch(e => {
          // do something
        })
      },
      scrollTo(index) {
        this.currendIndex = index
        this.$refs.listContent.scrollToElement(this.$refs.list.children[index], 300)
      },
      scroll(pos) {
        this.scrollY = pos.y
      },
      _normarlazeList(list) {
        let map = [
//          A: {
//            title: A,
//            items: []
//          }
        ]
        let ret = [
//          {
//            title: 'A',
//            items: []
//          }
        ]
        list.forEach((item, index) => {
          const key = item.firstchar
          if (!map[key]) {
            map[key] = {
              title: key,
              items: []
            }
          }
          map[key].items.push({
            id: item.artist_id,
            name: item.name,
            avatar: item.avatar_middle
          })
        })
        // 为了得到有序列表我们需要处理map
        for (let key in map) {
          let val = map[key]
          ret.push(val)
        }
        ret.sort((a, b) => {
          return a.title.charCodeAt(0) - b.title.charCodeAt(0)
        })
        return ret
      },
      _currentHeight() {
        let height = []
        let h = 0
        height.push(h)
        const groups = this.$refs.group
        for (let i = 0; i < groups.length; i++) {
          h += groups[i].clientHeight
          height.push(h)
        }
        this.heightList = height
      }
    },
    watch: {
      scrollY(newY) {
        this._currentHeight()
        const heightList = this.heightList
        for (let i = 0; i < heightList.length - 2; i++) {
          const height1 = heightList[i]
          const height2 = heightList[i + 1]
          if (-newY >= height1 && -newY < height2) {
            this.currendIndex = i
          }
        }
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
  .friends
    position: fixed
    top: 44px
    bottom: 0
    width: 100%
    background: $color-background-d
    z-index: 200
    .word
      position: absolute
      right: 0
      top: 68px
      z-index: 300
      background: $color-theme-h
      color: $color-text-f
      padding: 18px 0
      border-radius: 10px
      width: 20px
      box-sizing: border-box
      ul
        li
          height: 18px
          width: 20px
          box-sizing: border-box
          padding: 0 6px
          line-height: 18px
          font-size: $font-size-small
          &.active
            color: $color-theme
    .list-title
      font-size: $font-size-medium
      height: 24px
      line-height: 24px
      padding: 0 10px
    .friends-list
      .item-list
        display: flex
        align-items: center
        padding: 6px 10px
        border-1px($color-theme-e)
        background: $color-background
        &:last-child
          &:after
            border: none
        .pic
          flex: 0 0 48px
          img
            height: 48px
            width: 48px
            border-radius: 24px
        .name
          flex: 1
          padding-left: 10px
</style>
