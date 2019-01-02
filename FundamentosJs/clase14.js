var sacha = {
    nombre : 'Sacha',
    apellido: 'Lifszyc',
    edad: 28,
    peso: 75
}

console.log(`Al inicio del año ${sacha.nombre} pesa ${sacha.peso} kg`)

const INCREMETO_PESO = 0.3
const DIA_DEL_AÑO = 365

var dias=0

const aumentarDePeso = persona=> persona.peso += INCREMETO_PESO
const disminuirDePeso = persona => persona.peso -= INCREMETO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = sacha.peso - 3

while(sacha.peso > META){   
    
    if(comeMucho()){
        aumentarDePeso(sacha)
    }
    if(realizaDeporte()){
        disminuirDePeso(sacha)
    }

    dias += 1
}

console.log(`Pasaron ${dias} dias hasta que ${sacha.nombre} adelgazo 3kg`)