const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

<<<<<<< HEAD
<<<<<<< HEAD
const MyApi = process.env.SENDGRID_API_KEY;

const sendGrid = require('@sendgrid/mail');
const { send } = require('@sendgrid/mail');
=======
const sendGrid = require('@sendgrid/mail');
>>>>>>> ed0cc41... Started working on server, added body-parser and cors and got the route to /api going
=======
const MyApi = process.env.SENDGRID_API_KEY;

const sendGrid = require('@sendgrid/mail');
const { send } = require('@sendgrid/mail');
>>>>>>> 9158661... Fnished setting up sendGrid, email wont send

const app = express();

const port = process.env.PORT || 6000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(cors());

//Headers that will be sending back
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.get('/api', (req, res, next) => {
    res.send('API status: Running')
})

app.post('http://localhost:3000/api/email', (req, res ,next) => {
    sendGrid.setApiKey(`${SENDGRID_API_KEY}`);
    const msg = {
        to: 'jaimevepe@gmail.com',
        from: req.body.email,
        subject: 'Website Contact',
        text: req.body.message
    }

    sendGrid.send(msg)
        .then(result => {
            res.status(200).json({
                success: true
            })
        })
        .catch(err => {

<<<<<<< HEAD
            console.log("error: ", err)
            res.status(401).json({
                success: false
            })

        })
=======
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(cors());

//Headers that will be sending back
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.get('/api', (req, res, next) => {
    res.send('API status: Running')
>>>>>>> ed0cc41... Started working on server, added body-parser and cors and got the route to /api going
})

app.post('/api/email', (req, res ,next) => {
    sendGrid.setApiKey(`${SENDGRID_API_KEY}`);
    const msg = {
        to: 'jaimevepe@gmail.com',
        from: req.body.email,
        subject: 'Website Contact',
        text: req.body.message
    }

    sendGrid.send(msg)
        .then(result => {
            res.status(200).json({
                success: true
            })
        })
        .catch(err => {

            console.log("error: ", err)
            res.status(401).json({
                success: false
            })

        })
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})