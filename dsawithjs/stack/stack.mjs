

function Stack () {
    this.top = 0
    this.dataStore = []
    

    this.push = function (element) {
        this.dataStore[this.top++] = element
    }

    this.pop = function () {
        this.top--
        return this.dataStore[this.top]
    }

    this.peek = function (){
        return this.dataStore[this.top-1]
    }

    this.length = function () {
        return this.top
    }

    this.toString = function () {
        return this.dataStore
    }
}

export default Stack
