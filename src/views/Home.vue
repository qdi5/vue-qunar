<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import Header from 'components/home/Header.vue'
import Swiper from 'components/home/Swiper.vue'
import Icons from 'components/home/Icons.vue'
import Recommend from 'components/home/Recommend.vue'
import Weekend from 'components/home/Weekend.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity: this.getCurrentCity
    }
  },
  components: {
    HomeHeader: Header,
    HomeSwiper: Swiper,
    HomeIcons: Icons,
    HomeRecommend: Recommend,
    HomeWeekend: Weekend
  },
  mounted () {
    this.getAllData()
  },
  activated () {
    if (!this._signed) {
      this._signed = true
      return
    }
    if (this.getCurrentCity !== this.lastCity) {
      this.lastCity = this.getCurrentCity
      this.getAllData()
    }
  },
  methods: {
    getAllData () {
      this.$http
        .get('/mock/index.json', {
          params: {
            city: this.getCurrentCity
          }
        })
        .then(res => {
          console.log('请求到的首页数据：', res)
          const isSuccess = res && res.data.ret
          if (isSuccess) {
            const data = res.data.data
            this.swiperList = data.swiperList
            this.iconList = data.iconList
            this.recommendList = data.recommendList
            this.weekendList = data.weekendList
          }
        })
    }
  },
  computed: {
    ...mapGetters(['getCurrentCity'])
  }
}
</script>

<style lang="stylus"></style>