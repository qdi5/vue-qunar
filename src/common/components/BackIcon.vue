<template>
  <router-link tag="div" :to="path" class="iconfont back-icon">
    <span class="iconfont icon-font-size">&#xe624;</span>
  </router-link>
</template>

<script>
export default {
  props: {
    path: {
      type: Object,
      default: () => ({ name: 'Home' }),
      validator: function (val) {
        return Object.keys(val).length && val.name
      }
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
.back-icon
  text-align: center
  .icon-font-size
    font-size: 20px
</style>
