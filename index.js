// Hosting là gì
// Đưa lên trên hoặc kéo lên trên
// Hoisting với var 

console.log(age) // undefine
console.log(fullName) // ReferenceError: fullName is not defined
var age = 16

{
    let fullName = 'Nguen Huu Hung'
    console.log(fullName)
}