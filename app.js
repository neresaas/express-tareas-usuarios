let express = require('express');
let app = express();

let tasks = require('./data/tasks');
let users = require('./data/users');

let routerTasks = require('./routers/routerTasks');
app.use('/tasks', routerTasks);

let routerUsers = require('./routers/routerUsers');
app.use('/users', routerUsers);

app.listen(8081, () => {
    console.log('Servidor activo')
});