 
const createEmitter = require('./eventModule');

// Create an EventEmitter instance
const emitter = createEmitter();

// Register event listeners
emitter.on('start', () => {
    console.log('Start event emitted');
});

emitter.on('data', (data) => {
    console.log('Data event emitted:', data);
});

emitter.on('end', () => {
    console.log('End event emitted');
});

// Handle errors
emitter.on('error', (err) => {
    console.error('An error occurred:', err);
});
