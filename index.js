let users = [
    {
        id:1,
        name: 'Kien Dam',
    } ,
    {
        id:2,
        name: 'Son Dang',
    }
];

let comments = [
    {
        id: 1,
        user_id: 1,
        content: 'anh son chua ra video' 
    },
    {
        id: 2,
        user_id: 2,
        content: 'Vua ra xong em oi'
    },
    {
        id: 3,
        user_id:1,
        content: 'Cam on anh'
    }
    
]

// 1. Lay comments
// 2. Tu comments lay ra user_id
// 3. Tu user_id lay ra user tuong ung

// Fake API

function getComments () {
    return new Promise((resolve) => {
        setTimeout(function() {
                resolve(comments)
        },1000)
    });
}


function getUsersByIds (userIds) {
    return new Promise ((resolve)=> {
        let result = users.filter((user) => {
            return userIds.includes(user.id)
        })
        setTimeout(() => {
            resolve(result)
        })
    })
}



getComments()
    .then((comments)=>{
        let userIds = comments.map((course) => {
            return course.user_id
        })
        
    return getUsersByIds(userIds)
        .then(function(users) {
            return {
                users: users,   
                comments: comments,
            }
        })    
    })

    .then((data) => {
        let commentBlock = document.getElementById('comment-block')
        
        let html = ''
        data.comments.forEach(function(comment) {
            let user = data.users.find((user) => {
                return user.id === comment.user_id
            })

            html += `<li> ${user.name}: ${comment.content} </li> `
        })
        commentBlock.innerHTML = html
    }) 

    



    
    