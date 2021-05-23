import axios from 'axios'

export function request (config) {
  // 创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })
  // 请求拦截 这里对请求数据做处理
  instance.interceptors.request.use(config => {
    // console.log(config)
    return config
  }, err => {
    console.log(err)
  })
  // 响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res)
    return res.data
  }, (err) => {
    console.log(err)
  })
  // 发送网络请求
  return instance(config)
}
