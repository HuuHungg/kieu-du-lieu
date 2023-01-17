// Break: Khi muốn thoát khỏi vòng lặp
// Continue khi muốn bỏ qua một vài lần lặp của vòng lặp

for (var i=0; i < 10; i++) {
    console.log(i)
    
    if(i>=7) {
        break
    } 
}

for(let a = 0; a < 10; a++) {
    if(a%2 !== 0) {
        continue;
    }
    
    console.log(a)
}