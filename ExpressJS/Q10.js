const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://aparnatijo:EbqrG4T9J3vFzRcu@cluster0.k8ul3.mongodb.net/').then(() => console.log('MongoDB Atlas connected')).catch(err => console.error('MongoDB connection error: ', err));


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))