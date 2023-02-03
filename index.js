
// Optional Chaining

let obj = {
    name: 'Alice',
    cat: {
        name: 'Dinah',
        cat2: {
            name: 'Dinah2',
                // cat3:{
                //     name: 'Dinah3'
                // }
        }
    }
}
// Khi chúng ta không tin cái key đó có tồn tại hay không thì chúng ta thêm cái option chaining vào

if(obj.cat?.cat2?.cat3) {
    console.log(obj.cat.cat2.cat3.name)
}

// Cách sử dụng Option Chaining

// obj?.prop
// obj?.[expr]
// arr?.[index]
// func?.(args)

let obj2 = {
    getName(value) {
        console.log(value)
    }
}

obj2.getName?.(123)