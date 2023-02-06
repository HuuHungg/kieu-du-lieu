let teacher = {
    firstName: 'Minh',
    lastName: 'Thu',
}

function greet(greeting, message) {
    return `${greeting} ${this.firstName} ${this.lastName} ${message}`
}

let result = greet.apply(teacher, ['Em chao co', 'Co day mon gi the a'])
console.log(result)

// So sanh voi call() method
result = greet.call(teacher, 'Em chao co', 'Co day mon gi the a')

console.log(result)



// VD2 mượn hàm

let teacher2 = {
    firstName: 'Huu Hung',
    lastName: 'Nguyen',
    isOnline: false,
    goOnline() {
        this.isOnline = true
        console.log(`${this.firstName} ${this.lastName} is Online`)
    },
    goOffline() {
        this.isOffline = true
        console.log(`${this.firstName} ${this.lastName} is Offline`)
    }
}

let me = {
    firstName: 'Thuy',
    lastName: 'Trang',
    isOnline: false
}


console.log('Teacher', teacher2.isOnline)
teacher2.goOnline()
console.log('Teacher', teacher2.isOnline)

console.log('--------')

console.log('Student', me.isOnline)
teacher2.goOnline.apply(me)
console.log('Student: ', me.isOnline)


function Animal(name, weight) {
    this.name = name
    this.weight = weight
}


function Parrot() {
    Animal.apply(this, arguments) // argument đại diện cho các tham số của chúng ta, 
    this.speak = function() {
        console.log('Nha co khach')
    }
}

let conVet = new Parrot('Vet', 300)
console.log(conVet)

