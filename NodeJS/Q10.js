//todo: Using Try-Catch Block

try {
    // Some code that might throw an error
    let result = JSON.parse('invalid JSON');
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
  

//todo: Handling Errors in Asynchronous Code (Callbacks)

const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('An error occurred:', err.message);
    return;
  }
  console.log('File data:', data);
});


//todo: Using Promises with .catch()

const fsPromises = require('fs').promises;

fsPromises.readFile('file.txt', 'utf8')
  .then(data => {
    console.log('File data:', data);
  })
  .catch(error => {
    console.error('An error occurred:', error.message);
  });


//todo: Using async/await with Try-Catch

const fsPromises = require('fs').promises;

async function readFileAsync() {
  try {
    const data = await fsPromises.readFile('file.txt', 'utf8');
    console.log('File data:', data);
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

readFileAsync();

//todo: Global Error Handling

// process.on('uncaughtException'): For catching errors that were not handled in the code.

process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error.message);
  });

// process.on('unhandledRejection'): For catching unhandled promise rejections.

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  });
  
  