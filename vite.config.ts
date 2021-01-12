import * as reactPlugin from 'vite-plugin-react'
import type { UserConfig } from 'vite'
const path = require( 'path' )

const config: UserConfig = {
  jsx: 'react',
  plugins: [ reactPlugin ],
  port: 8888,
  open: true,
  // https: false,
  // ssr: false,
  // optimizeDeps: {
  //   include: [ '' ]
  // },
  // alias: {
  //   '/@/': path.resolve( __dirname, './src' )
  // }
  // proxy: {
  //   '/foo': ''
  // }
}

export default config

