

function LetterArray () {
    this.dataStore = []

    this.add = function (...element) {
        this.dataStore.push(...element)
    }

    this.word = function () {
        return this.dataStore.join('')
    }
}

const alph = new LetterArray()
alph.add('p','r','o')

console.log(alph.word())