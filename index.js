const Person = require('./references/Person');

const person1 = new Person('John', 30);
console.log(person1)
// console.log(process)

let count = 1;
setInterval(() => {
    console.log(count)
    count += 1
}, 1000)