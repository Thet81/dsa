


function Queue () {
    this.dataStore = []


    this.enque = function (element) {
        this.dataStore.push(element)
    }

    this.deque = function (){
        let priority = this.dataStore[0].code
        for(let i = 1; i < this.dataStore.length; ++i) {
            if (this.dataStore[i].code < priority) {
                priority = i
            }
        }
        priority = 0
        return this.dataStore.splice(priority,1)
    }

    this.front = function () {
        return this.dataStore[0]
    }

    this.back = function () {
        return this.dataStore[this.dataStore.length]
    }
}

function Patient (name,code) {
    this.name = name;
    this.code = code
}

const q = new Queue()
q.enque({name : 'Jack',code:1})
q.enque({name : 'Cathy', code : 2})
q.enque({name: 'Arto', code : 3})

console.log(q.deque())
console.log(q)

console.log(q.deque())
console.log(q)

console.log(q.deque())
console.log(q)

// console.log(q.deque())
// console.log(q)
