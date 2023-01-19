Array.prototype.reduce2 = function(callback,result) {
    // Không truyền index value
    let i = 0
    if(arguments.length<2) {
        i = 1
        result = this[0]
    }

    // Truyển index value
    for(; i < this.length; i++) {
        result = callback(result, this[i], i, this)
    }

    return result
}

const number = [1,2,3,4,5]

const result = number.reduce2 ((total, number) => {
    return total + number
},10)

console.log(result)

