// greatesetNumber.js

const greatestNumber = array => {

	for (let i = 0; i < array.length; i++){
		let isValuegreatest = true
		for (let j = 0; j < array.length; j++){
			console.log(array[i], array[j])
			if (array[j] > array[i]){
				isValuegreatest = false
			}
		}
		if (isValuegreatest){
			return array[i]
		}
	}
}

console.log(greatestNumber([0,8,6,7]))