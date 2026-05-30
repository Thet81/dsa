// binarySearch.js

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

console.log(binarySearch([2,3,5,6,7,9],6))

/*
	Manual Runthrough
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