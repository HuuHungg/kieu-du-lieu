
let teacher = {
    firstName: 'Minh',
    lastName: "Thảo",
    getFullName(data1,data2) {
        console.log(data1,data2)
        return `${this.firstName} ${this.lastName}`
    }
}


let student = {
    firstName: "Huu Hung",
    lastName: "Nguyen"
}


// Case 1:
console.log(teacher.getFullName()) // "Minh Thao"

// Case 2:
const getTeacherName = teacher.getFullName.bind(student) // Các từ khoá mà truyền vào bind thì nó sẽ răngg buộc đến từ khoá ở trong obj đấy
console.log(getTeacherName('Test1', 'Test2')) // "Minh Thu"




let teacher2 = {
    firstName: "Thuy",
    lastName: "Trang",
    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

let button = document.querySelector('button')
button.onclick = teacher2.getFullName.bind(teacher2)