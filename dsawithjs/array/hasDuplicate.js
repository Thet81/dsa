// hasDuplicate.js

const hasDuplicate = array => {

	for (let i = 0; i < array.length; i++){
		for(let j = 1; j < array.length; j++){
			console.log("i",array[i],"= j",array[j])
			if (array[i] == array[j]){
				return true
			}
		}
	}
	return false
}

console.log(hasDuplicate([1,3,4,5,3]))