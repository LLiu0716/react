import axios from 'axios'
import { start, done } from 'nprogress'

console.log( '基地址 =>', process.env.NODE_ENV_URL )

const instance = axios.create( {
  baseURL: `${ process.env.NODE_ENV_URL }`,
  method: '' || 'get',
  timeout: 5000
} )

// 添加请求拦截器
instance.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    const token = sessionStorage.getItem( 'token' )
    if ( token ) {
      config.headers.Authorization = token
    }
    start()
    return config
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject( error )
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    done()
    const { status } = response
    if ( status === 200 ) {
      return response.data
    } else {
      return response.data
    }
  },
  error => {
    // 对响应错误做点什么
    const { status } = error.response
    console.log( 'status', status )
    if ( status === 401 ) {
      sessionStorage.removeItem( 'token' )
    } else {
    }
    return Promise.reject( error )
  }
)
// 发送真正的网络请求
export default instance
