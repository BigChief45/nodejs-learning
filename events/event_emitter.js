/* 
    - All objects which emit events are instances of events.EventEmitter 
    - When an EventEmitter instance faces any error, it emits an 'error' event.
*/

var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1() {
    console.log('Listener1 executed.');
}

var listener2 = function listener2() {
    console.log('Listener2 executed');
}

// Bind the 'connection' event with Listener1 and Listener2
eventEmitter.addListener('connection', listener1);
eventEmitter.addListener('connection', listener2);

var eventListeners = events.EventEmitter.listenerCount(
    eventEmitter, 'connection');
console.log(eventListeners + ' Listener(s) listening to connection event.');

// Fire the 'connection' event
eventEmitter.emit('connection');

// Remove Listener1's binding of connection event
eventEmitter.removeListener('connection', listener1);
console.log('Listener1 has stop listening.');

// Fire again
eventEmitter.emit('connection');

var eventListeners = events.EventEmitter.listenerCount(
    eventEmitter, 'connection');
console.log(eventListeners + ' Listener(s) listening to connection event.');

console.log('\nProgram has ended.');