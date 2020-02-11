<template>
  <div class="recommend-wrapper">
    <div class="recommend-title">周末去哪儿</div>
    <div class="recommend-item" v-for="weekend of list" :key="weekend.id">
      <div class="img-wrapper">
        <img :src="weekend.imgUrl" alt="">
      </div>
      <div class="address-desc flex-fill">
        <div class="address-name">{{ weekend.title }}</div>
        <p class="address-desc-text">{{ weekend.desc }}</p>
      </div>
    </div>
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

    }
  },
  methods: {
  },
  components: {

  }
}
</script>

<style scoped lang="stylus">
@import '~common/styles/mixins/mixins.styl'
.recommend-wrapper
  margin-top: 10px
  .recommend-title
    height: 40px
    line-height: 40px
    background-color: #eeeeee
    text-indent: 0.2*50px
.recommend-item
  .img-wrapper
    padding-bottom: 38.01%
    height: 0
    overflow: hidden
    img 
      width: 100%
  .address-desc
    padding: 5px
    .address-name
      line-height: 0.54 * 50px
      font-size: 0.32 * 50px
    .address-desc-text
      
      margin: 0
      color: #ccc
      line-height: 0.4 * 50px
      
    .address-button
      margin-top: 0.16 * 50px
      padding: 0 0.2*50px
      line-height: 0.44 * 50px
      border: none
      border-radius: 0.06*50px
      color: #ffffff
      background-color: #ff9300
</style>
