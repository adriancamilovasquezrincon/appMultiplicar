let empleados=[
    {id:1, nombre:'Adrian'},
    {id:2, nombre:'Arelys'},
    {id:3, nombre:'Dario'},
    {id:4, nombre:'Julian'},
    {id:5, nombre:'Dario'}
]
let salarios=[
    {id:1,salario:1000},
    {id:2,salario:2000}
]
let getEmpleado=(id, callback)=>{
    let empleadoDb=empleados.find(empleado => empleado.id===id);
    if(! empleadoDb) callback(`No existe empleado con Id ${id}`)
    else callback(null,empleadoDb);
}
getEmpleado(4,(err, empleado)=>{
    if(err) return console.log(err);
    console.log(empleado);
});
let getSalario=(id, callback)=>{
    let salarioDb=salarios.find(salario => salario.id===id);
    if (! salarioDb) callback (`No hay salario para el Id ${id}`);
    else callback(null,{
        nombre:empleado.nombre,
        salario:salarioDb.salario,
        id:empleado.id
    });
}
getSalario(5, (err,salario)=>{
    if(err) return console.log(err);
    console.log(salario)
});
