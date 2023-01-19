// callback 
// Là hàm (function) được truyền qua đối số 

// 

function myFunction (param) {
    if(typeof param === 'function') {
        param('F8にITを勉強してる')
    }
}

function myCallback(value) {
    console.log('Value: ', value)
}

myFunction(myCallback)