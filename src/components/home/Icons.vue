<template>
<swiper>
  <swiper-slide v-for="(page, index) of pages" :key="index">
    <div class="icons-wrapper flex-layer-h">
      <div v-for="icon of page" :key="icon.id" class="icon-item">
        <div class="icon-img">
          <img :src="icon.imgUrl" alt="">
        </div>
        <p class="img-title">{{ icon.desc }}</p>
      </div>
    </div>
  </swiper-slide>
</swiper>
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

  },
  // 计算页数
  computed: {
    pages () {
      // 产生的不同数据结构，就会对应不同的循环对象
      /* 
      生成数据结构一
      const data = [{
        list:[
          {id: 1, imgUrl: 'http://www.google.com'},
          {id: 2, imgUrl: 'http://www.baidu.com'},
          {id: 3, imgUrl: 'http://www.google.com'},
          {id: 4, imgUrl: 'http://www.baidu.com'},
          {id: 5, imgUrl: 'http://www.google.com'},
          {id: 6, imgUrl: 'http://www.baidu.com'},
          {id: 7, imgUrl: 'http://www.google.com'},
          {id: 8, imgUrl: 'http://www.baidu.com'}
      ]}, {
        list: [
          {id: 1, imgUrl: 'http://www.google.com'},
          {id: 2, imgUrl: 'http://www.baidu.com'},
          {id: 3, imgUrl: 'http://www.bing.com'}
        ]
      }]
      const data = []
      let list = []
      this.list.forEach((item, index) => {
        list.push(item)
        if ((index + 1) % 8 === 0) {
          data.push({ list: list })
          list = []
        } else {
          if (this.list.length - 1 === index) {
            data.push({ list: list })
          }
        }
      }) */
      // 生成数据结构二
      /* const data = [
        [
          {id: 1, imgUrl: 'http://www.google.com'},
          {id: 2, imgUrl: 'http://www.baidu.com'},
          {id: 3, imgUrl: 'http://www.google.com'},
          {id: 4, imgUrl: 'http://www.baidu.com'},
          {id: 5, imgUrl: 'http://www.google.com'},
          {id: 6, imgUrl: 'http://www.baidu.com'},
          {id: 7, imgUrl: 'http://www.google.com'},
          {id: 8, imgUrl: 'http://www.baidu.com'}
        ],
        [
          {id: 1, imgUrl: 'http://www.google.com'},
          {id: 2, imgUrl: 'http://www.baidu.com'},
          {id: 3, imgUrl: 'http://www.bing.com'}
        ]
      ] */
      const data = []
      this.list.forEach((item, index) => {
        const carouselIndex = Math.floor(index / 8)
        if (!data[carouselIndex]) {
          data[carouselIndex] = []
        }
        data[carouselIndex].push(item)
      })
      return data
    }
  }
}
</script>

<style scoped lang="stylus">
.icons-wrapper
  width: 100%
  margin-top: 5px
.icon-item
  position: relative
  width: 25%
  // 元素占据flex盒子的25%
  flex-basis: 25%
  // 元素不允许缩小
  flex-shrink: 0
  // 元素不允许放大
  flex-grow: 0
  padding-bottom: 25%
  overflow: hidden
  background-color: green
  .icon-img
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 22px
    padding: 5px
    img
      display: block
      height: 100%
      margin: 0 auto  
.img-title
  position: absolute
  left: 0
  right: 0
  bottom: 0
  height: 22px
  margin: 0
  line-height: 22px
  text-align: center
  color: #333
</style>
