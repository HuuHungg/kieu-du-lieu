let a = 1 , b = 2 , c = 3;
console.log(a+b+c)

let fullName = 'Huu Hung';
let lasName = 'ReacJS at fullstack';
console.log(`${fullName} dang hoc ${lasName} `)
console.log(typeof fullName)

let firstName = `勉強してるがんばりましょう　'でも難しいですががんぱってくだい '`
console.log(firstName)

let isSuccess = true;
console.log(isSuccess)

let age 
console.log(age)

let isNull = null
console.log(isNull)

let id = Symbol('id') // unique
let id2 = Symbol('id') // unique

console.log(id === id2)

// Function
// let myFunction = function() {
//     alert('毎日2時間ぐらい日本語を勉強することにしてる')
// }

// myFunction()

// Object

let myObject = {
    name: 'Huu Hung',
    age: 20,
    address: 'Ha Noi' ,
    myFunction: function() {
        console.log(勉強してる)
    }
}

console.log('Myobject', myObject)

let myArray = [
    'Javascript', 'PHP', 'Ruby',
]

console.log(typeof myArray)