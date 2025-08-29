// Event Emitter in NodeJS.
import EventEmitter from 'node:events';
// EventEmitter ek constructor hai jo events ko handle karta hai.

// step: 1.  create event emitter.
const emitter = new EventEmitter();

// step: 2. Register event listener,
// on () method we can emit events multiple times. once () method we cannot emit multiple times.
emitter.on("event_name", () => {
    console.log("Event triggered")
});
emitter.once("abc", () => {
    console.log("abc Event triggered !!")
});


// step: 3. Emit the event.
emitter.emit("event_name"); // Event triggered
emitter.emit("event_name"); // Event triggered
emitter.emit("abc"); // abc Event triggered !!
emitter.emit("abc"); // No output, as 'abc' event is registered with 'once'
