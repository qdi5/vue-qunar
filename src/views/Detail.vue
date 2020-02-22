<template>
  <div class="city-detail-wrapper">
    <detail-header></detail-header>
    <detail-banner :bannerData="bannerObj"></detail-banner>
    <detail-list :list="bannerList"></detail-list>
  </div>
</template>

<script>
import DetailHeader from 'components/detail/Header.vue'
import DetailBanner from 'components/detail/Banner.vue'
import DetailList from 'components/detail/List.vue'
export default {
  name: 'CityDetail',
  data () {
    return {
      detailList: [],
      bannerObj: {},
      bannerList: []
    }
  },
  mounted () {
    this.$http.get('/mock/detail.json', {
      params: {
        id: this.$route.params.id
      }
    }).then(result => {
      console.log('获取详情页数据：', result)
      const isSuccess = result && result.data.ret
      if (isSuccess) {
        const data = result.data.data
        this.detailList = data
        this.bannerObj = {
          sightName: data.sightName,
          bannerImg: data.bannerImg,
          gallaryImgs: data.gallaryImgs
        }
        this.bannerList = data.categoryList
      }
    })
  },
  methods: {

  },
  components: {
    DetailHeader,
    DetailBanner,
    DetailList
  }
}
</script>

<style scoped lang="stylus">
.city-detail-wrapper
  height: 2500px


</style>
