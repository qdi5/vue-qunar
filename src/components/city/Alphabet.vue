<template>
  <ul 
    class="alphabet-wrapper flex-layer-v flex-v-center"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    <li ref="liRef" class="item" @click="handleItemClick(index)" v-for="(letter, index) of alphabet" :key="index">
      {{ letter }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    alphabet: Array
  },
  data () {
    return {
      // 触摸状态标识（为true，则表示触摸事件正在执行中）
      touchStatus: false
    }
  },
  // 由于数据更改导致的虚拟DOM重新渲染和打补丁，在这之后会调用该钩子
  // 当这个钩子被调用时，当前组件的DOM已经更新，所以你现在可以执行依赖于DOM的操作。
  updated () {
    console.log('updated hook emit')
    const a = this.$refs.liRef[0]
    this.startY = a.getBoundingClientRect().top
    console.log(this.startY, a.offsetTop)
  },
  mounted () {
    this.timer = null
  },
  methods: {
    handleItemClick (index) {
      this.$emit('change', index)
    },
    handleTouchStart (e) {
      this.touchStatus = true
      console.log(this.$refs.liRef[0])
    },
    handleTouchMove (e) {
      // 使用setTimeout节流
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          console.log(++this._index || (this._index = 1))
          const endY = e.touches[0].clientY
          const index = Math.floor((endY - this.startY) / 20)
          console.log('index:', index)
          if (index >= 0 && index < this.alphabet.length) {
            this.$emit('change', index)
          }    
        }, 16)
      }
      /* if (this.touchStatus) {
        console.log(++this._index || (this._index = 1))
        const endY = e.touches[0].clientY
        const index = Math.floor((endY - this.startY) / 20)
        if (index >= 0 && index < this.alphabet.length) {
          this.$emit('change', index)
        }
      } */
    },
    handleTouchEnd (e) {
      this.touchStatus = false
      console.log('end:', e)
    }
  }
}
</script>

<style scoped lang="stylus">
.alphabet-wrapper
  position: fixed
  top: 79px
  right: 0
  bottom: 0
  width: 20px
  .item
    line-height: 20px
    text-align: center
    color: #00bcd4
</style>
