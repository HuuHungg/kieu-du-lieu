
let emailKey = 'email';


let myInfo = {
    name: 'Huu Hung',
    age: 20,
    address: 'HN, VN',
    [emailKey]: 'huuhungnguyen2002@gmail.com',
    getName: function() {
        return this.name
    }
}
// Muốn xoá một key thì dùng delete

delete myInfo.age;
delete myInfo.address


console.log(myInfo)
console.log (myInfo.getName())