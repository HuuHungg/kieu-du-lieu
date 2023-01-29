// ClassList prototype


// add: Thêm class vào Element 
// contains: Kiểm tra xem 1 class có nằm trong element này hay không
// remove: Xoá bỏ class khỏi element của các bạn 
// Toggle xoá bỏ class đó, có thì nó thêm không có thì nó sẽ gỡ bỏ



// add 
let boxElement = document.querySelector('.box');
    boxElement.classList.add('red', 'blue')

// contains:  Kiểm tra class xem có tồn tại hay không

console.log(boxElement.classList.contains('red'))

// Để xoá thì dùng remove 

boxElement.classList.remove('blue')

setTimeout(() => {
    boxElement.classList.remove('red')
},3000)


// Tonggle: 

setInterval(() => {
    boxElement.classList.toggle('red')
},2000)

