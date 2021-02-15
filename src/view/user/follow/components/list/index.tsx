import React, { Component } from 'react'
import style from './index.module.less'

// import LazyLoad from 'react-lazyload'
import RtLoding from '/@/components/RtLoding'
import Item from '../item'
import { set_comments } from '/@/api/user/follow'
import { is_res, Toast } from '/@/method'

import { ListView } from 'antd-mobile'

// class List extends Component {
export default class List extends Component {
  state = {
    dataSource: new ListView.DataSource( {
      rowHasChanged: ( row1: any, row2: any ) => row1 !== row2,
    } ),
    isLoading: true,
    hasMore: true,
    refreshing: true,
    params: {
      pageSize: 10,
      pageIndex: 1
    },
    list: [],
    new_list: [],
    show: false
  }

  async get_list () {
    try {
      let res = await set_comments( this.state.params )
      res = is_res( res )
      console.log( 'res', res )
      if ( res.length <= 0 ) {
        this.setState( {
          refreshing: false,
          isLoading: false,
          hasMore: false
        } )
        Toast.info( '没有数据了' )
      }
      let new_list = this.state.new_list.concat( res )
      this.setState( {
        isLoading: false,
        refreshing: false,
        new_list,
        dataSource: this.state.dataSource.cloneWithRows( new_list ),
        show: true
      } )
      console.log( 'dataSource', this.state.dataSource )
    } catch ( error ) { console.log( error ) }
  }

  onEndReached = ( event: any ) => {
    if ( this.state.isLoading || !this.state.hasMore ) {
      return
    }
    console.log( 'reach end', event )
    this.setState( {
      isLoading: true,
      params: {
        pageSize: 10,
        pageIndex: this.state.params.pageIndex + 1
      }
    } )
    this.get_list()
  }

  componentDidMount () {
    this.get_list()
  }

  render () {
    const { new_list, show } = this.state
    let i = 0
    const row: any = ( rowData: any, sectionID: any, rowID: any ) => {
      return (
        <Item
          key={ rowID }
          item={ rowData }
          i={ i++ }
        />
      )
    }
    return (
      <div className={ style.list } >
        {
          // 获取数据才渲染组件
          show ? (
            // 获取数据后是否有需要的数据 ?
            new_list.length ? (
              <ListView
                // ref={ el => this.lv = el }
                dataSource={ this.state.dataSource }
                // renderHeader={ () => <span>header</span> }
                renderFooter={ () => (
                  <div style={ { padding: 20, textAlign: 'center' } }>
                    {this.state.isLoading ? 'Loading...' : 'Loaded' }
                  </div>
                ) }
                renderRow={ row }
                // renderSeparator={ separator }
                className="am-list"
                pageSize={ 4 }
                useBodyScroll
                onScroll={ () => { console.log( 'scroll' ); } }
                scrollRenderAheadDistance={ 500 }
                onEndReached={ this.onEndReached }
                onEndReachedThreshold={ 10 }
              />
            ) :
              <p className={ style.p }>当前还没有任何跟帖</p>
          ) :
            // 未获取数据前不渲染
            <RtLoding num={ 15 } />
        }
      </div>
    )
  }
}
