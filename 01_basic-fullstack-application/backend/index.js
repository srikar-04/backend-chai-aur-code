const express = require('express');
const app = express();
require('dotenv').config()

const PORT = parseInt(process.env.PORT, 10) || 5000

app.get('/', (req, res) => {
    res.send('hello')
})



app.listen(PORT, () => {
    console.log('app is listening on port ', PORT);
})