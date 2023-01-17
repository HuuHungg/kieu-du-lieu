
let date = 6

switch (date) {
    case 2:
        console.log('Today is Monday')
        break;
    case 3:
        console.log('Today is Tuesday')
        break;
    case 4:
        console.log('Today is Wednesday')
        break;
    default:
        console.log(' I do not known')
}

// khi mà bỏ break, mà điều kiện đúng thì nó sẽ trả ra tiếp điều kiện tiếp theo đến khi gặp break thì thôi
// Trước case sẽ là điều kiện
// khi muốn kiểm tra 3 case trở lên thì dùng switch, ngược lại thì dùng if elses