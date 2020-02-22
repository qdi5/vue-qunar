<template>
  <div class="recommend-wrapper">
    <div class="recommend-title">热销推荐</div>
    <router-link class="recommend-item flex-layer-h" :to="{name: 'Detail', params:{ id: recommend.id } }" tag="div" v-for="recommend of list" :key="recommend.id">
      <div class="img-wrapper">
        <img :src="recommend.imgUrl" alt="">
      </div>
      <div class="address-desc flex-fill">
        <div class="address-name">{{ recommend.title }}</div>
        <p class="address-desc-text">{{ recommend.desc }}</p>
        <button class="address-button">查看详情</button>
      </div>
    </router-link>
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
  height: 1.9 * 50px
  
  .img-wrapper
    img 
      width: 1.7*50px
      padding: 5px
  .address-desc
    padding: 5px
    // 解决flex下的子元素，溢出文本显示省略号不起作用的问题
    min-width: 0
    .address-name
      line-height: 0.54 * 50px
      font-size: 0.32 * 50px
    .address-desc-text
      
      margin: 0
      color: #ccc
      line-height: 0.4 * 50px
      ellipsis()
      
    .address-button
      margin-top: 0.16 * 50px
      padding: 0 0.2*50px
      line-height: 0.44 * 50px
      border: none
      border-radius: 0.06*50px
      color: #ffffff
      background-color: #ff9300
</style>
