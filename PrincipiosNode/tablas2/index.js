const fs = require('fs');

// Multiplicar
let data = '';
let base=18;
for (let i = 1; i <= 10; i++) {
    data += `${base}*${i}=${base * i}\n`;
}
fs.writeFile(`tablas2-${base}`, data, (err) => {
    if (err) throw  (err);
    console.log(`La tabla del ${base} fue creada`)
});
//Multiplicar Parte 2
let crearArchivo = (base,limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) throw new Error(`El valor introducido ${base} no es un numero`)
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base}*${i}=${base * i}\n`;
        }
        fs.writeFile(`resultados/tabla-${base}`, data, (err) => {
            if (err) throw reject (err);
            resolve(`tabla-${base}.txt`);
        });
    })
}
let crearArchivoAsync =async baseB =>{
    if(!Number(baseB)) throw new Error(`El valor introducido ${baseB} no es un numero`)

    let data='';
    for(let i=1; i <=10; i++){
        data +=`${baseB}*${i} = ${baseB*i}\n`;
    }

    fs.writeFile(`tablas2-${baseB}`, data, (err) => {
        if (err) throw Error (err);

      });
      return `tabla-${baseB}.txt`;
}
let listarTabla =(base, limite)=>{
    if(!Number(base)) throw new Error(`El valor introducido ${base} no es un numero`)
    else if (!Number(limite)) throw new Error(`El valor introducido ${limite} no es un numero`)
    for(let i=1; i <=limite; i++){
        console.log(`${base}*${i} = ${base*i}`);
    }
}

module.exports={crearArchivo, crearArchivoAsync, listarTabla};
