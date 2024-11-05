const express = require('express')
const app = express()
const port = 3000

const jwt = require('jsonwebtoken');

app.use(express.json());

const SECRET_KEY = 'secret_key';

const user = {id: 1, username: 'user123', password: 'password123'};

app.post('/login', (req, res) => {
    const {username, password} = req.body;
    if(username === user.username && password === user.password){
        const token = jwt.sign({userId: user.id}, SECRET_KEY, {expiresIn: '1h'});
        return res.json({token});
    }
    else{
        return res.status(401).send("Invalid credentials");
    }
});

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if(!token) return res.status(403).send('Token required');

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if(err) return res.status(403).send('Invalid token');
        req.user = decoded;
        next();
    })
}

app.get('/protected', authenticateToken, (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))