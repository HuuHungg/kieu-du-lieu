function random() {
    console.log(Math.random())
}

random()


let teacher = {
    firstName: "Huu",
    lastName: "Hung"
}

let me = {
    firstName: 'Son',
    lastName: 'Dang',
    showfullName() {
        console.log(`${this.firstName} ${this.lastName} `)
    }
}

me.showfullName.call(teacher)


function Animal(name, weight) {
    this.name = name;
    this.weight = weight;
}

function Chicken(name, weight, legs) {
    Animal.call(this, name, weight)
    this.legs = legs
    
}

let sonDang = new Chicken('Son Dang', 66, 2)
console.log(sonDang)

//
function logger() {
     Array.prototype.forEach.call(arguments, item => {
        console.log(item)
     })

     const cars = ['BMW','Honda']

     cars.forEach(car => {
        console.log(car)
     })


     
}

logger(1,2,3,4,5)


function logger2() {
    const arr = Array.prototype.slice.call(arguments)
    arr.forEach(item => console.log(item))

}

logger2(1,2,3,4,5,6,7,8,9)


function logger3() {
    const arr = [...arguments]
    console.log(arr)
}

logger3(10,11,12,14)

