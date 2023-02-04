// function createCounter() {
//     let counter = 0
    
//     function increase() {
//         return ++counter
//     }

//     return increase
// }

// const counter1 = createCounter()

// console.log(counter1())
// console.log(counter1())
// console.log(counter1())

// let counter2 = createCounter()

// console.log(counter2())
// console.log(counter2())
// console.log(counter2())


// Viết code ngắn gọn hơn

function logger(namespace) {
    function logger2(message) {
        console.log(`[${namespace}] ${message}`)
    }
    return logger2
}

let info = logger('Info')

info('Khoa hoc ReactJS')
info('Khoa hoc NODE IS')

let error = logger('Error')
error('Khoa hoc HTML/CSS')
error('Khoa hoc index.html, index.js')


function createStorage(key) {
    const store = JSON.parse(localStorage.getItem(key)) ?? {}

    const save = () => {
        localStorage.setItem(key, JSON.stringify(store))
    }

    const storage = {
        get(key) {
            return store[key]
        },
        set(key,value) {
            store[key] = value
            save()
        },
        remove(key) {
            delete store[key]
            save()
        }
    }

    return storage
}

// Profile.js

const profileSetting = createStorage('profile_setting')
console.log(profileSetting.remove('fullName'))

profileSetting.set('fullName', 'Huu Hung')
profileSetting.set('age', 20)
profileSetting.set('address', 'Ha Noi')




function createApp() {
    const cars = []
    
    return {
        add(car){
            cars.push(car)
        },
        show() {
            console.log(cars)
        }
    }
}

const app = createApp()
app.add('BMW')
app.add('PHP')
app.honda('Mercedes')
app.show()
