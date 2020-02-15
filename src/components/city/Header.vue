<template>
  <div class="city-header flex-layer-h flex-v-center">
    <div class="header-left">
      <back-icon></back-icon>
    </div>
    <div class="title">城市选择</div>
  </div>
</template>

<script>
import BackIcon from 'common/components/BackIcon.vue'
export default {
  name: 'CityHeader',
  data () {
    return {

    }
  },
  methods: {
  },
  components: {
    BackIcon: BackIcon
  }
}
</script>

<style scoped lang="stylus">
@import '~common/styles/mixins/mixins.styl'
.city-header
  position: relative
  width: 100%
  height: 43px
  text-align: center
  background-color: #00bcd4
  color: #fff
  .header-left
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

.header-left >>> .back-icon
  height: 100%
  overflow: hidden
</style>

