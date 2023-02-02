
// Khi mà viết Arrow function không có dấy {} thì nó hiểu là retrun luôn
// Còn khi có dấu {} thì nó sẽ hiểu viết khối code trong đó và phải return

const sum = (a,b) => {
    return {
        a:a,
        b:b
    }
}

console.log(sum(2,2))


const logger = (log) => console.log(log)
logger('Huu Hung Nguyen ...')

const course = {
    name: 'Javascript basic',
    getName: function() {
       return this.name; // context arrow function không có context
    }
}

console.log(course.getName())



// arrow function trong trường hợp này sẽ bị lỗi
let Course = (name, addrest) => {
    this.name = name;
    this.addrest = addrest
} 

let jsCourse =  new Course ('Huu Hung', 'Viet Nam')
console.log(jsCourse)

