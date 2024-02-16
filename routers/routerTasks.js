let express = require('express');
let routerTasks = express.Router();
let tasks = require('../data/tasks');

// Envío de datos como query. Buscará alguna de las palabras del text y la posición en la que se encuentre. Para enviar más de un query se utiliza &
routerTasks.get('/', (req, res) => {
    let text = req.query.text
    if( text != undefined) {
        let tasksWithText = tasks.filter( task => task.text.indexOf(text) != -1 )
        res.send(tasksWithText)
        return
    }
    res.send(tasks)
});
// Después de la segunda barra va un parámetro, en este caso el parámetro id
routerTasks.get('/:id', (req, res) => {
    let id = req.params.id
    let task = tasks.find( (t) => t.id == id)
    if (task == undefined) {
        res.send('Error')
        return
    }
    res.send(task)
});

module.exports = routerTasks;