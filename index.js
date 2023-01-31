function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

sleep(1000)
    .then(() => {
        console.log('Huu Hung')
        return sleep(1000)
    })

    .then(() => {
        console.log('Huu Hung Nguyen dang hoc')
        return sleep(1000)
    })

    .then(()=> {
        console.log('May toan that bai thoi')
        return sleep(1000)
    })

    .then(() => {
        console.log('May phai co len')
        return sleep(1000)
    })