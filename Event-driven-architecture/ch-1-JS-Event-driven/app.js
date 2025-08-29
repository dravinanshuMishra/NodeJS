/**
Event-Driven Architecture (EDA) in Node.js
Event-Driven Architecture is a design pattern where the flow of the application is determined by events.
In Node.js, everything (HTTP requests, file reads, DB queries) works on events.

Main Components in Node.js
• Event Emitter:
An object that creates (emits) events.
Example: Node.js provides the built-in Event Emitter class.
Example emitters: HTTP server (req, res), file system streams, custom emitters.
• Event Listener
A function that listens (waits) for a specific event.
It “subscribes” to an event.
• Event Handler
The actual callback function that executes when the event occurs.
 */
const h1 = document.querySelector("h1");
console.log("H1 element:", h1); //1. event emmiter is here h1. 

// 2. event listener is here addEventListener. 3. function is here event handler.
h1.addEventListener("click", function () {
    console.log("H1 clicked");
});