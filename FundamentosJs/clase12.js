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

const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD


function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad , tiene ${persona.edad} años`)
    }else{
        console.log(`${persona.nombre} es menor de edad, tiene ${persona.edad} años`)
    }
}

function permitirAcceso(persona){
    if(!esMayorDeEdad(persona)){
        console.log('Acceso denegado')
    }
}