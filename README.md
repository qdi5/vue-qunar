# vue-qunar
vue仿去哪儿网
## 小结
1. 移动端布局；将html的font-size设置为5.33333vw，那么，1rem = 5.33333vw = deviceWidth / 100 * 5.33333 px; 1px = 1/5.33333 * 100 / deviceWidth rem（在iphone 6下，大约是20px）；在需要自适应的元素上，使用rem单位。
2. 使用百分比的padding给图片占位（百分比的padding是基于父元素的宽度计算的），防止图片加载过慢，页面发生抖动；
3. 使用keep-alive缓存组件，从而复用组件，不会重新渲染;设置exclude属性排除不需要缓存的组件；此时，组件里面会新增两个钩子函数，activated和deactivated钩子，分别在组件激活和组件失活时候被自动调用。
4. 使用vue-awesome-swiper实现轮播，图片查看器；基于swiper的vue轮播图封装。
5. vue updated钩子：由于数据更改导致的虚拟DOM重新渲染和打补丁，在这之后会调用updated钩子；当这个钩子被调用时，当前组件的DOM已经更新，所以现在可以执行依赖于DOM的操作；但是不确保其中的所有子组件也都一起重绘。如果希望等到整个视图都重绘完毕，可以在updated里，使用$nextTick
6. 使用递归组件循环出父子嵌套结构的数据；通过组件名字，调用自身组件，达到递归调用的目的。
7. 在组件钩子里，使用$once将绑定事件和解绑事件写在一起，例如在mounted钩子里绑定scroll事件，并同时在beforeDestory钩子里监听解绑事件的写法：
``` javascript
mounted () {
  window.addEventListener('scroll', handleEvent, false)
  this.$once('hook:beforeDestroy', () => {
    window.removeEventListener('scroll', handleEvent, false)
  })
}
```    
8. 在public目录下的静态资源文件，可以直接以'/'开头访问；在使用axios等ajax的库时，也可以以'/'开头请求到数据
9. 在频繁触发的事件中，可以使用setTimeout来节流，达到优化性能的目的。
10. 在touchstart,touchmove,touchend这类触摸事件中，需要设置一个标识flag，用于表示触摸的状态，防止多根手指触摸屏幕，导致额外的处理事件函数的执行，造成资源浪费。
11. 每一个组件都最好起一个唯一的名字；组件名的使用场景：递归调用；vue devTools调试；\<keep-alive/> 设置include和exclude属性；
12. offsetTop返回的是元素距离其上级最近的一个定位元素的内边距距离；getBoundingClientRect().top返回的是距离页面视口顶部的距离；
13. vue css动画原理：  
    - Vue进入动画过程：  
    第一帧： 添加`v-enter` `v-enter-active`样式    
    第二帧： 移除`v-enter`样式，添加`v-enter-to`样式    
    最后一帧： 移除 `v-enter-active` 和 `v-enter-to`样式    
    - Vue离开动画过程：    
    第一帧： 添加`v-leave` `v-leave-active`样式
    第二帧： 移除`v-leave`样式，添加`v-leave-to`样式
    最后一帧： 移除`v-enter-active`和`v-enter-to`样式    
    (**当\<transition/>组件设置了name属性，则上面的v要写成name属性对应的值**)    
14. vue js动画的6个钩子函数：beforeEnter,enter,afterEnter,beforeLeave,leave,afterLeave;每一个钩子函数的都有一个表示当前参与动画的元素DOM对象，enter和leave都有第二个参数done回调函数，用于在动画完成或结束时候调用。
15. 在flex布局的元素上，单行溢出省略号不起作用时，在flex布局下的元素上添加min-width: 0，就可以正常显示省略号了。
16. v-once提高组件里面静态元素的渲染速度；适合组件里只有DOM结构和静态文字的情况
17. table，ul，ol，select等元素，子元素必须是html5规范的元素，如果要使用vue自定义组件，需要用is来标识使用的组件。    
```html
<div id="root">
  <table>
    <select name="" id="">
      <option value="" is="row"></option>
    </select>
  </table>
</div>
<script>
  Vue.component('row', {
    template: '<tr><td>this is a row</td></tr>'
  })
  new Vue({
    el: '#root'
  })
</script>
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
