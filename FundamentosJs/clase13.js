var sacha = {
    nombre : 'Sacha',
    apellido: 'Lifszyc',
    edad: 28,
    peso: 75
}

console.log(`Al inicio del año ${sacha.nombre} pesa ${sacha.peso} kg`)

const INCREMETO_PESO = 0.2
const DIA_DEL_AÑO = 365

const aumentarDePeso = persona=> persona.peso += INCREMETO_PESO

const disminuirDePeso = persona => persona.peso -= INCREMETO_PESO

for (var i = 1; i<=DIA_DEL_AÑO; i++) {
    var random = Math.random();
    if(random < 0.25){
        aumentarDePeso(sacha)
    }else if(random < 0.5){
        disminuirDePeso(sacha)
    }
}


console.log(`Al final del año ${sacha.nombre} pesa ${sacha.peso.toFixed(1)}Kg`)