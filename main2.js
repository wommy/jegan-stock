document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('getProducts').addEventListener('click', getProducts)
})

/*
	{
		"_id":"601998d84903491947de0857",
		"name":"lighter",
		"quantity":[0],
		"materials":[
			{"name":"blank","quantity":[0]},
			{"name":"art","quantity":[0]},
			{"name":"laminate","quantity":[0]},
			{"name":"bag","quantity":[0]}
		]
	},
*/

let template = `<div id="template">
<span>${arr.name}:</span>
<span>${arr.quantity}</span>
</div>`

function getProducts(e) { e.preventDefault()	
	fetch( '/api/products' )
		.then( res => res.json() )
		.then( content => {
			products = content.map( ea => `<div>
			<p>${ea.name}: ${ea.quantity}, materials: ${ea.materials.map( ma => `<div>${ma.name}: ${ma.quantity}</div>` ).join("")}</p>
		</div>` ).join("")
			document.getElementById('app').innerHTML = products
		}).catch( err => console.error )
}