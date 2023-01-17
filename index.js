// Math object

// Math.PI: Trả ra dãy số PI
console.log(Math.PI)

// Math.round: Làm tròn trên làm tròn dưới, gần với số nào hơn thì làm tròn với số đó
// Nếu ở giữa thì làm tròn trên 

console.log(Math.round(1.8)) //2
console.log(Math.round(1.3)) //1
console.log(Math.round(1.5)) //2

// abs // Trả về giá trị tuyệt đối, biến số âm thành số dương
// 4, -4 đều trả về 4

console.log(Math.abs(-4)) // 4
console.log(Math.abs(4)) // 4

// ceil làm tròn trên phải lớn hơn 0

console.log(Math.ceil(4.0001)) //5

// floor: làm tròn dưới

console.log(Math.floor(4.9999)) // 4

// random: trả về một dãy số nhỏ hơn 1, ngẫu nhiên
console.log(Math.random())
console.log(Math.floor(Math.random() * 10))


let random = Math.floor(Math.random() * 100)

if(random < 80) {
    console.log('Cuong hoa thanh cong!')
}else {
    console.log('Cuong hoa that bai')
}

// min giúp lấy ra con số nhỏ nhất
// max giúp lấy ra con số lớn nhất

Math.max(-100,2,90,100,50) // 100
Math.min(-100,2,90,100,50) // -100