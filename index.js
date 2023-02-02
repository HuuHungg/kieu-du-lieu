// rest object
function logger({name, price, ...rest}) {
    console.log(name)
    console.log(price)
    console.log(rest)

}

logger({
    name: 'Javascript',
    price: 1000,
    description: 'Description content'
})

// array

function logger2([a,b, ...rest2]) {
    console.log(a)
    console.log(b)
    console.log(rest2)
}

logger2([2,6,1,2,3,4,5,5,6])