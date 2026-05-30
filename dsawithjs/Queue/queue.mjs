

function Queue () {
    this.dataStore = []


    this.enque = function (element) {
        this.dataStore.push(element)
    }

    this.deque = function (){
        return this.dataStore.shift()
    }

    this.front = function () {
        return this.dataStore[0]
    }

    this.back = function () {
        return this.dataStore[this.dataStore.length]
    }
}