// Events Module
// Node.js has built-in module, called "Events",
// where you can create-, fire-, and listen for- your own events.

//Example 1- Registering for the event to be fired only one time using one.
//Example 2- Create an event emitter instance and register a couple of call backs.
//Example 3- Registereing for the event with callback parameters.

const EventEmitter = require("events");
const event = new EventEmitter();

// event.on("sayMyName", ()=>{
//      console.log("your name is muneeba");
// });
// event.on("sayMyName", ()=>{
//      console.log("your name is iqbal");
// });
// event.on("sayMyName", ()=>{
//      console.log("your name is thapa");
// });
event.on("checkmypage", (sc,msg)=>{
     console.log(`status code is ${sc} and the page is ${msg}`);
});

event.emit("checkmypage",200,"ok");