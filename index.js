


Array.prototype.map2 = function(cb){
    let output = []
    let arrayLength = this.length
    
    for(let i = 0; i < arrayLength; i++) {
       let result = cb(this[i], i);
        output.push(result)
    }
    return output
}


let courses = [
    'Javascript',
    'PHP',
    'Ruby'
]
 
let htmls = courses.map2(function(course) {
    return `<h2> ${course} </h2>`
});

console.log(htmls.join(''))


