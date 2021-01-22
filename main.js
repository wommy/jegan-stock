const axios = require('axios')

async function getStock(){
	const results = await axios.get('')
	renderBody()
}

function renderBody(){
	document.getElementById('app').innerHTML = `<h1> wommy working </h1>`
}

document.getElementById('getStock').addEventListener('click', getStock)