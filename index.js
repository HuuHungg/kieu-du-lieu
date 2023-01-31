// Sync : Đồng bộ
// Ásync: Bất đồng bộ (setTimeout, setInterval, fetch, XMLHttpRequest, file reading)
// request animation frame

// setTimeout(function() {
//     console.log(1)
// }, 1000)

// console.log(2)

// // Callback hell 
// // Pyramid of doom
// // Nỗi đau
// setTimeout(function() {
//     console.log(1) // viec 1
//         setTimeout(function() {
//             console.log(2) 
//             setTimeout(function() {
//                 console.log(3) 
//                     setTimeout(function() {
//                         console.log(4)
//                     },1000)
//             },1000)
//         },1000)
// },1000)


// Lý thuyết, cách hoạt động

let promise = new Promise(
    // Executor
    function(resolve, reject) {
        // Logic
        // Thành công: resolve()
        // Thất bại: reject()        

        // Fake call API
        resolve([
            {
                id: 1,
                name: 'Javascript'
            },
            {
                id: 2,
                name: 'PHP'
            }
        ]);
        
        // reject ('Co loi')
    }
);

// Chain


promise
    .then(function() {
        return new Promise(function(resolve) {
            setTimeout(() => {
                resolve('Huu Hng Nguyen')
            },3000)
        })
    })

    .then(function(data) {
        console.log(data)
    })

    .catch(function(err) {
        console.log(err)
    })

    .finally(function() {
        console.log('Done')
    })





