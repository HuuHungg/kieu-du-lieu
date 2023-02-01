// Fetch


let postApi = 'https://jsonplaceholder.typicode.com/posts';

fetch(postApi)
    .then((response) => {
        return response.json()  
    })
    
    .then((data) => {
        let htmls = data.map((post)=> {
            return `
                <h1> ${post.id} </h1>
                <h2> ${post.title}</h2>
                <p> ${post.body} </p>
            `
        })

        let html = htmls.join('')
        document.getElementById('post-block').innerHTML = html
    })

    .catch((err) => {
        console.log('Khoa hoc bi loi')
    })

    