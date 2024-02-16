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
// Envío de datos como query. Buscará alguna de las palabras del text y la posición en la que se encuentre. Para enviar más de un query se utiliza &
app.get('/tasks', (req, res) => {
    let text = req.query.text
    if( text != undefined) {
        let tasksWithText = tasks.filter( task => task.text.indexOf(text) != -1 )
        res.send(tasksWithText)
        return
    }
    res.send(tasks)
});
// Después de la segunda barra va un parámetro, en este caso el parámetro id
app.get('/tasks/:id', (req, res) => {
    let id = req.params.id
    let task = tasks.find( (t) => t.id == id)
    if (task == undefined) {
        res.send('Error')
        return
    }
    res.send(task)
});

app.get('/users', (req, res) => {
    let email = req.query.email
    if (email != undefined) {
        let userWithEmail = users.filter( user => user.email == email)
        res.send(userWithEmail)
        return
    }
    res.send(users)
});

app.get('/users/:id', (req, res) => {
    let id = req.params.id
    let user = users.find( (u) => u.id == id)
    if (user == undefined) {
        res.send('Error')
        return
    }
    res.send(user)
});

app.listen(8081, () => {
    console.log('Servidor activo')
});