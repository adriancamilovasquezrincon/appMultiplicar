const argv = require('yargs')
    .command('listar', 'Crea un archivo con la tabla de multiplicar', {
        base: {
            demand: true, //Obligatorio
            alias: 'b'
        },
        limite: {
            default: 10,
            alias: '1'
        }
    })
    .command('crear', 'crea un archivo con una tabla de multiplicar ', {

        base: {
            demand: true, //Obligatorio
            alias: 'b'
        },
        limite: {
            default: 10,
            alias: '1'
        }
    })
    .help()
    .argv;

module.exports={argv};