// const {crearArchivoAsync, crearArchivo } = require('./index')
const argv=require('yargs')
.command('listar', 'Imprima en la consola una tabla de multiplicar',{
    base:{
        demand:true, //Obligatorio
        alias:'b'
    },
    limite:{
        default:10,
        alias:'a'
    }
})
.help()
.argv;
let comando =argv-_[0];
console.log(comando);