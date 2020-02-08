<template>
  <div class="header flex-layer-h flex-v-center">
    <div class="header-left">
      <div class="iconfont back-icon">
        <span class="iconfont icon-font-size">&#xe624;</span>
      </div>
    </div>
    <div class="header-input flex-layer-h flex-v-center flex-fill">
      <span class="iconfont search-icon">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      上海
      <span class="iconfont arrow-icon icon-font-size">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
  },
  components: {

  }
}
</script>

<style scoped lang="stylus">
@import '~common/styles/mixins/mixins.styl'
.header
  width: 100%
  height: 43px
  background-color: #00bcd4
  color: #fff
  .header-left
    flex-basis: 32px
  .back-icon
    text-align: center
  .header-input
    height: 32px
    margin-left: 10px
    padding-left: 10px
    border-radius: 3px
    background-color: #fff
    color: #ccc
  .header-right
    
    flex-basis: 62px
    padding: 0 5px
    text-align: center
.search-icon
  margin-right: 6px
.icon-font-size
  font-size: 14px
</style>

