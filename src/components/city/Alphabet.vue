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

    }
  },
  methods: {
    handleItemClick (index) {
      this.$emit('change', index)
    },
    handleTouchStart (e) {
      const a = this.$refs.liRef[0]
      this.startY = a.getBoundingClientRect().top
      console.log(this.$refs.liRef[0])
    },
    handleTouchMove (e) {
      const endY = e.touches[0].clientY
      const index = Math.floor((endY - this.startY) / 20)
      if (index >= 0 && index < this.alphabet.length) {
        this.$emit('change', index)
      }
    },
    handleTouchEnd (e) {
      console.log('end:', e)
    }
  },
  components: {

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
