let users = []
let posts = []

async function fetchData() {
    const userData = await fetch('https://jsonplaceholder.typicode.com/users')
    const postsData = await fetch('https://jsonplaceholder.typicode.com/posts')
    users = await userData.json()
    posts = await postsData.json()
    // console.log(users)
    // console.log(posts)
}

async function setData(){
    await fetchData();

    const tudoJunto = users.map((user) => {
        const userPosts = posts.filter((post) => post.userId == user.id)
        return {name: user.name, id: user.id, posts: userPosts }
    })

    console.dir(tudoJunto, { depth: null })
}

setData();