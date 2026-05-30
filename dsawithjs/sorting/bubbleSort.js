// bubbleSort.js

const bubbleSort = (list)=> {
	let unsortedUntilIndex = list.length - 1;

	let sorted = false;

	while(!sorted){
		sorted = true
		for(let i = 0 ; i < unsortedUntilIndex; i++){
			
			if (list[i] > list[i+1]){
				let temp = list[i]
				list[i] = list[i+1]
				list[i+1] = temp
				sorted = false
			}
		}
		unsortedUntilIndex -= 1;
	}
	return list
}

console.log(bubbleSort([65,55,45,35,25,15,10]))