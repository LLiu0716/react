import { set_User } from '../../api/user'
import { APP_REACT_ID, APP_REACT_TOKEN } from '../../method'

export const get_user = async () => {
  const id: string = sessionStorage.getItem( APP_REACT_ID ) || ''
  try {
    if ( id ) {
      return await set_User( id )
    }
  } catch ( error ) { console.log( error ) }
}

export const go_login = () => {
  const token: string = sessionStorage.getItem( APP_REACT_TOKEN ) || ''
  if ( !token ) return false
  else return true
}
