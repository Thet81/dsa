// binarySearch.js
/*
	Each time we double the data, the binary search algorithm adds just one more step
*/
const binarySearch = (array,searchValue)=> {
	let lowerBound = 0;
	let upperBound = array.length -1 ;

	while(lowerBound <= upperBound ){
		let midPoint = Math.floor((lowerBound + upperBound) / 2);
		let valueAtMidpoint = array[midPoint]

		if (valueAtMidpoint === searchValue){
			return midPoint;
		}else if (valueAtMidpoint > searchValue){
			console.log("the searchValue was lower")
			upperBound = midPoint -1
		}else if (valueAtMidpoint < searchValue){
			console.log("the searchValue was higher")
			lowerBound = midPoint + 1
		}
	}

	return -1;
}

const arrayWithHundred = [];

let index = 0;

while (index <= 200){
	arrayWithHundred.push(index + 1)
	index ++;
}
console.log(binarySearch(arrayWithHundred,200))

/*
	Manual Runthrough for binarySearch([2,3,5,6,7,9],6)
First Iteration: 
lb = 0;
ub = 5;
mp = 0+5/2 = 2.5 = 2
mpv = 5
5 < 6 search right => carried var

Second Iteration:
lb = 2 + 1 = 3
ub = 5;
mp = 3 + 5 / 2 = 4
mpv = 7
7 > 6 search left
ub = 4 - 1 = 3
lb = 3
mp = 3 + 3 / 2 = 3
mpv = 6

Found : 
6 === 6 return mp -> 3
*/


/*
	For an array that has 1 million elements, maximum steps to search for an element 
	is just 20 steps.
*/
const binary = num => {
	let result = [];
	let steps = 0;
	let ele = num
	while(num >= 1) {
		result.push(Math.floor(num / 2))
		num = Math.floor(num / 2);
		steps ++;
	}
	return {
		result,
		steps,
		ele
	};
}

// console.log(binary(100).steps)
const {steps, ele} = binary(200);
console.log(`It tooks ${steps} to search ${ele} elements`)
/*
[
  500000, 250000, 125000, 62500,
   31250,  15625,   7812,  3906,
    1953,    976,    488,   244,
     122,     61,     30,    15,
       7,      3,      1,     0
]
*/

const log = num => {
	let result = 0;
	while(num > 1){
		num = Math.floor((num/2))
		result++;
	}
	return result
}

console.log(log(1024))