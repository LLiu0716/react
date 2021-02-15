import React from 'react'
import style from './index.module.less'

// import RtHeader from '../../../components/RtHeader'
// import RtLoding from '../../../components/RtLoding'

// export default function List ( props: any ) {

//   return (
//     <div className={ style.list }>
//       <RtHeader title="我的收藏" />
//       <i className='iconfont icon-arrow-right'></i>
//     </div>
//   )
// }

import { ListView } from 'antd-mobile'

const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
]
const NUM_ROWS = 20
let pageIndex = 0

function genData ( pIndex = 0 ) {
  const dataBlob: any = {}
  for ( let i = 0; i < NUM_ROWS; i++ ) {
    const ii = ( pIndex * NUM_ROWS ) + i;
    dataBlob[ ii ] = `row - ${ ii }`
  }
  return dataBlob
}

export default class Demo extends React.Component {

  dataSource = new ListView.DataSource( {
    rowHasChanged: ( row1: any, row2: any ) => row1 !== row2,
  } );

  state = {
    dataSource: this.dataSource,
    isLoading: true,
    hasMore: false
  }

  rData: any = 11

  componentDidMount () {
    // you can scroll to the specified position
    // setTimeout(() => this.lv.scrollTo(0, 120), 800);

    // simulate initial Ajax
    setTimeout( () => {
      this.rData = genData();
      this.setState( {
        dataSource: this.state.dataSource.cloneWithRows( this.rData ),
        isLoading: false,
      } );
    }, 60 );
  }

  lv: any

  onEndReached = ( event: any ) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if ( this.state.isLoading && !this.state.hasMore ) {
      return;
    }
    console.log( 'reach end', event )
    this.setState( { isLoading: true } );
    setTimeout( () => {
      this.rData = { ...this.rData, ...genData( ++pageIndex ) }
      console.log( 'pageIndex', pageIndex )
      this.setState( {
        dataSource: this.state.dataSource.cloneWithRows( this.rData ),
        isLoading: false,
      } );
    }, 10 );
  }

  render () {
    const separator = ( sectionID: any, rowID: any ) => (
      <div
        key={ `${ sectionID }-${ rowID }` }
        style={ {
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        } }
      />
    );
    let index = data.length - 1;
    const row = ( rowData: any, sectionID: any, rowID: any ) => {
      if ( index < 0 ) {
        index = data.length - 1;
      }
      const obj = data[ index-- ];
      return (
        <div key={ rowID } style={ { padding: '0 15px' } }>
          <div
            style={ {
              lineHeight: '50px',
              color: '#888',
              fontSize: 18,
              borderBottom: '1px solid #F6F6F6',
            } }
          >{ obj.title }</div>
          <div style={ { display: 'flex', padding: '15px 0' } }>
            <img style={ { height: '64px', marginRight: '15px' } } src={ obj.img } alt="" />
            <div style={ { lineHeight: 1 } }>
              <div style={ { marginBottom: '8px', fontWeight: 'bold' } }>{ obj.des }</div>
              <div><span style={ { fontSize: '30px', color: '#FF6E27' } }>{ rowID }</span>¥</div>
            </div>
          </div>
        </div>
      );
    };
    return (
      <ListView
        // ref={ el => this.lv = el }
        dataSource={ this.state.dataSource }
        renderHeader={ () => <span>header</span> }
        renderFooter={ () => ( <div style={ { padding: 30, textAlign: 'center' } }>
          {this.state.isLoading ? 'Loading...' : 'Loaded' }
        </div> ) }
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
    );
  }
}
