const EventsEmitter = require('events');

const events = new EventsEmitter();

events.on('response', (name, id)=>  {
    console.log(`data received from ${name} with id: ${id}`)
    console.log(`Checking it out`)
})

events.on('response', ()=>  {
    console.log(`Some other task on it`)
})

events.emit('response', 'john', 34);