const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const MyApi = process.env.SENDGRID_API_KEY;

const sendGrid = require('@sendgrid/mail');
const { send } = require('@sendgrid/mail');

const app = express();

const port = process.env.PORT || 5000;

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