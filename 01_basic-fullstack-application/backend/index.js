// const express = require('express');
// require('dotenv').config()

import express from 'express'
import 'dotenv/config'

const app = express();


const PORT = parseInt(process.env.PORT, 10) || 5000

app.get('/', (req, res) => {
    res.send('hello')
})



app.listen(PORT, () => {
    console.log('app is listening on port ', PORT);
})