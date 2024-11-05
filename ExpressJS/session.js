const express = require('express')
const session = require('express-session');
const app = express()
const port = 3000

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))

app.get('/', (req, res) => {
    if(req.session.views){
        req.session.views++;
        res.send(`Number of views: ${req.session.views}`);
    }
    else{
        req.session.views = 1;
        res.send('Welcome to the website');
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))