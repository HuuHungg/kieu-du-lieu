Array.prototype.some2 = function(cb) {
    let output = false

    for( let index in this) {
        if(this.hasOwnProperty(index)) {
            if(cb(this[index], index, this)) {
                output = true;
                break
            }

        }
    }
    return output
}



let courses = [
    {
        name:'Javascript',
        coin: 680,
        isFinish: false,
    },
    {
        name: 'PHP',
        coin: 690,
        isFinish: false,
    },
    {
        name: 'NodeJS',
        coin: 710,
        isFinish: true
    },
    {
        name: 'ReactJS',
        coin: 800,
        isFinish: false,

    }
]

// Tối thiểu một phần tử thoả mãn là trả về true
let result = courses.some2(function(course,index) {
    return course.isFinish
})

console.log(result)