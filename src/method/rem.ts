export default function flexible ( window: any, document: any ) {
	let docEl = document.documentElement
	let dpr = window.devicePixelRatio || 1
	function setBodyFontSize () {
		if ( document.body ) {
			document.body.style.fontSize = 12 * dpr + 'px'
		} else {
			document.addEventListener( 'DOMContentLoaded', setBodyFontSize )
		}
	}
	setBodyFontSize()
	function setRemUnit () {
		let rem = docEl.clientWidth / 10
		docEl.style.fontSize = rem + 'px'
	}
	setRemUnit()
	window.addEventListener( 'resize', setRemUnit )
	window.addEventListener( 'pageshow', function ( e: any ) {
		if ( e.persisted ) {
			setRemUnit()
		}
	} )
	if ( dpr >= 2 ) {
		let fakeBody = document.createElement( 'body' )
		let testElement = document.createElement( 'div' )
		testElement.style.border = '.5px solid transparent'
		fakeBody.appendChild( testElement )
		docEl.appendChild( fakeBody )
		if ( testElement.offsetHeight === 1 ) {
			docEl.classList.add( 'hairlines' )
		}
		docEl.removeChild( fakeBody )
	}
	if ( process.env.NODE_ENV === 'production' ) {
		console.log = () => { }
		process.env.NODE_ENV_URL = 'http://127.0.0.1:3000'
	}
	if ( process.env.NODE_ENV === 'development' ) {
		process.env.NODE_ENV_URL = 'http://127.0.0.1:3000'
	}
	if ( process.env.NODE_ENV === 'staging' ) {
		process.env.NODE_ENV_URL = 'http://127.0.0.1:3000'
	}
}

flexible( window, document )
