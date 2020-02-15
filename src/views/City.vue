<template>
  <div class="city-wrapper">
    <city-header></city-header>
    <city-search :searchList="searchList"></city-search>
    <city-list :index="index" :cities="cities" :hotCities="hotCities"></city-list>
    <city-alphabet @change="handleChangeScroll" :alphabet="alphabet"></city-alphabet>
  </div>
</template>

<script>
import Header from 'components/city/Header.vue'
import Search from 'components/city/Search.vue'
import List from 'components/city/List.vue'
import Alphabet from 'components/city/Alphabet.vue'
export default {
  data () {
    return {
      // 热门城市
      hotCities: [],
      cities: null,
      index: 0
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      this.$http.get('/mock/city.json').then(result => {
        console.log('获取城市数据：', result)
        const isSuccess = result.data && result.data.ret
        if (isSuccess === true) {
          const data = result.data.data
          this.hotCities = data.hotCities
          this.cities = data.cities
        }
      })
    },
    handleChangeScroll (index) {
      this.index = index
    }
  },
  computed: {
    alphabet () {
      return this.cities && Object.keys(this.cities)
    },
    searchList () {
      const result = []
      if (!this.cities) {
        return result
      }
      const allSearchData = Object.values(this.cities)
      allSearchData.forEach(item => {
        item.forEach(element => {
          result.push(element)
        })
      })
      return result
    }
  },
  components: {
    CityHeader: Header,
    CitySearch: Search,
    CityList: List,
    CityAlphabet: Alphabet
  }
}
</script>

<style scoped lang="stylus">
</style>

