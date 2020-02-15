<template>
  <div class="city-list-wrapper" ref="scrollRef">
    <div class="scroll-wrapper">
      <div class="area">
        <div class="current-city-title title">
          当前城市
        </div>
        <div class="current-city button-list">
          <div class="button-wrapper">
            <div class="button">{{ getCurrentCity }}</div>
          </div>
        </div>
      </div>
      <div class="hot-city-wrapper">
        <div class="title">热门城市</div>
        <div class="hot-city flex-layer-h button-list around">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
            <div class="button" @click="handleCityClick(item.name)">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="city-list">
        <div class="city-item-wrapper" ref="cityRef" v-for="(city, key) of cities" :key="city.id">
          <div class="city-letter title border-1px-tb">{{key}}</div>
          <div class="city-item border-1px-b" @click="handleCityClick(c.name)" v-for="c of city" :key="c.id">{{ c.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import BScroll from 'better-scroll'
export default {
  props: {
    cities: Object,
    hotCities: Array,
    index: Number
  },
  data () {
    return {

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
    },
    handleScrollToElement (index) {
      this.BScroll.scrollToElement(this.$refs.cityRef[index])
    }
  },

  computed: {
    ...mapGetters(['getCurrentCity'])
  },
  watch: {
    index (newVal) {
      this.handleScrollToElement(newVal)
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~common/styles/mixins/variables.styl'
.city-list-wrapper
  position: absolute
  top: 79px
  left: 0
  right: 0
  bottom: 0
  overflow: hidden
.button-list
  overflow: hidden
  padding: 0.1*50px 0.6*50px 0.1*50px 0.1*50px
.title
  line-height: 0.54*50px
  padding-left: 0.2*50px
  color: #666666
  font-size: 0.26*50px
  background-color: $titleBgColor
.button-wrapper
  width: 33.33%
  flex-basis: 33.33%

.button
  margin: 0.1*50px
  padding: 0.1*50px 0
  text-align: center
  border: 0.02*50px solid #cccccc
  border-radius: 0.06*50px
.city-item
  line-height: 0.76*50px
  padding-left: 0.2*50px 

</style>
