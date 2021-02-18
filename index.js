const express=require('express');

const app=express();

const users = require('./users.json');
console.log(users);
//RUTAS
app.get('/api/users', (req,res)=>{ 
    res.json(users);
})

//Crear otra ruta que me obtenga los usuarios activos
//isActive===true

app.get('/api/users/active', (req,res)=>{ 
    res.json(users.filter((user)=>user.isActive));
})

app.listen(8080,()=>{
    console.log('server running ', 8080);
})