Array.prototype.every2 = function(cb) {
    
    let output = true
    
    for(let index in this) {
        if(this.hasOwnProperty(index)) {
            let result = cb(this[index], index, this)
            if(!result) {
                output = false;
                break;
            }
        }
    }
    
    return output
}


let courses = [
    {
        name:'Javascript',
        coin: 680,
        isFinish: true,
    },
    {
        name: 'PHP',
        coin: 690,
        isFinish: true,
    },
    {
        name: 'NodeJS',
        coin: 710,
        isFinish: true,
    },
    {
        name: 'ReactJS',
        coin: 800,
        isFinish: true,

    }
]

// Tối thiểu một phần tử thoả mãn là trả về true
let result = courses.every2(function(course,index,arr) {
    return course.isFinish
})

console.log(result)