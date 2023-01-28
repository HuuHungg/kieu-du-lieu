// innerText 

let headingElement = document.querySelector('.heading')

console.log(headingElement.innerText)
console.log(headingElement.textContent)

// Sửa nội dung của textnode nằm trong elementnode

headingElement.innerText = '日本語が難しいですので頑張りましょう'  
console.log(headingElement.innerText)

