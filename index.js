// Tagged template literals

function highlight ([first, ...strings], ...values) {
    return values.reduce(
        (acc, crr) => [...acc, `<span> ${crr} </span>`, strings.shift()], 
        [first]
    )
    .join('')
} 


let branch = 'F8';
let course = 'Javascript';

let html = highlight `Học lập trình ${course} tại ${branch}!`;
console.log(html)

