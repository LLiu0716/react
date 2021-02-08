import React from 'react'

import RouterView from '../../router/routerView'

export default function User ( props: any ) {
  const { route } = props
  console.log( 'route', props )
  return (
    <RouterView route={ route } />
  )
}
