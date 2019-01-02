var sacha ={
    nombre:'Sacha',
    apellido: 'Lifszyc',
    edad : 17,
    ingeniero: true,
    cocinero: false,
    cantante : false,
    dj: false, 
    guitarrista : false,
    dj : true

}
var juan={
    nombre: 'Juan',
    apellido: 'Gomez',
    edad:28
}

const MAYORIA_DE_EDAD =18

var esMayorDeEdad = function (persona){
    return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad , tiene ${persona.edad} años`)
    }else{
        console.log(`${persona.nombre} es menor de edad, tiene ${persona.edad} años`)
    }
}