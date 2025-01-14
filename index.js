const { log } = require('console');
const express = require('express');
require('dotenv').config()

const app = express();

app.get('/', function(req, res) {
    res.send('Hello World!')
})

// YOU HAVE TO CHANGE THE VALU FROM .env FILE AS WE GENERALLY GER STRING FROM THE FILE. SO I HAVE PARSED IT TO INT FORMAT
app.listen(parseInt(process.env.PORT, 10));
// app.listen(process.env.PORT) // this wont work because the port is in the string format not as a number