// efficientDuplicate.js

const efficientDuplicate = array =>{
	let existingNumber = [];

	for(let i = 0; i < array.length; i++){
		console.log(existingNumber)
		if (existingNumber[array[i]] == 1){
			return true
		}else {
			existingNumber[array[i]] = 1;
		}
	}

	return false
}

console.log(efficientDuplicate([1,3,4,5,3]))