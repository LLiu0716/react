import request from "../../instance"
import url from "./url"

/**
 * 获取关注列表
 */
export const set_follows = async () => {
  let res: any = await request.get( url.user_follows )
  return res
}

export const set_user_unfollow = async ( id: number ) => {
  let res: any = await request.get( `${ url.user_unfollow }/${ id }` )
  return res
}

export const set_user_follows = async ( id: number ) => {
  let res: any = await request.get( `${ url.user_follows }/${ id }` )
  return res
}
