

const matrix = function (numsRow, numsCols, initial) {
    let arr = []
    for (let i = 0; i < numsRow; i++) {
        let cols = []
        for (let j = 0; j < numsCols; j++) {
            cols[j] = initial
        }
        arr[i] = cols
    }
    return arr
}

const max = matrix(3,3,'O')


const grades = [[10,20,30],[40,50,60],[70,80,90]]

function calTotal (grade) {
    let total = 0;
    for (let row = 0; row < grade.length; row++) {
        for (let col = 0; col < grade[row].length; col++){
            total += grade[row][col]
            }
    }
    return total
}

console.log(calTotal(grades))
