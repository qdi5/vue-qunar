import axios from 'axios'
const request = axios.create({
  baseURL: '/',
  timeout: 10000
})

// 请求之前的拦截器
request.interceptors.request.use(function (config) {
  console.log('axios请求之前的拦截器', config)
  return config
})

// 请求之后的拦截器
request.interceptors.response.use(function (response) {
  console.log('axios请求之后的拦截器', response)
  return response
})

export { request }
export default {
  install: function (Vue, options) {
    Vue.prototype.$http = request
  }
}

