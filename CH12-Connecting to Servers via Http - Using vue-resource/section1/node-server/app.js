const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT');
    next();
});

// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    const users = [
        {username: 'Ray', email: 'good'},
        {username: 'Bob', email: 'wow'}
    ]
    res.send(users);
});

app.get('/first_user', (req, res) => {
    const users = [
        {username: 'Ray', email: 'good'}
    ]
    res.send(users);
});

app.post('/data', (req, res) => {
    const {username, mail} = req.body;
    console.log(`I POST ${username + '-' +mail}`);
    res.send('good');
});

app.put('/data', (req, res) => {
    const {username, mail} = req.body;
    console.log(`I PUT ${username + '-' +mail}`);
    res.send('PUT~~~XD');
});

app.put('/alt_data', (req, res) => {
    const {username, mail} = req.body;
    console.log(`alt_data: ${username + '-' +mail}`);
    res.send('alt_data');
});

app.listen(3000);