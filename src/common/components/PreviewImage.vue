<template>
  <div @click.stop="closePreview" class="preview-image-wrapper flex-layer-v flex-v-center">
    <swiper @click.native.stop="" class="images-wrapper" :options="swiperOption" v-if="list.length">
      <!-- slides -->
      <swiper-slide class="img-wrapper" v-for="(img, index) of list" :key="index">
          <img :src="img" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>

export default {
  name: 'PreviewImage',
  props: {
    list: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        }
      }
    }
  },
  methods: {
    closePreview () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="stylus">
.preview-image-wrapper
  position: fixed
  top: 0
  bottom: 0
  left: 0
  right: 0
  width: 100%
  background-color: #000
  z-index: 199304140957
  overflow: hidden
.images-wrapper
  width: 100%
  padding-bottom: 100%
  height: 0
  overflow: hidden
.img-wrapper
  img
    width: 100%
    display: block

.preview-image-wrapper >>> .swiper-pagination-fraction
  color: #fff
</style>
