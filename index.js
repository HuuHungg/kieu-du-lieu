// Global
let message = 'Hoc ve scope'
function log() {
    console.log('毎日ITを勉強してる頑張りましょう')
}

function logger () {
    console.log(message)
    log()
}

logger()


// Codeblock

{
    const age = 18
    console.log(age)
}



// Local scope: Tạo ra từ phần thân của hàm khi hàm đó được gọi 

function logger2() {
    function name() {
        console.log('Huu Hung Nguyen dang hoc IT')
    }
    name()

    let message2 = "THUOC CODE BLOCK"
    console.log(message2)
}

logger2()


// Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó và bên ngoài nó 

function fullNam(first,last) {
    console.log(first,last)
    let age = 20
    console.log(age,message) // Hàm message là hàm bên ngoài thuộc phạm vi scope nên có thể truy cập được


}

fullNam('Huu','Hung')
fullNam('Son', 'Dang')
fullNam('Thuy', 'Trang') 

// Biến được tạo ra ở hộp lớn hơn có thể truy cập ở hộp bé hơn và còn biến ở họp bé hơn thì không thể truy cập ở hộp lớn hơn

function logger3() {
    let age = 48
        function logger4() {
            console.log(age)        
        }
        logger4()
}   
logger3()

// - Cách thức một biến được truy cập

let year = 20
{
    let year = 19
    {
        {
            {
                
                console.log(year)

                // let year2 = 100 coder here can't find
            }
        }1
    }
}

// Output = 10


function makeCouter () {
    let couter = 0

    function increase() {
        return ++couter
    }
    return increase
}

const increase1 = makeCouter()

console.log(increase1())
console.log(increase1())
console.log(increase1())