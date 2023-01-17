function Person(firstName,lastName,age,eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;

    this.getName = function() {
        return `${this.firstName} ${this.lastName} ${this.age} ${this.eyeColor} `
    }
}


Person.prototype.className = 'F8';
Person.prototype.getClassName = function() {
    return this.className;
}


let myMother = new Person('Sally','Rally',40,"black")
let myFather = new Person('Fine', 'Cake', 45, "blue")

console.log(myMother.className)
console.log(myFather.getClassName())
