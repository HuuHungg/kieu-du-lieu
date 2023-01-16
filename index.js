function Person(firstName,lastName,age,eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;

    this.getName = function() {
        return `${this.firstName} ${this.lastName} ${this.age} ${this.eyeColor} `
    }
}



let myMother = new Person('Sally','Rally',40,"black")
let myFather = new Person('Fine', 'Cake', 45, "blue")

myMother.title = 'She is cooking dinner'
myFather.style = 'He is eating dinner'

console.log(myMother.getName())

console.log(myFather.age)