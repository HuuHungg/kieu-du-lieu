// spread: Toán tử giải
// Lấy ra những element và bỏ đi dấu ngoặc


// Array
let array1 = ['Javascript', 'Ruby', 'PHP']

let array2 = ['ReactJS', 'Dart']

let array3 = [...array1,...array2]
console.log(array3)


// Object

let  object1 = {
    name: 'Javascript',
}

let object2 = {
    price: 1000
}

let object3 = {
    ...object1,
    ...object2,
}

console.log(object3)

let defaultConfig = {
    api: 'http://domain-trang-khoa-hoc',
    apiVersion: 'v1',
    other: 'other',
    studyTime: '2 nam'
}

let exerciseConfig = {
    ...defaultConfig,
    api: 'http://domain-trang-chua-bai-tap',
    version: 400,
}


console.log(exerciseConfig)


// Truyen tham so cho ham

let array = ['Javascript', 'PHP', 'Ruby', 'ReactJS']

function logger(...rest) {
    for(let i = 0; i < rest.length; ++i) {
        console.log(rest[i])
    }
}

logger(...array)