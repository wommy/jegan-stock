async function getStock(){
	await renderBody('wommy changed')
}

function renderBody(x){
	document.getElementById('app').innerHTML = `<h1>${x}</h1>`
}

document.getElementById('getStock').addEventListener('click', getStock)

renderBody('wommy working')