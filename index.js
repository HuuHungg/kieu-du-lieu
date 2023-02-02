
// Enhanced object literals
// 1. Định nghĩa key: value cho object
// 2. Định nghĩa method cho object

let name = 'Javascript basic study from zero to hero'
let price = 2400

let courses = {
    name,
    price,
    getName() {
        return name
    }
}

console.log(courses.getName())


// 3. Định nghĩa key cho object dưới dạng biến 

let fieldName = 'new-name'
let fieldPrice = 'price'

let course2 = {
    [fieldName]: 'Khoa hoc fullstack',
    [fieldPrice]: 2600
}

console.log(course2)