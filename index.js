// Array method :
    // forEach() // duyệt qua từng phần tử của mảng
    // every() //  Tất cả phần tử của mảng phải thoả mãn một điều kiện gì đó trả về kiểu booleand
    // Some() // Chỉ cần một ông trong mảng trả về điều kiện đúng, nó sẽ ngừng lại sự kiểm tra khi gặp kết quả đúng trả về kiểu boolean
    // find() // Tìm kiếm , nêú có kết quả thì nó sẽ trả về kết quả đó, nếu không có thì nó sẽ trả về null hoặc undifine
    // filter() // Cũng là tìm kiếm nhưng nó sẽ trả về tất cả phần tử thoả mãn
    // map() // Muốn chỉnh sửa thay đổi element của array
    // reduce()


let courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 600,
    },
    {
        id: 2,
        name: 'ReactJs',
        coin: 700,
        
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 4,
        
    },
    {
        id: 4,
        name: 'NodeJS',
        coin: 800,
        
    }, 
    {
        id: 5,
        name: 'Fine',
        coin: 600,
        
    },
    {
        id: 6,
        name: 'Ruby',
        coin: 40,
        
    },
    {
        id: 7,
        name: 'Ruby',
        coin: 60,
        
    },

]

// ForEach
courses.forEach(function(course,index) {
    console.log(index,course)
})

// every

let isFree = courses.every(function(course, index) {
    console.log(index)
    return course.coin === 600
})
console.log(isFree)


// Some 

let isFree2 = courses.some(function(course, index) {
    return course.coin === 4
})

console.log(isFree2)

// find
let array = [0,1,3,4,5,6,7]

let found = array.find(function(course, index) {
    return course > 5
}) 

console.log(found)


// filter

let isFilter = courses.filter(function(course) {
    return course.name === 'Ruby'
})

console.log(isFilter)



// map 

let handler = function(course, index) {
        return `<h2> ${course.name} </h2>`
}

let newCourse = courses.map(handler)

console.log(newCourse.join(''))

