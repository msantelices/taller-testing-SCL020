const categories = ['all', 'travel', 'entertainment']


const shufflePosts = (data)=> {
    return data.sort(() => (Math.random() > 0.5) ? 1 : -1)
}

const generatePosts = (data)=> {
    const postList = document.createElement('div')

    const shuffled = shufflePosts(data)
    shuffled.forEach((post)=> {
        const postCard = document.createElement('div')
        postCard.classList.add('post')
        const postContent = `
            <div class="thumbnail">
                <img src="${post.thumbnail}">
            </div>
            <div class="post-content">
                <h3>${post.title}</h3>
                <p>${post.description}</p>
            </div>
        `
        postCard.innerHTML = postContent
        
        postList.appendChild(postCard)
    })

    return postList
}

const filterPosts = (data, category)=> {
    return data.filter(post=> post.category == category )
}

const setActiveCategory = (category)=> {
    categories.forEach((cat)=> {
        const menuItem = document.getElementById(`filter-${cat}`)
        if(cat == category) {
            menuItem.classList.add('active')
        } else {
            menuItem.classList.remove('active')
        }
    })
}

export { shufflePosts, generatePosts, filterPosts, setActiveCategory }