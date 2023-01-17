// // let i = 0
// // while ( i < 10) {
// //     i++;
// //     console.log(i);
// // }   

// let myArray = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ]


// let i = 0

// while(i < myArray.length) {
//     console.log(myArray[i])
//     i++;
// }


// do while

// let  i = 0
// do {
//     i++;
//     console.log(i)

// }while(i < 5)


let i = 0;
let isSuccess = false;

do {
    i++;
    console.log('Nap the la ' + i)
    if(false) {
        return isSuccess = true;
    }
}while (!isSuccess && i <= 3)