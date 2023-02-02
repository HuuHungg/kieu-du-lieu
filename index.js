// Rest Lấy ra những phần còn lại
let array = ['Javascript', 'PHP', 'Ruby']

let [a,b, ...rest] = array // Destructuring (array thì dùng ngoặc vuông)
// vì array không có key nên đặt tên gì cũng được

console.log(a,b)
console.log(rest)


let course = {
    name: 'Javascript-bassic',
    price: 1000,
    image: 'image-address',
    children: {
        name: 'Huu Hung Nguyen'
    }

}


let {name: parentName, children: {name: childrenName} , ...rest2} = course; // Destructuring (object thì dùng ngoặc nhọn)
// vì object có key và value nên là lấy ra đúng tên key and value
// Nếu đưa vào một cái không tồn tại thì nó sẽ trả về undefine

console.log(parentName)
console.log(childrenName)

let {name, description = 'default description'} = course
// nếu không có defaut thì nó sẽ trả về default description 
// Nếu có thì nó sẽ trả về giá giá trị đấy

console.log(name)
console.log(description)

// function

function logger(...prams) {
    console.log(prams)
}
logger(1,2,3,4,5)


