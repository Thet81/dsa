

function factorial (number) {
    if (number == 1 ) {
        return number;
    }else {
        console.log(`${number} * factorial(${number-1})`)
        return number * factorial(number-1)
    }
}

console.log(factorial(5))


function Checking (amount) {
    this.balance = amount

    this.string = function () {
        return this.balance.toString()
    }
}

Checking.prototype.deposit = function (amount) {
    this.balance += amount
}

Checking.prototype.check = function (){
    return this.balance
}

const kbz = new Checking(3000)
kbz.deposit(300000)
console.log(kbz.string())
