// HTML DOM
// 1. Element: ID, class, tag, CSS  selector, HTML collection
// 2. Attribute
// 3. Text


// ID
let result = document.getElementById('heading')
console.log(result)

// ClassName

let headingNodes = document.getElementsByClassName('heading2')
console.log(headingNodes)

// Tag Name: Lấy ra tên của thẻ
let tagNodes = document.getElementsByTagName('h2')
console.log(tagNodes)
let pNodes = document.getElementsByTagName('p')
console.log(pNodes)

// CSS selector

let selector = document.querySelector('.box .heading-3:nth-child(3)') 
// Muốn lấy ra tất cả thì dùng querySelectorAll     
console.log(selector)

let selector2 = document.querySelectorAll('.heading-3')
console.log(selector2)

// HTML Collection
// anchors: Lấy ra tất cả thẻ a có atribute là Name

console.log(document.anchors);


