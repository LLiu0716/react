import * as reactPlugin from 'vite-plugin-react'
import type { UserConfig } from 'vite'
// const path = require( 'path' )

const config: UserConfig = {
  jsx: 'react',
  plugins: [ reactPlugin, [ "import", { libraryName: "antd-mobile", style: "css" } ] ],
  port: 8888,
  open: true,
  // cssCodeSplit: false,
  // cssModuleOptions: {
  //   generateScopedName: () => { return '' }
  // },
  // https: false,
  // ssr: false,
  optimizeDeps: {
    // include: [ 'antd-mobile', 'axios', 'nprogress', 'react-router-dom' ],
    // // exclude: [ 'antd-mobile', 'axios', 'nprogress', 'react-router-dom' ]
    include: [ 'antd-mobile' ],
    exclude: [ 'antd-mobile' ]
  },
  cssPreprocessOptions: {
    less: {
      plugins: [
        require( 'postcss-px2rem' )( {
          remUnit: 37.5,
        } ),
      ]
    }
  }
  // alias: {
  // '/@/': path.resolve( __dirname, './src' )
  // }
  // proxy: {
  //   '/foo': 'http://localhost:4567/foo',
  //   '/api': {
  //     target: 'http://jsonplaceholder.typicode.com',
  //     changeOrigin: true,
  //     rewrite: path => path.replace( /^\/api/, '' )
  //   }
  // }
}
export default config

