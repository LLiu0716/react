import moment from 'moment'
// import Toast from '../components/RtToast'

import { Modal, Toast } from 'antd-mobile'

export const alert = Modal.alert

export const is_Toast = Toast

/**
 * 格式化处理 时间
 * @param date 时间戳
 * @param format 时间格式 , 默认 'YYYY-MM-DD'
 */
export function is_moment ( date: any, format: string = 'YYYY-MM-DD' ) {
  date = date || new Date()
  return moment( date ).format( format )
}


/**
 * 格式化处理 code 是否等于 200
 * @param res 请求回来的 res
 */
export function is_res ( res: any ) {
  if ( res.statusCode == 200 ) {
    return res.data
  } else {
    is_Toast.fail( res.message )
    return false
  }
}

/**
 * 格式化处理 1.是否有 url ; 2. url 上是否携带了基地址?
 * @param url 
 */
export function is_url ( url: string ) {
  if ( url ) {
    if ( url.startsWith( 'http' ) ) {
      return url
    } else {
      return process.env.NODE_ENV_URL + url
    }
  } else return url = 'https://img.yzcdn.cn/vant/apple-2.jpg'
}
