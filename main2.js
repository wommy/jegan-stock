document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('getProducts').addEventListener('click', getProducts)
})

function getProducts(e) { console.log( 'wommy working' )
	e.preventDefault()	
	fetch( '/api/products' ).then( res => res.json() ).
		then( ( content ) => {
			template = 
			content = content.map( arr => arr.name ).map( x => `<h2>${x}</h2>`).join("")
			document.getElementById('app').innerHTML = content
		}).catch( err => console.error )
}