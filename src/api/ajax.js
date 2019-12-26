import axios from 'axios'
import qs from 'qs'
import { Indicator, Toast, MessageBox } from 'mint-ui';

import store from '@/vuex/store'
import router from '@/router'
/* 
对axio进行2次封装一个能发ajax请求的函数
1. 统一处理请求异常
2. 异步请求成功的数据不是response, 而是response.data
3. 对请求体参数进行urlencode处理, 而不使用默认的json方式(后台接口不支持)
4. 配置请求超时的时间
5. 通过请求头携带token数据
*/
const instance = axios.create({
  baseURL:'/api',
  timeout:20000
})

instance.interceptors.request.use((config)=>{
  Indicator.open({
    spinnerType: 'fading-circle'
  })
  const data = config.data
  if (data instanceof Object) {
    config.data = qs.stringify(data)
  }
  const token = store.state.user.token
  if (token) {
    config.headers['Authorization'] = token
  }else{
    const needCheck = config.headers.needCheck
    if (needCheck) {
      router.replace('/login')
      throw new Error('未登陆, 无法查看!')
    }
  }
  return config
})

instance.interceptors.response.use(
  (response)=>{
    Indicator.close()
    return response.data
  },
  (error)=>{
    Indicator.close()
    const response = error.response
    const path = router.currentRoute.path
    if (!response) {
      if (path !== '/login') {
        router.replace('/login')
        Toast(error.message)
      }
    }else{
      if (error.response.status === 401) {
        if (path !== '/login') {
          store.dispatch('logout')
          router.replace('/login')
          Toast(error.response.data.message || '登陆失效, 请重新登陆')
        }
      }else if (error.response.status === 404) {
        MessageBox('提示', '访问的资源不存在')
      }else{
        MessageBox('提示','请求出错: ' + error.message)
      }
    }
    
    return new Promise(()=>{})
  }
)
export default instance
