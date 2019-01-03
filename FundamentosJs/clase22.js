function heredaDe(prototipoHijo, prototipoPadre){
    var  fn = function(){}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre,apellido,altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

function Desarrollador(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(Desarrollador, Persona)


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

Desarrollador.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador `)
}


//var sacha = new Persona('Sacha', 'Lifszyc',1.72)
//var juan = new Persona('Juan', 'Zuluaga', 1.61)
//var arturo = new Persona('Arturo', 'Salazar', 1.89)
