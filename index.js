// Value types (Kiểu tham trị)
let a = 1
let b = a

a = 2
console.log(b)

// Reference type (Kiểu tham chiếu)

let c = {
    name: 'Mercedes'
}

let d = c

c.name = 'BMW'

console.log(c)


// Value type Mổi giá trị được lưu vào vùng nhớ khác nhau nó chép ra một ô nhớ mới
// Sưa ô nhớ này nó sẽ không liên quan đến ô nhớ khác     
function sum(a,b) {
    // let a = f
    // let b = g
    a = 0
    b = 0
    console.log(a,b)
}

let f = 1
let g = 2
sum(f,g)

console.log(f,g)


// Referent type: Kiểu tham chiếu

function func(obj) {
    obj.name = 'Mercedes'
    console.log(obj)
}   

const h = {
    name: 'BMW'
}


func(h)
console.log(h)

// Side effect

function createCar(obj) {
    obj = JSON.parse(JSON.stringify(obj))
    obj = {...obj}
    obj.name = 'Mercedes'
    return obj
}

const car = {
    name: 'BMW'
}

const newCar = createCar(car)

console.log(car)
console.log(newCar)