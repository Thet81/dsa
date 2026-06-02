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

// [3,9,2,0,6]
// 1st pass through 3-9 9-2 9-0 9-6 (total of four comparision)
// result [3,2,0,6,9]

// 2nd pass through 3-2 3-0 3-6 (total of three comparison)
//result [2,0,3,6,9]

//3rd pass through 2-0 2-3 (total of two comparison)
//result [0,2,3,6,9]

//4th pass through 0-2 (total of one comparison)

// total comparisons = 4 + 3 + 2 + 1 = 10 comparisons