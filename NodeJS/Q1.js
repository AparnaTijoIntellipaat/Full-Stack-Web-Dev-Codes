const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if(err){
        console.log('Error reading the file: ', err);
        return;
    }
    console.log('File content: ', data);
});

console.log('This message will come first');
