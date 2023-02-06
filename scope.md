Apply

Phương thức này cho phép gọi một hàm với một this (bind) và truyền đối số cho hàm gốc dưới dạng mảng

Giống nhau

- Cú pháp truy cập

function fn() {}
    // bind 
    fn.bind()

    // call
    fn.call

    //apply
    fn.apply

Là các methods được thừa kế từ Function.prototype

function() {}

fn.bind === Function.prototype.bind // true
fn.call === Function.prototype.call // true
fn.apply === Function.prototype.apply // true


