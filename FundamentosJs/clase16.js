var signo = prompt('Cual es tu signo')

switch(signo){
    case 'Acuario':
        console.log('Horóscopo de hoy: Tu despreocupación va a jugarte alguna mala pasada. Te vas a encontrar con un problema difícil de resolver.')
        break
    case 'Aries':
        console.log('Horóscopo de hoy: Hoy la superficialidad te resulta molesta y sientes deseos de llegar a lo último. Te darás cuenta que el problema es menor.')
        break
    case 'Tauro':
        console.log('Horóscopo de hoy: Si tu educación ha sido estricta, tendrás dificultades para concebir los temas que se dan en otro contexto que no sea el conocido.')
        break
    case 'Geminis':
        console.log('Horóscopo de hoy: Negocios, ocupaciones intelectuales y artísticas tendrán gran apoyo estelar. Habrá bastante tensión en el ambiente.')
        break
    case 'Cancer':
        console.log('Horóscopo de hoy: Hoy rebosas energía lo cual no significa que las tareas rutinarias te puedan causar frustración. Listo para asumir desafíos nuevos.')
        break
    case 'Leo':
        console.log('Horoscopo  de hoy: Sentirás que hay cosas que quedan en el aire en relación a un problema, pero podrás aclarar muchas otras situaciones.')
        break
    case 'Virgo':
        console.log('Horóscopo de hoy: Un malentendido o una falta de comunicación pueden resolverse. Si dejas pasar esa oportunidad las consecuencias serán imborrables.')
        break
    case 'Libra':
        console.log('Horóscopo de hoy: Un amigo te dará información importante, debes ponerle mucha atención específicamente a los detalles de esa conversación.')
        break
    case 'Escorpio':
        console.log('Horóscopo de hoy: Estarás sin tiempo ni ganas para divertirte. Tantas responsabilidades alterarán tu eterno buen humor. No te dejes avasallar.')
        break
    case 'Sagitario':
        console.log('Horóscopo de hoy: Eres optimista y eso aumenta tu vitalidad, pero influencias astrales pueden provocar cierta variabilidad en tu ánimo.')
        break
    case 'Capricornio':
        console.log('Horóscopo de hoy: Etapa de maduración basada en aceptar la realidad. Restricciones, más responsabilidades, organiza con sentido práctico tu trabajo.')
        break
    case 'Piscis':
        console.log('Horóscopo de hoy: Evita demasiadas distracciones externas y mantén abiertos los canales de comunicación. Ten cuidado, crisis vitales empañan tu alegría.')
        break
    default:
        console.log('No es un signo zodiacal valido')
}
