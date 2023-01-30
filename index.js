// DOM events

let inputValue;

let inputElement = document.querySelector('input[type="text"]')
console.log(inputElement)

inputElement.onchange = function(e) {
 // .value Lấy giá trị của thẻ input, .target: lấy ra được chính giá trị của elêmnt node     
    inputValue = e.target.value
}


let checkElement = document.querySelector('input[type="checkbox"]')

checkElement.onchange = function(e) {
    console.log(e.target.value)
}

let selectElement = document.querySelector('select')
    selectElement.onchange= (e) => {
        console.log(e.target.value)
    }


Keyup / keydown

let inputElement = document.querySelector('input[type="text"]')
    inputElement.onkeyup= (e) => {
        console.log(e.which)
    
    switch(e.which) {
        case 27:
            console.log('Exit')
            break;
        
        case 65: 
            console.log('Huu Hun Nguyen')
            break;
        
    }
}




document.onkeydown = function(e) {
    switch(e.which) {
        case 13:
            console.log('Huu Hung Nguyen dang hoc lap trinh')
            break;
        case 66: 
            console.log('IT that la kho')
            break;
    }
}