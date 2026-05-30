

function Grade () {
    this.dataStore = []

    this.add = function (element) {
        this.dataStore.push(element)
    }
    this.average = function () {
        let total = 0;
        for (let i = 0; i < this.dataStore.length;i++) {
            total += this.dataStore[i]
        }

        return total / this.dataStore.length
    }
}

const johnDoe = new Grade()
johnDoe.add(30,30,20,40)
console.log(johnDoe.average())