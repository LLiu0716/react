import instance from '../index'
import url from './url'

export async function go_login ( data: any ) {
  let res: any = await instance.post( url.login, data )
  return res
}

export async function go_register ( data: any ) {
  let res: any = await instance.post( url.register, data )
  return res
}
