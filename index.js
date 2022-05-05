//import express
const express = require('express');
const app = express();
//port
const port = 8000;
const controllers = require('./controller/game_controller');
const db = require('./config/mongoose');
app.use('/', require('./routes'));
//running the server
app.listen(port, (err) => {
    if(err) {
        console.log(`error running the server on ${port}`);
        return;
    }
    console.log(`server is up and running on ${port}`);
});