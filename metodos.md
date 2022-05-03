## Apuntes

#### Testing de funciones que acceden al DOM

Instalar la dependencia jest-environment-jsdom:

    npm install jest-environment-jsdom --save-dev


Agregar la siguiente configuración en package.json

    "jest": {
        "testEnvironment": "jsdom"
    }

--- 

#### Métodos

Documentacion metodos asociados a expect:
https://jestjs.io/docs/expect


**Metodos de utilidad:**

.toBe()         ->  Revisa si el valor es igual al argumento (Strings, numbers, booleans)
.toEqual()      ->  Revisa si el valor es igual al argumento (Objetos, arrays)
.toHaveLength() ->  Revisa la propiedad length de un elemento
.toContain()    ->  Revisa si un elemento contiene a otro
.toMatch()      ->  Revisa si existe un match entre una expresion regex o una String
.toThrow()      ->  Revisa si el código arroja un error
.not            ->  Niega la expresión

