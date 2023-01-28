// DOM attributes

let headingElement = document.querySelector('h1')
console.log(headingElement)

headingElement.id = 'fine'
headingElement.className = 'work'

// set Attribute
headingElement.setAttribute('href', 'heading2')
headingElement.setAttribute('title', 'heading3')


// get Attribute: Lấy ra attribute
console.log(headingElement.getAttribute('class'))
console.log(headingElement.getAttribute('title'))
console.log(headingElement.getAttribute('id'))