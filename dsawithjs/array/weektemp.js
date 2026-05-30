

function WeekTemp () {
    this.dataStroe = [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
    ]
    this.week = []
    this.month = []
    this.addTemp = function (week,day,temp) {
        week -=1
        day -=1
        if (week > this.dataStroe.length || day > this.dataStroe[0].length) {
            return 'Invalid day or week'
        }
        this.dataStroe[week][day] = temp
        return this.dataStroe
    }
    this.average = function () {
        let total = 0
        for(let i=0; i <this.dataStroe.length; i++) {
            total += this.dataStroe[i]
        }   

        return total / this.dataStroe.length
    }
}

const Jan = new WeekTemp()
console.log(Jan.addTemp(3,3,30))
