<template>
  <div>
    <top-header v-show="showTopHeader" class="fixed-header" :style="styleObj" title="景点详情"></top-header>
    <div class="absolute-icon-back">
      <back-icon></back-icon>
    </div>
  </div>
</template>

<script>
import TopHeader from 'common/components/TopHeader'
import BackIcon from 'common/components/BackIcon.vue'
export default {
  data () {
    return {
      detailList: [],
      showTopHeader: false,
      styleObj: { opacity: 0 }
    }
  },
  mounted () {
    document.addEventListener('scroll', this.handleScroll, false)
    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('scroll', this.handleScroll, false)
    })
  },
  methods: {
    handleScroll () {
      const scrollTop = document.documentElement.scrollTop
      if (scrollTop > 60) {
        let opacity = scrollTop / 140
        opacity = opacity > 1 ? 1 : opacity
        console.log('scrollTop:', scrollTop)
        this.styleObj = { opacity }
        this.showTopHeader = true
      } else {
        this.showTopHeader = false
      }
    }
  },
  components: {
    TopHeader,
    BackIcon
  }
}
</script>

<style scoped lang="stylus">     
.fixed-header
  position: fixed
  top: 0
  left: 0
  right: 0
  z-index: 1
.absolute-icon-back
  position: absolute
  left: 0.2*50px
  top: 0.2*50px
  width: 0.8*50px
  height: 0.8*50px
  line-height: 0.8*50px
  border-radius: 50%
  text-align: center
  background-color: rgba(0, 0, 0, 0.8)
  z-index: 1
</style>
