let course = [
    'Javascript',
    'PHP',
    'Ruby',
    'PHP'
]

// to string
console.log(course.toString())

// Join hoạt động như string, có thể chỉ đinhj dấu phân cách
console.log(course.join(' - '))

// Pop Xoá element ở cuối mảng và trả về phần tử đã xoá
console.log(course.pop()) // PHP
console.log(course)

// Push thêm một hoặc nhiều phần tử ở cuối mảg và trả về độ dài mới của mảng

let fruit = ['Orang', 'Apple']
fruit.push('Mango', 'Banana',)
console.log(fruit)

// Shift xoá phần tử ở đầu mảng và trả về phần tử đã xoá
console.log(course.shift()) // Javascript
console.log(course)

// Unshif thêm một hoặc nhiều phần tử ở đầu mảng và trả về độ dài mới của mảng
let fruit2 = ['Orang', 'Apple',]
fruit2.unshift('watermelon')
console.log(fruit2)

// Splice : cắt xoá chèn phần tử vào mảng, (vị trí bắt đầu, số phần tử muốn xoá, element muốn thêm vào)
let game = ['nr', 'lw','lm']
game.splice(1,0,'dra','mobile','online')
console.log(game)

// Concat: Nối mảng array với nhau

let mergeCourse = fruit2.concat(game)
console.log(mergeCourse)

// Slicing (slice): cắt một vài phần tử của mảng (Ví trí đầu tiên là bắt đầu cắt, vị trí thứ hai là kết thúc cắt)
let fullCourse = ['Rect', 'MySQL', 'FE', 'BE']
console.log(fullCourse.slice(3))