console.log('Start');

process.nextTick(() => {
    console.log('Process Tick callback');
});

setImmediate(() => {
    console.log('Set Immediate callback');
});

console.log('End');
