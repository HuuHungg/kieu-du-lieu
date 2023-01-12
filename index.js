
function writeLog(message) {
    let myString = ''
    for(var param of arguments) {
        myString += `Nguyen Huu Hung dang hoc ${param} -`
    }

    console.log(myString)
}

writeLog(['javascript', 'PHP', 'Ruby','Mysql'], ['fe', 'be'], ['react'])
