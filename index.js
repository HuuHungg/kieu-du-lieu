
Array.prototype.forEach2 = function(cb) {
    for(let i in courses) {
        if(courses.hasOwnProperty(i)) {
            cb(courses[i], i, courses)
        }
    }
}



let courses = [
    'Javascript',
    'PHP',
    'Ruby'
]



courses.forEach2(function(course, index, array) {
    console.log(course, index, array)
})




