// Lấy ra từng phẩn tử của một mảng 

let languages = [
    'Javascript',
    'PHP',
    'Ruby'
]

for(var value of languages) {
    console.log(value)
}


let languages2= 'Javascript';
for(var index of languages2) {
    console.log(index)
}


// Object 

let myInfo = {
    name: 'Huu Hung',
    age: 20
}

for(var value of Object.keys(myInfo)) {
    console.log(value)
}