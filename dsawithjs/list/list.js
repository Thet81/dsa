
const movies = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Godfather: Part II",
    "Pulp Fiction",
    "The Good, the Bad and the Ugly",
    "12 Angry Men",
    "Schindler's List",
    "The Dark Knight"
]

function List () {
    this.pos = 0
    this.dataStore = []
    this.listSize = 0
    this.append = function (element) {
        this.dataStore[this.listSize++] = element
    }

    this.find = function (element) {
        
        for (let i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i] === element) {
                return i
            }
        }
        return -1;
    }

    this.remove = function (element) {
        const index = this.find(element)

        if (index !== -1) {
            this.dataStore.splice(index,1)
            this.listSize --;
            return true
        }

        return false
    }

    this.length = function () {
        return this.listSize
    }

    this.toString = function () {
        return this.dataStore.toString()
    }

    this.insert = function (element,after) {
        const insPos = this.find(after)

        if (insPos > -1) {
            this.dataStore.splice(insPos+1,0,element)
            this.listSize++
            return true
        }

        return false
    }

    this.clear = function () {
        delete this.dataStore
        this.dataStore = []
        this.listSize = 0
        this.pos = 0
    }

    this.contain = function (element) {
        for (let i=0; i < this.dataStore.length; i++) {
            if (this.dataStore[i] == element) {
                return true
            }
        }
        return false
    }

    this.front = function () {
        this.pos = 0
    }

    this.end = function () {
        this.pos = this.dataStore.length - 1
    }

    this.prev = function () {
        if (this.pos > 0) {
            this.pos --;
        }
    }

    this.next = function () {
        if (this.pos < this.listSize) {
            this.pos ++ ;
        }
    }

    this.currPos = function () {
        return this.pos
    }

    this.moveTo = function (position) {
        this.pos = position
    }

    this.getElement = function () {
        return this.dataStore[this.pos]
    }
}

function Customer (name,movie) {
    this.name = name
    this.movie = movie
}


function displayList(list,listtype="") {
    for (list.front(); list.currPos() < list.length(); list.next()) {
        if (list.getElement() instanceof Customer) {
            console.log(listtype,":->>",list.getElement()['name'] + ", " + list.getElement()["movie"])
        }else {
            console.log(listtype,":->>",list.getElement())
        }
    }
}


function createArr (arr) {
    for (let i=0; i < arr.length; i++) {
        arr[i] = arr[i].trim()
    }
    return arr
}

const myMovie = createArr(movies)

const moviesList = new List()

for (let i= 0; i < movies.length; i++) {
    moviesList.append(myMovie[i])
}

const customers = new List()


function checkOut (name, movie, filmList, customerList) {
    if (filmList.contain(movie)){
        let c = new Customer(name,movie)
        customerList.append(c)
        filmList.remove(movie)
    }else {
        console.log(`${movie} is not avaiable`)
    }
} 

checkOut("John Doe","The Godfather",moviesList, customers)
checkOut('Jasmine',"The Dark Knight",moviesList,customers)
displayList(moviesList,"Movie")
displayList(customers,"Customer")
export default List