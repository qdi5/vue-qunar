<template>
  <div class="city-search-wrapper">
    <div class="search">
      <input type="text" v-model="keyword" class="search-input" placeholder="输入城市名称或拼音">
    </div>
    <div class="search-content" v-show="keyword" ref="scrollRef">
      <div class="city-list">
        <div class="city-item-wrapper" v-show="searchResult.length">
          <div class="city-item border-1px-b" v-for="item of searchResult" :key="item.id" @click="handleCityClick(item.name)">{{ item.name }}</div>
        </div>
        <div class="city-item-wrapper" v-show="!searchResult.length">
          <div class="city-item border-1px-b">搜素结果为空</div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import { mapMutations } from 'vuex'
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    searchList: Array
  },
  data () {
    return {
      keyword: ''
    }
  },
  mounted () {
    this.BScroll = new BScroll(this.$refs.scrollRef)
  },
  methods: {
    ...mapMutations(['setCurrentCity']),
    handleCityClick (cityName) {
      this.setCurrentCity(cityName)
      this.$router.push({ name: 'Home' })
    }
  },
  computed: {
    searchResult () {
      const result = []
      this.searchList.forEach(item => {
        const trimedKeyword = this.keyword.trim()
        if (item.spell.indexOf(trimedKeyword) > -1 || item.name.indexOf(trimedKeyword) > -1) {
          result.push(item)
        }
      })
      return result
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~common/styles/mixins/variables.styl'
.city-search-wrapper
  height: .72 * 50px
  padding: 0 0.1*50px
  background-color: $bgColor
.search-input
  box-sizing: border-box
  width: 100%
  height: 0.62*50px
  padding: 0 0.1*50px
  line-height: 0.62*50px
  text-align: center
  border-radius: 0.06*50px
  color: #666
.search-content
  position: fixed
  top: 79px
  left: 0
  right: 0
  bottom: 0
  z-index: 1
  overflow: hidden
  background-color: #eee;
.city-item
  line-height: 0.76*50px
  padding-left: 0.2*50px
  background-color: #fff

</style>
