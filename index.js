let boxElement = document.querySelector('.box');

// Cách 1
boxElement.style.width = '100px',
boxElement.style.height = '200px'
boxElement.style.backgroundColor = 'red'

// Cách 2

Object.assign(boxElement.style, {
    with: '200px',
    height: '100px',
    backgroundColor: 'green',
    
})

// Khi muốn lấy ra một thuộc tính trong element style
console.log(boxElement.style.backgroundColor) 
console.log(boxElement.style.width)
