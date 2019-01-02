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

function imprimirProfeciones(persona){
    console.log(`${persona.nombre} es:`)
    if(persona.ingeniero){
        console.log('Ingeniero')
    }
    if(persona.cocinero){
        console.log('Cocinero')
    }
    if(persona.cantante){
        console.log('Cantante')
    }if(persona.dj){
        console.log('Dj')
    }
    if(persona.guitarrista){
        console.log('Guitarrista')
    }
    if(persona.drone){
        console.log('Drone')
    }
}

imprimirProfeciones(sacha)

function imprimirSiEsMayorDeEdad(persona){
    if(persona.edad >= 18){
        console.log(`${persona.nombre} es mayor de edad , tiene ${persona.edad} años`)
    }else{
        console.log(`${persona.nombre} es menor de edad, tiene ${persona.edad} años`)
    }
}

