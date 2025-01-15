// const express = require('express');
// require('dotenv').config()

import express from 'express'
import 'dotenv/config'

const app = express();


const PORT = parseInt (process.env.PORT, 10) || 5000

app.get('/', (req, res) => {
    res.send('hello')
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'joke 1',
            content: 'this is a joke 1',
        },
        {
            id: 2,
            title: 'joke 2',
            content: 'this is a joke 2',
        },
        {
            id: 3,
            title: 'joke 3',
            content: 'this is a joke 3',
        },
        {
            id: 4,
            title: 'joke 4',
            content: 'this is a joke 4',
        }
    ]
    res.send(jokes)
})



app.listen(PORT, () => {
    console.log('app is listening on port ', PORT);
})