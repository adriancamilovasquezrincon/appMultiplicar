// let getNombre= async ()=>{
//     return 'Adrian Camilo'
// }
// getNombre().then(nombre =>{
//     console.log(nombre);
// }).catch((err) =>console.log((err.message)))
let getSaludo=async()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Nhora Rincon")
        },3000)
    })

}
console.log('Mensaje inicial');
getSaludo().then(saludo => console.log(`Hola ${saludo}`));

let getSaludar=async()=>{

}
console.log('Mensaje Final');



let empleados=[
    {id:1, nombre:'Adrian'},
    {id:2, nombre:'Arelys'},
    {id:3, nombre:'Dario'},
]
let salarios=[
    {id:1,salario:1000},
    {id:2,salario:2000}
]
let getEmpleado=(id)=>{
    return new Promise((resolve,reject)=>{
        let empleadoDb=empleados.find(empleado => empleado.id===id);
        if(! empleadoDb) reject(`No existe empleado con Id ${id}`)
        else resolve(empleadoDb);
    })
}

getEmpleado(2).then((empleado)=>{
    console.log(`Empleado: ${empleado.nombre}`);},
(e)=> {console.log(e);
});

let getSalario=(empleado)=>{
    return new Promise((resolve,reject)=>{
        let salarioEmp=salarios.find(salario => salario.id===empleado.id);
        if (!salarioEmp) reject (`No existe salario para  ${empleado.nombre}`);
        else resolve({
            nombre:empleado.nombre,
            salario:salarioEmp.salario,
            id:empleado.id
        })
    })
}
getInfo=async(id)=>{
    let empleado=await getEmpleado(id);
    let resp=await getSalario(empleado);
    return `${resp.nombre} tiene un salario de ${resp.salario}`;
}
getInfo(1).then((info)=>console.log(info))
.catch(e=> console.log(e));
