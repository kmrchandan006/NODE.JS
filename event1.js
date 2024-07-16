const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Define event handler functions
const onGreet1 = (name) => {
    console.log(`Hello, ${name}!`);
};

const onGreet2 = (name) => {
    console.log(`Welcome, ${name}!`);
};

// Register event listeners
eventEmitter.on('greet', onGreet1);
eventEmitter.on('greet', onGreet2);

// Emit the 'greet' event
eventEmitter.emit('greet', 'Alice');

// Remove one listener and emit again
eventEmitter.removeListener('greet', onGreet2);
eventEmitter.emit('greet', 'Bob');

// Register a one-time listener
eventEmitter.once('greet', (name) => {
    console.log(`Hello for the first and only time, ${name}!`);
});
eventEmitter.emit('greet', 'Charlie');
eventEmitter.emit('greet', 'David'); // This will not trigger the listener

// Handle errors
eventEmitter.on('error', (err) => {
    console.error('An error occurred:', err);
});
eventEmitter.emit('error', new Error('Something went wrong'));

// Remove all listeners for the 'greet' event
eventEmitter.removeAllListeners('greet');
eventEmitter.emit('greet', 'Eve'); // No output
