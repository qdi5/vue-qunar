<template>
  <div class="carousel-wrapper">
    <swiper :options="swiperOption" v-if="list.length">
      <!-- slides -->
      <swiper-slide class="img-wrapper" v-for="carousel of list" :key="carousel.id">
          <img :src="carousel.imgUrl" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>

export default {
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
        autoplay: {
          /* 用户操作swiper之后，是否禁止autoplay。默认为true：停止。
          如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
          操作包括触碰，拖动，点击pagination等。 */
          disableOnInteraction: false
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  methods: {
  },
  components: {

  }
}
</script>

<style scoped lang="stylus">
.carousel-wrapper
  width: 100%
  height: 0
  // 使用padding撑开父级元素，当异步请求的图片还未加载时，防止页面发生抖动
  // padding使用百分比时，是相对于父元素的宽度计算的
  padding-bottom: 31.25%
  overflow: hidden
  background-color: red;
.img-wrapper
  img
    width: 100%
.carousel-wrapper >>> .swiper-pagination-bullet-active
  background-color: #fff
</style>
