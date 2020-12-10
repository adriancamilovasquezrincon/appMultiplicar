const { crearArchivo, listarTabla } = require('./index');
const argv = require('./yargs').argv
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado ${archivo}`))
            .catch((err) => {
                console.log(err.message);
            });
        break;
    default:
        console.log('Orden no reconocida')
        break;

}
console.log('Bienvenidos a Galan')