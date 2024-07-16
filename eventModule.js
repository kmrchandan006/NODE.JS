 const EventEmitter = require('events');

function createEmitter() {
    const emitter = new EventEmitter();
    
    // Simulate some asynchronous operation
    setTimeout(() => {
        // Emit events
        emitter.emit('start');
        emitter.emit('data', { message: 'Hello, World!' });
        emitter.emit('end');
    }, 1000);

    return emitter;
}

module.exports = createEmitter;
