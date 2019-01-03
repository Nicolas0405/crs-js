function heredaDe(prototipoHijo, prototipoPadre){
    var  fn = function(){}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

class Persona{
    constructor (nombre,apellido,altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn){
        var {nombre,apellido} = this

        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        if(fn){
            fn(nombre,apellido)
        }
    }
    
    soyAlto(){
        if(this.altura >= 1.8){
            console.log(`Soy alto mido ${this.altura} Mts`);
        }else{
            console.log(`Soy bajo mido ${this.altura}Mts  `)
        }
    }
}

class Desarrollador extends Persona{

    constructor (nombre, apellido, altura){
        super(nombre, apellido, altura)
    }

    saludar(fn){
        var {nombre,apellido} = this

         console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador `)

     if(fn){
        fn(nombre,apellido,true)
    }

    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen dia ${nombre} ${apellido}`)
    if(esDev){
        console.log(`Ah mira, no sabia que eras desarrollador/a`)
    }
}

var sacha = new Persona('Sacha', 'Lifszyc',1.72)
var juan = new Persona('Juan', 'Zuluaga', 1.61)
var arturo = new Desarrollador('Arturo', 'Salazar', 1.89)

sacha.saludar()
juan.saludar(responderSaludo)
arturo.saludar(responderSaludo)