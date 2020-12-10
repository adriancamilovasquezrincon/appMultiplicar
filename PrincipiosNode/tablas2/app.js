const {crearArchivoAsync, crearArchivo,listarTabla} = require('./index')
const colors =require('colors')

let base = 17;
let baseB=5


crearArchivo(base)
    .then(archivo => console.log(`Archivo Creado:${archivo}`))
    .catch((err) => {
        console.log(err);
    });


console.log(module);
crearArchivoAsync(baseB)
    .then(archivo => console.log(`Archivo Creado:${archivo}`))
    .catch((err) => {
        console.log(err);
    });
console.log('========================'.green)
console.log('====Tabla de Multiplicar===='.yellow)
console.log('========================'.green)




// crearArchivoAsync(baseB)
// .then(archivo => console.log(`Archivo creado:${archivo}`))
// .catch((err) =>{
//     console.log(err.message);
// });









// Repaso de Argv

// base=5=32=8
// ['base','5','32','8']
// let base=process.argv[2];
// base=base.split("=");
// console.log(base);
// **++++++++*+
// console.log(argv);


// let comando = argv._[0];

// switch (comando) {
//     case 'listar':
//         listarTabla(argv.base, argv.limite)
//         break;
//     case 'crear':
//         crearArchivo(argv.base, argv.limite)
//             .then(archivo => console.log(`Archivo Creado ${archivo}`))
//             .catch((err) => {
//                 console.log(err.message);
//             });
//         break;
//     default:
//         console.log('Orden no reconocida')
//         break;

// }
// console.log('Bienvenidos a Galan')

// // let argv2=process.argv;
// // console.log(argv2);
// // // +++++++******+
// // console.log(argv);

// let baseB=process.argv[2];
// baseB=baseB.split("=")[1];
