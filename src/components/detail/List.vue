<template>
  <ul class="detail-list-wrapper item-wrapper">
    <li class="item" v-for="(item, index) of list" :key="index">
      <div class="item-content border-1px-b">
        <span class="item-icon"></span>{{ item.title }}
      </div>
      <div class="item-child" v-if="item.children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: {
      type: Array,
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
.detail-list-wrapper
  .item-icon
    display: inline-block
    width: 0.36*50px
    height: 0.36*50px
    margin-right: 0.1*50px
    background-image: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png)
    background-position: 0 -0.45*50px
    background-size: 0.4*50px 3*50px
    background-repeat: no-repeat
  .item-content 
    line-height: 0.8*50px
    font-size: 0.32*50px
    margin: 0 0.2*50px
  .item-child
    padding: 0 0.2*50px
</style>
