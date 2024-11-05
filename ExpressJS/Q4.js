const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/some-route', (req, res, next) => {
    try{
        // Code that might throw error
    } catch(err){
        next(err); // Pass the error to the error-handling middleware
    }
})

class NotFoundError extends Error{
    constructor(message){
        super(message);
        this.status = 404;
    }
}

app.get('/someroute', (req, res, next) => {
    next(new NotFoundError('This route does not exist!'))
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))