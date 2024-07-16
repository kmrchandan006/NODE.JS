const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Register an event listener for the 'greet' event
eventEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

// Emit the 'greet' event
eventEmitter.emit('greet', 'Alice');

// Register another event listener for the 'greet' event
const greetListener = (name) => {
    console.log(`Hi, ${name}!`);
};
eventEmitter.on('greet', greetListener);

// Emit the 'greet' event again
eventEmitter.emit('greet', 'Bob');

// Remove the second listener
eventEmitter.removeListener('greet', greetListener);

// Emit the 'greet' event once more
eventEmitter.emit('greet', 'Charlie');

// Handle errors
eventEmitter.on('error', (err) => {
    console.error('An error occurred:', err);
});

// Emit an error event
eventEmitter.emit('error', new Error('Something went wrong'));
