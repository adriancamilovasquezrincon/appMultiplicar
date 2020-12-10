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
    console.log(`Empleado${empleado.nombre}`);
},(e)=>{console.log(e);
});

let getSalario=(empleado)=>{
    return new Promise((resolve,reject)=>{
        let salarioEmp=salarios.find(salario => salario.id===empleado.id);
        if (!salarioEmp) reject (`No hay salario para Id  ${empleado.nombre}`);
        else resolve({
            nombre:empleado.nombre,
            salario:salarioEmp.salario,
            id:empleado.id
        });
    })

}
getEmpleado(5).then(empleado=>{
    getSalario(empleado).then(salario=>{
        console.log(`${empleado.nombre} gana: ${salario.salario}`);
    },err => console.log(err));
}, err =>console.log(err));

getEmpleado(2).then(empleado =>{
    return getSalario(empleado);
}).then((resp)=>{
    console.log(`El salario de ${resp.nombre} es:${resp.salario}`);
}).catch((err)=>console.log((err)));


