// Fetch


let postApi = 'https://jsonplaceholder.typicode.com/posts';

// stream
fetch(postApi)
    .then((response) => {
        return response.json()
    
    })

    .then((posts) => { 
        let htmls = posts.map((post) => {
            return `
                <h2>${post.title}</h2>
                <h3> ${post.id} </h3>
                <p> ${post.body} </p>
            `
        })
        let html = htmls.join('')
        document.getElementById('post-block').innerHTML = html
    })
    
    .catch(function(err) {
        alert('Co loi')
    })