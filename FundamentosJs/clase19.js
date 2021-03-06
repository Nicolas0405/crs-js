var sacha = {
    nombre : 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}
var alan = {
    nombre : 'Alan',
    apellido: 'Perez',
    altura: 1.86
}
var martin = {
    nombre : 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}
var dario = {
    nombre : 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}
var paula = {
    nombre : 'Paula',
    apellido: 'Barros',
    altura: 1.76
}
var vicky = {
    nombre : 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

const esAlta = ({altura}) => altura > 1.8
const esBaja = ({altura}) => altura < 1.8

var personas=[sacha, alan, martin, dario, paula, vicky]

var personasAltas = personas.filter(esAlta)
var persontasBajas = personas.filter(esBaja)
//var personasAltas =  personas.filter(function (persona ) {
//    return persona.altura > 1.8
//})
const pasarAlturaACms = persona => ({
    ...persona,
        altura : persona.altura * 100
})

var personasCMS = personas.map(pasarAlturaACms)

console.log(personasAltas)
console.log(persontasBajas)
console.log(personasCMS )