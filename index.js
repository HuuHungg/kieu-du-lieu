 let users = [
    {
        id: 1,
        name: 'Huu Hung'
    },
    {
        id: 2,
        name: 'Son Dang'
    }   ,
    {
        id: 3,
        name: 'Kien Dam'
    }
 ]

 let comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Anh Son chua ra video :('
        
    },
    {
        id: 2,
        user_id: 2,
        content: 'Vua ra xong em oi !'
    },
    {
        id: 3,
        user_id: 1,
        content: 'Cam on anh ^^'
    },
    {
        id: 4,
        user_id:2,
        content: 'Khong co gi em co gang hoc nhe'
    }

 ]

 // 1. Lấy comments
 // 2. Từ comments lấy ra user_id
 // 3, Từ user_id lấy ra user tương ứng

 // Fake API
 function getComments () {
    return new Promise (function(resolve) {
        setTimeout(function() {
            resolve(comments)
        }, 1000)
    })
 }


function getUsersByIds(userIds) {
    return new Promise(function(resolve) {
        let result = users.filter(function(user) {
            return userIds.includes(user.id)
        })
        setTimeout (function() {
            resolve(result)
        }, 1000)
        
    })
}



 getComments()
    .then(function(comments) {
        let userIds = comments.map(function(comment) {
            return comment.user_id
        })
        return getUsersByIds (userIds)
        .then(function(users) {
            return {
                users: users,
                comments: comments
            }
        })
    })

    .then(function(data) {

        let commentBlock = document.getElementById('comment-block')
      
        let html = ''
        data.comments.forEach(function(comment) {
            let user = data.users.find(function(user) {
                return user.id === comment.user_id
            })
            html += `<li>${user.name}: ${comment.content}</li>`
        })
        
        commentBlock.innerHTML = html;
    })





