
// 1.Var / Let, Const: Scope,Hosting
// 2. Const / Var, Let: Assignemt

// Code block: if else, loop, {}, ....

// Var bên ngoài block thì truy cập được, 
// Let, const: Chỉ truy cập được bên trong block, bên ngoài block thì không truy cập được

{
    let course = 'Javascript Bassic'
        {
            {
                let course = 'every second with you was so special'
                console.log(course) 
            }
        }
}



// var hỗ trợ hosting còn let, const không hỗ trợ hosting (Đưa lên trên)


a=1;
var a;
console.log(a)


// 2. Const / Var, Let: Assignemt (var với Let gán lại được, const không gán lại được)

let b = 1
b = 100
console.log(b)

const d = {
    name: 'Javascript'
}

//  Gán lại thuộc tính name chứ không phải gán lại ạ
d.name = 'Javascript bassic'

console.log(c.name)


// code thuần: var
// Babel: Const, let
// Khi định nghĩa bến và không gán lại biên đó thì dùng const
// Khi cần gán lại giá trị cho biến thì dùng let 

