const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', () => {
    console.log('data received')
})

customEmitter.emit('response')


customEmitter.on('resp', (name, id) => {
    console.log(`data received\nid: ${id}\nname: ${name}`)
})

customEmitter.emit('resp', 'John', 1)