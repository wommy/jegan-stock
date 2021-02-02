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

const template = ({ name, quantity }) => `<span>${name}: ${quantity}</span>`

function getProducts(e) { e.preventDefault()	
	fetch( '/api/products' )
		.then( res => res.json() )
		.then( content => { 
			products = content.map( ea => `<p>
				${template(ea)}, materials:
				${ea.materials.map( ma => `<br/>`+template(ma) )}
			</p>` ).join("")
			document.getElementById('app').innerHTML = products
		}).catch( err => console.error )
}