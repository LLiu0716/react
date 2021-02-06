import request from "../../instance"
import url from "./url"

/**
 * 获取收藏文章列表
 */
export const set_user_star = async ( params?: any ) => {
  let res: any = await request.get( url.user_star, { params } )
  return res
}
