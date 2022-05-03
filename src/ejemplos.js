const sumar = (a, b)=> {
    return a + b
}

const filtrarArreglo = (arr, item)=> {
    return arr.filter((element)=> element !== item)
}

const crearUsuario = (nombre, apellido, rut)=> {
    let usuario = {nombre, apellido, rut}
    return usuario
}

const crearSaludo = (msg)=> {
    if(typeof msg !== 'string') {
        throw 'Argumento inválido'
    }

    return `Hola ${msg}`
}

export { sumar, filtrarArreglo, crearUsuario, crearSaludo }