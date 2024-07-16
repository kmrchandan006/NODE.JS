const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Define multiple event handler functions
const onGreet1 = (name) => {
    console.log(`Hello, ${name}!`);
};

const onGreet2 = (name) => {
    console.log(`Welcome, ${name}!`);
};

// Bind the functions to the 'greet' event
eventEmitter.on('greet', onGreet1);
eventEmitter.on('greet', onGreet2);

// Emit the 'greet' event
eventEmitter.emit('greet', 'Bob');
