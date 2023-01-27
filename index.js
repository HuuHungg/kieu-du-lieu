
Array.prototype.filter2 = function(cb) {

    let outPush = []
    for(let i in this) {
        if(this.hasOwnProperty(i)) {
            let result = cb(this[i],i,this)
            if(result) {
                outPush.push(this[i])
            }
        }
    }
return outPush

}


let courses = [
    {
        name:'Javascript',
        coin: 680,
    },
    {
        name: 'PHP',
        coin: 690,
    },
    {
        name: 'NodeJS',
        coin: 710,
    },
    {
        name: 'ReactJS',
        coin: 800
    }
]

let courseFilter = courses.filter2(function(course, index, arr) {
    console.log(course, index)
    return course.coin > 700
})

console.log(courseFilter)

