
// IIFE
// - Dùng dấu ; trước IIFE
// - IIFE Là hàm "private" có tính riêng tư muốn truy cập vào nó thì không truy cập được
// - Những đoạn code viết trong iife sẽ không bị ảnh hưởng đến biến toàn cục
// - Bên ngoài không thể truy cập được vào bên trong vì thế người ta dùng iife




;(function myFunc(message) {
    console.log('Message', message)
}) ('Huu Hung Nguyen')

// myFunc() Khi truy cập ở đây thì nó sẽ không truy cập được 

let i = 0

;(function myFunc2() {
    i++
    console.log(i)
    if(i < 5) 
        myFunc2()
}) ()


;(function() {
    let fullName = 'Huu Hung Nguyen'
    console.log(fullName)   
})()



const app = (function() {
    // Private
    
    const cars = []

    return {
        get(index) {
            return cars[index]
        },
        add(car) {
            cars.push(car)
        },
        edit(index, car) {
            cars[index] = car
        },
        delete(index) {
            cars.splice(index, 1)
        }
    }
})()

