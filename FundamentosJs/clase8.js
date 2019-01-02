var sacha = {
    nombre : 'Sacha',
    apellido:'Lifszyc',
    edad: 28
}
var dario = {
    nombre : 'Dario',
    apellido:'susnisky',
    edad: 27 
}

function imprimirNombreEnMayusculas(persona){
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)
//imprimirNombreEnMayusculas({nombre: 'Pepito'})

function imprimirNombreYEdad(persona){
    var {nombre, edad} = persona
    console.log(`Hola me llamo ${nombre} y tengo ${edad} años`)
}
 
imprimirNombreYEdad(sacha)
imprimirNombreYEdad(dario)

function cumpleanos(persona){
    return{
        ...persona,
        edad:persona.edad+1
    }
}