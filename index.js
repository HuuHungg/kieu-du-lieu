// Event listener


let btn = document.getElementById('btn')

// DOM EVENT
// btn.onclick = function() {
//     // Viec 1
//     console.log('Viec 1')

//     // Viec 2
//     console.log('Viec 2')
    
//     // Viec 3
//     alert('Viec 3')
// }    

// setTimeout(function() {
//    btn.onclick = function() {}
// },3000)


function work1() {
    console.log('I am studying IT')
}

function work2() {
    console.log('I am studying English everyday')
}

btn.addEventListener('click', work1)
btn.addEventListener('click', work2)


setTimeout(function() {
    btn.removeEventListener('click', work1)

},3000)


