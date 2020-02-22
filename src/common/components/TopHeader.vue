<template>
  <div class="top-header flex-layer-h flex-v-center">
    <div class="top-header-left">
      <back-icon></back-icon>
    </div>
    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
import BackIcon from 'common/components/BackIcon.vue'
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    }
  },
  data () {
    return {

    }
  },
  methods: {
  },
  components: {
    BackIcon
  }
}
</script>

<style scoped lang="stylus">
.top-header
  position: relative
  width: 100%
  height: 43px
  text-align: center
  background-color: #00bcd4
  color: #fff
  .top-header-left
    position: absolute
    top: 0
    left: 0
    height: 43px
    line-height: 43px
    width: 32px
    text-align: center
    flex-basis: 32px
  .title
    margin: 0 auto
.top-header >>> .back-icon
  height: 100%
  overflow: hidden
</style>
