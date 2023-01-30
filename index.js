// 1. preventDefault: Bỏ đi hành vi mặc định 

// let aElement = document.links;

// for(let i = 0; i < aElement.length; ++i) {
//     aElement[i].onclick = function(e) {

//         if(!e.target.href.startsWith('https://f8.edu.vn')) {
//             e.preventDefault();
//         }
//     }
// }

let aElement = document.links
let aLength = aElement.length

for(let i=0; i< aLength; ++i) {
    aElement[i].onclick = function(e) {
        if(!e.target.href.startsWith('https://google.com.vn')) {
            e.preventDefault()
        }
    }
}


let ulElement = document.querySelector('ul');
ulElement.onmousedown = function(e) {
    e.preventDefault()
}


ulElement.onclick = function(e) {
    console.log(e.target)
}


// 2. stopPropagation: Ngăn chặn hành vi nổi bọt lan truyền


document.querySelector('div').onclick = 
    function() {
        console.log('DIV')
    }

document.querySelector('button').onclick = 
    function(e) {
        e.stopPropagation();
        console.log('Click me')
    }


