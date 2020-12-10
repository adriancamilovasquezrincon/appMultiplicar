const parametros={
    
    base: {
        demand: true, //Obligatorio
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: '1'
    }
}
 argv = require('yargs')
    .command('listar', 'Crea un archivo con la tabla de multiplicar',parametros)
    .command('crear', 'crea un archivo con una tabla de multiplicar ',parametros)
    .help()
    .argv;