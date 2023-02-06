let iphone7 = {
    // Thuoc Tinh - Property
    name: 'iphone7',
    color: 'Pink',  
    weight: 300,


    // Phuong thuc - method
    takePhoto() {
        console.log(this)
    },
    objChild: {
        methodChild() {
            name: 'Child Object',
            console.log(this) 
        }
    }

}

console.log(iphone7.takePhoto())
iphone7.objChild.methodChild() // this ở đây là objChild


function Car (name,color, weight) {
    this.name = name;
    this.color = color;
    this.weight = weight;

    this.run = function() {
        console.log('Running...', this)
    }
}

let Carpark = new Car ('Mercedes', 'Black', 2000)
console.log(Carpark.run)

const button = document.querySelector('button')

button.onclick = function() {
    console.log(this)
}

function nameCar(name,color) {
    this.name = name;
    this.color = color;
    
    // this.run = function() {
    //     console.log(this)
    // }    
}

nameCar.prototype.run = function() {
    // Mỗi function trong Javascript đều có ngữ cảnh chạy riêng
    // Nếu ở trong strict mode sẽ là undefine
    // Context
    function test() {
        console.log(this) // This ở trong hàm này sẽ là windown
    }

    test() 
}

const porCher = new nameCar ('mercedes','red')
const CarPark = new nameCar ('BMW', 'Blue')
const motobikePark = new nameCar ('lead', 'white')

console.log(porCher.run())
console.log(CarPark.run())
console.log(motobikePark.run())

// Bài về this
