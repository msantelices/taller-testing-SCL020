import data from './data.js'
import { generatePosts, filterPosts, setActiveCategory } from './main.js'

const init = ()=> {
    const filterAll = document.getElementById('filter-all')
    const filterTravel = document.getElementById('filter-travel')
    const filterEntertainment = document.getElementById('filter-entertainment')
    const postContainer = document.getElementById('posts-container')

    filterAll.addEventListener('click', ()=> { 
        const posts = generatePosts(data, 'all')

        postContainer.innerHTML = ''
        postContainer.appendChild(posts) 

        setActiveCategory('all')
    })

    filterTravel.addEventListener('click', ()=> {
        const filetered = filterPosts(data, 'travel')
        const posts = generatePosts(filetered)

        postContainer.innerHTML = ''
        postContainer.appendChild(posts) 

        setActiveCategory('travel')
    })

    filterEntertainment.addEventListener('click', ()=> {
        const filtered = filterPosts(data, 'entertainment')
        const posts = generatePosts(filtered)

        postContainer.innerHTML = ''
        postContainer.appendChild(posts) 
    
        setActiveCategory('entertainment')
    })

    const posts = generatePosts(data)
    postContainer.appendChild(posts)
    setActiveCategory('all')

}

init()