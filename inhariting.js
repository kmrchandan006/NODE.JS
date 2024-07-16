 // Node.js program to demonstrate the 
// util.inherits() method 

// Using require to access util module 
const util = require('util'); 
const emitEvent = require('events'); 

// MyStream function calling EventEmitter 
function streamData() { 
emitEvent.call(this); 
} 

// Trying to print value 
console.log("1.> Returning util.inherits():", 
util.inherits(streamData, emitEvent)); 
// Returns undefined 

// Inheriting library via constructor 
console.log("2.>", streamData); 
// Whole library of the constructor 

console.log("3.>", emitEvent); 
// Inheriting from EventEmitter 
util.inherits(streamData, emitEvent); 

// Emitting events 
streamData.prototype.write = function(responseData) { 
this.emit('send_data', responseData); 
}; 

// Creating new stream by calling function 
const stream = new streamData('default'); 
// Printing instance of eventemitter 
console.log("4.> Instance of EventEmitter", 
			stream instanceof emitEvent); 
// Returns true 

// Comparing value and type of an 
// instance with eventEmitter 
console.log("5.> '===' comparison of an "
		+ "Instance with EventEmitter", 
streamData.super_ === emitEvent); 
// Returns true 

stream.on('send_data', (responseData) => { 
console.log("6.>", 
`Data Stream Received: "${responseData}"`); 
}); 

// Writing on console 
stream.write('Finally it started!'); 
// Finally Received the data
