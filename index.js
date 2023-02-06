
let teacher = {
    firstName: 'Minh',
    lastName: "Thảo",
    getFullName(data1,data2) {
        console.log(data1,data2)
        return `${this.firstName} ${this.lastName}`
    }
}


let student = {
    firstName: "Huu Hung",
    lastName: "Nguyen"
}


// Case 1:
console.log(teacher.getFullName()) // "Minh Thao"

// Case 2:
const getTeacherName = teacher.getFullName.bind(student) // Các từ khoá mà truyền vào bind thì nó sẽ răngg buộc đến từ khoá ở trong obj đấy
console.log(getTeacherName('Test1', 'Test2')) // "Minh Thu"




let teacher2 = {
    firstName: "Thuy",
    lastName: "Trang",
    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

let button = document.querySelector('button')
button.onclick = teacher2.getFullName.bind(teacher2)



let $ = document.querySelector.bind(document)
let $$ = document.querySelectorAll.bind(document)
console.log($('#heading'))



const app = (() => {
    let cars = ['BMW', 'Mercedes']
    
    const root = $('#root')
    const input = $('#input')
    const submit = $('#submit')


    return {
        add(car) {
            cars.push(car)
        },
        delete(index) {
            cars.splice(index,1)
        },
        render() {
            const html = cars.map((car,index) => `
                <li>
                    ${car}  
                    <span class="delete" data-index="${index}"> x </span>
                 </li>
            `)
            .join('')
            root.innerHTML = html
        },
        handleDelete(e) {
            let deleteBtn = e.target.closest('.delete')
            if (deleteBtn) {
                const index = deleteBtn.dataset.index
                console.log(this)
                this.delete(index)
                this.render()
            }
        }, 
        init() {
            // Handle DOM events
            submit.onclick = () => {
                    let car = input.value
                    this.add(car)
                    this.render()

                    input.value = null
                    input.focus()
            }

            root.onclick = this.handleDelete.bind(this)
            this.render()
        }   
    }
})()
app.init()
// Delegate()