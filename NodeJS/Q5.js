const fs = require('fs');
const { Transform, Duplex } = require('stream');

// 1. Readable Stream: Read from input.txt
const readableStream = fs.createReadStream('input.txt', 'utf8');

// 2. Transform Stream: Convert text to uppercase
const transformStream = new Transform();
transformStream._transform = function(chunk, encoding, callback) {
    const upperCaseChunk = chunk.toString().toUpperCase(); // Convert chunk to string first
    callback(null, upperCaseChunk); // Pass the transformed chunk
};

// 3. Writable Stream: Write to output.txt
const writableStream = fs.createWriteStream('output.txt');

// 4. Duplex Stream: Logs the data being processed
const duplexStream = new Duplex({
    read(size) {},
    write(chunk, encoding, callback) {
        console.log('Processing chunk:', chunk.toString());
        this.push(chunk); // Push the data to the readable side
        callback(); // Signal that the write is complete
    }
});

// Pipe the streams together
readableStream
    .pipe(duplexStream)      // Pass data through the duplex stream
    .pipe(transformStream)   // Transform the data to uppercase
    .pipe(writableStream)     // Write the transformed data to output.txt
    .on('finish', () => {
        console.log('All data has been processed and written to output.txt');
    });
