import { sumar, filtrarArreglo, crearUsuario, crearSaludo } from '../src/ejemplos.js'

describe('Tests para el archivo ejemplos.js', ()=> {
    
    // Definir el primer test
    test('La funcion sumar retorna la suma de sus argumentos', ()=> {
        expect(sumar(1, 2)).toBe(3)
    })

    test('La funcion filtrarArreglo debe retornar un arreglo sin elemento especificado', ()=> {
        let arr = [1, 2, 3, 4, 5]
        let item = 4
        let filtrado = filtrarArreglo(arr, item)

        // Assertion
        expect(filtrado).not.toContain(item)
        // expect(filtrado).toEqual([1, 2, 4, 5])
    })

    test('La funcion crearUsuario debe retornar un objeto con los datos del usuario', ()=> {
        let nombre = 'Susana'
        let apellido = 'Horia'
        let rut = '12.345.678-9'

        let usuario = crearUsuario(nombre, apellido, rut)

        expect(usuario).toEqual({nombre, apellido, rut})
    })

})

describe('Tests para la funcion crearSaludo', ()=> {

    it('Debería lanzar un error si el argumento no es una String', ()=> {
        const msg = 10

        // Cuando usamos toThrow debemos envolver la funcion a testear en otra funcion
        expect(()=> crearSaludo(msg)).toThrow()
    })

    it('Debería devolver una String de length 10 si se pasa el argumento Mundo', ()=> {
        const msg = 'Mundo'
        expect(crearSaludo(msg)).toHaveLength(10)
    })

    it('El resultado solo debe contener las palabras Hola y el argumento', ()=> {
        const msg = 'Mundo'
        expect(crearSaludo(msg)).not.toMatch('chao')
    })

    it('El resultado debe contener el argumento enviado a la funcion', ()=> {
        const msg = 'Mundo'
        const resultado = 'Hola Mundo'

        expect(crearSaludo(msg)).toMatch(resultado)
    })
})