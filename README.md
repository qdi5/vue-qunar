# vue-qunar
vue仿去哪儿网
# 小结
1. 移动端布局；将html的font-size设置为5.33333vw，那么，1rem = 5.33333vw = deviceWidth / 100 * 5.33333 px; 1px = 1/5.33333 * 100 / deviceWidth rem（在iphone 6下，大约是20px）；在需要自适应的元素上，使用rem单位。
2. 使用百分比的padding给图片占位（百分比的padding是基于父元素的宽度计算的），防止图片加载过慢，页面发生抖动；
3. 使用keep-alive缓存组件，从而复用组件，不会重新渲染;设置exclude属性排除不需要缓存的组件；
4. 使用vue-awesome-swiper实现轮播，图片查看器
5. vue updated钩子：由于数据更改导致的虚拟DOM重新渲染和打补丁，在这之后会调用updated钩子；当这个钩子被调用时，当前组件的DOM已经更新，所以现在可以执行依赖于DOM的操作；但是不确保其中的所有子组件也都一起重绘。如果希望等到整个视图都重绘完毕，可以在updated里，使用$nextTick
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
