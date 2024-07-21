const names = require('./references/4-names')
// console.log(names)

// OS module

const os  = require('os')

// info about current user
const user  = os.userInfo()
console.log(user)
// uptime
console.log(`Uptime is ${(os.uptime)/60} minutes`)
// os
const currentOs = {
    name: os.type(),
    release: os.release(),
    mem: os.totalmem(),
}

console.log(currentOs)
