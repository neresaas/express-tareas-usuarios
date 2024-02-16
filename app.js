let express = require('express');
let app = express();

let tasks = [
    { id:1, text:'Hacer la compra' },
    { id:2, text:'Pagar la luz' },
    { id:3, text:'Revisar las facturas' }
];

let users = [
    { id:1, email:'user1', password:'user1' },
    { id:2, email:'user2', password:'user2' },
];

app.get('/tasks', (req, res) => {
    res.send(tasks)
});

app.get('/users', (req, res) => {
    res.send(users)
});

app.listen(8081, () => {
    console.log('Servidor activo')
});