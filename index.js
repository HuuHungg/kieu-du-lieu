
let myString = "毎日 JS 日本語を勉強してるがんばりましょう JS";
let myString2 = "Hoc JS tai F8 JS"
let myString3 = "   勉強してる　　"
// length
console.log(myString.length)

// Find index
// Tìm vị trí JS cuối cùng
console.log(myString.lastIndexOf('JS'))

// Tìm vị trí js đầu tiên 
console.log(myString.indexOf('JS',7))

// Tìm kiếm với search
console.log(myString.search('JS'))

// 3. Cut string
console.log(myString2.slice(4))
console.log(myString2.slice(-3, -1))
console.log(myString2.substring(4,6))

// Replace ghi de
console.log(myString2.replace(/JS/g, 'Javascript'))

// Uppercase // Lowercase

console.log(myString2.toUpperCase())
console.log(myString2.toLowerCase())

// Trim Loại bỏ kí tự thừa
console.log(myString3.trim())

// split: 
let Languages = 'Javascript'
console.log(Languages.split(''))

let fine = 'I am cooking dinner now'
console.log(fine[40])