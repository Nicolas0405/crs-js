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

    saludar(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
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

    saludar(){
     console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador `)
    }
}
//var sacha = new Persona('Sacha', 'Lifszyc',1.72)
//var juan = new Persona('Juan', 'Zuluaga', 1.61)
//var arturo = new Persona('Arturo', 'Salazar', 1.89)
