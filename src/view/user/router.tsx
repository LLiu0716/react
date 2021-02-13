import React from 'react'

import RouterView from '../../router/routerView'

export default function User ( props: any ) {
  const { route } = props
  return (
    <RouterView route={ route } />
  )
}
