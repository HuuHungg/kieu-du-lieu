// DOM events

// 1. Attribute events
// 2 . Assign event using the element node

let h1Elements = 
    document.querySelectorAll('h1')

for (let i = 0 ; i < h1Elements.length; i++) {
    h1Elements[i].onclick = (e) => console.log(e.target)
}



