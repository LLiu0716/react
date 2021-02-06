import request from "../instance"
import url from "./url"

/**
 * 获取个人信息
 * @param id 用户 ID
 */
export const set_User = async ( id?: string ) => {
  let res: any = await request.get( `/user/${ id }` )
  return res
}

/**
 * 上传图片
 * @param file 上传的文件
 */
export const set_upload = async ( file: any ) => {
  let res: any = await request.post( url.upload, file )
  return res
}

/**
 * 修改个人信息
 * @param id 用户ID
 * @param data 要修改的参数对象
 */
export const set_user_update = async ( id: string, data: any ) => {
  let res: any = await request.post( `${ url.user_update }/${ id }`, data )
  return res
}
