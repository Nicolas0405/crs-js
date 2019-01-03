function Persona(nombre,apellido,altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto= function(){
    if(this.altura >= 1.8){
        console.log(`Soy alto mido ${this.altura} Mts`);
    }else{
        console.log(`Soy bajo mido ${this.altura}Mts  `)
    }
}

var sacha = new Persona('Sacha', 'Lifszyc',1.72)
var juan = new Persona('Juan', 'Zuluaga', 1.61)
var arturo = new Persona('Arturo', 'Salazar', 1.89)

sacha.soyAlto()
juan.soyAlto()
arturo.soyAlto()