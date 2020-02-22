<template>
  <div class="banner" @click="handleClick">
    <img :src="bannerData.bannerImg" alt="">
    <div class="banner-info flex-layer-h flex-v-center">
      <div class="banner-title flex-fill">{{ bannerData.sightName }}</div>
      <div class="banner-number">
        <span class="iconfont banner-icon">&#xe692;</span>
        {{ bannerData.gallaryImgs && bannerData.gallaryImgs.length }}
      </div>
    </div>
    <preview-image v-if="isPreview" @close="handleClosePreview" :list="bannerData.gallaryImgs"></preview-image>
  </div>
</template>
<script>
import PreviewImage from 'common/components/PreviewImage.vue'
export default {
  props: {
    bannerData: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  data () {
    return {
      isPreview: false
    }
  },
  methods: {
    handleClick () {
      this.isPreview = true
    },
    handleClosePreview () {
      this.isPreview = false
    }
  },
  components: {
    PreviewImage
  }
}
</script>

<style scoped lang="stylus">
.banner
  position: relative
  height: 0
  padding-bottom: 55%
  background-color: red
  img
    display: block
    width: 100%
.banner-info
  position: absolute
  left:0
  right: 0
  bottom: 0
  line-height: 0.6*50px
  color: #fff
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
  .banner-title
    font-size: 0.32*50px
    padding: 0 0.2*50px
  .banner-number
    height: 0.32*50px
    line-height: 0.32*50px
    padding: 0 0.4*50px
    font-size: 0.24*50px
    border-radius: 10px
    background-color: rgba(0, 0, 0, 0.8)
    .banner-icon
      font-size: 0.24*50px
</style>
