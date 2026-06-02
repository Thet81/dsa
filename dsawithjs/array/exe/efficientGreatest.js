// efficientGreatest.js

const efficientGreatest = array => {
	let greatest = array[0]
	for(let i = 0; i < array.length-1; i++){
		if (array[i+1] > greatest){
			greatest = array[i+1]
		}
	}
	return greatest
}

console.log(efficientGreatest([2,3,29,4,5]))