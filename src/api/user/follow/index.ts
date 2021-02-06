import request from "../../instance"
import url from "./url"

/**
 * 获取评论列表
 */
export const set_comments = async ( params?: any ) => {
  let res: any = await request.get( url.user_comments, { params } )
  return res
}
