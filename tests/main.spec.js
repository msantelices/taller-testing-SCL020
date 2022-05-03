import { generatePosts, filterPosts } from "../src/main.js";
import data from '../src/data.js'


describe('test suite para funciones de main.js', ()=> {

    test('la funcion generatePosts debe retornar un div', ()=> {
        const postList = generatePosts(data)
        expect(postList instanceof HTMLElement).toBe(true)
    })

    

    test('La funcion filterPosts solo deberia retornar los elementos con la categoria especificada', ()=> {
        const element = {
            id: 3,
            title: 'Rerum, asperiores? Quo, molestias consectetur? Perferendis quibusdam natus amet saepe culpa sequi?',
            description: 'Maiores, facere expedita sint laboriosam, debitis non nesciunt voluptatum neque iure dicta pariatur modi amet illo, blanditiis delectus nihil assumenda rem? Blanditiis.',
            category: 'entertainment',
            thumbnail: 'https://images.unsplash.com/photo-1427301229091-8cd171473e32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
        }

        // const filtered = filterPosts(data, 'travel')
        // expect(filtered).not.toContain(element)
        const filetered = filterPosts(data, 'entertainment')
        expect(filetered).toContain(element)
    })


})