function Persona(nombre,apellido){
    this.nombre = nombre
    this.apellido = apellido
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

var sacha = new Persona('Sacha', 'Lifszyc')
var juan = new Persona('Juan', 'Zuluaga')
var arturo = new Persona('Arturo', 'Salazar')

