const materialsArr = ["card","envelope"]
// const materialObjs = []
// for ( let i in materialsArr ) materialObjs.push({
// 	name: materialsArr[i],
// 	quantity: [0]
// });

// const materialObjs = materialsArr.reduce( ( acc, i ) => acc.push({ name: materialsArr[i], quantity: [0] }), [])

const materialObjs = materialsArr.reduce( ( acc, i ) => { 
	acc.push( { name: i, quantity: [0] })
	return acc
}, [] )

console.log(materialObjs)