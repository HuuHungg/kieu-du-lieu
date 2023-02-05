// Strict mode
"use strict"; // Sử dụng nghiêm ngặt    

fullName = 'Huu Hung Nguyen'

function testFunc() {
    // "use strict"
    age = 18 // Tạo ra biến age ở phạm vi Global
}

testFunc()
console.log(fullName)
console.log(age)


function sum(a,a) {
    return a + a
}
console.log(sum(6,9))

