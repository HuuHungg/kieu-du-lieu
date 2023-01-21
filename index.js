
// hasOwnProperty


Array.prototype.forEach2 = function(cb) {
    for(let index in this) {
        if(this.hasOwnProperty(index)) {
            cb(this[index], index, this)
        }
    }
}



let courses = [
    'Javascript',
    'PHP',
    'Ruby'
]

courses.push('NodeJs', 'ReactJS')

console.log(courses)

courses.forEach2(function(course, index, array) {
    console.log(course, index, array)
})




