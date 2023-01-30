// 1. JSON là một định dạng dữ liệu (chuỗi)
// 2. JavaScript object notation
// 3. JSON: Number, Boolean, Null, Array, Object, String
// Mã hoá / Giả mã
// Encode /decode
// Stringify: Từ Javascript types -> JSON
// Parse:  Từ JSON -> Javascript types


let json1 = '["Javascript", "PHP"]'
let json = '{"name": "Son dang", "age": 18}'

let a = '"Huu Hung Nguyen"'
console.log( JSON.parse(json))

console.log(JSON.stringify({
    name: 'Song Dang',
    age: 16,
    test: function() {}
}))

