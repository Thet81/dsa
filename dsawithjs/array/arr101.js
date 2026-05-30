

let arr = []

for (let i = 0; i < 10; i++) {
    arr[i] = i + 1
}

const shallowCopy = arr
arr[0] = 100

console.log(arr)
console.log(shallowCopy)

// deep copy

const copy = (arr1, arr2)=> {
    for (let i=0 ; i < arr1.length; i++) {
        arr2[i] = arr1[i]
    }
    return {
        arr1,
        arr2
    }
} 

const copied = copy(shallowCopy,[])
console.log(copied)