console.log("Start");

setImmediate(() => {
    console.log("Set Immediate has been called");    
});

process.nextTick(() => {
    console.log("NextTick has been called!");    
})



console.log("End");

