// linearSearch.js

const linearSearch = (array, searchValue)=> {

	for(let i = 0; i < array.length; i++){
		if (array[i] == searchValue){
			return i;
		// we assume that the array is ordered array
		}else if (array[i] > searchValue){
			return -1;
		}
	}
	return -1
}

console.log(linearSearch([1,3,5,7,9],5))