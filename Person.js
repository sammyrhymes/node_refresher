// module wrapper functions
console.log(__filename, __dirname);


class Person {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
    greeting() {
        console.log(`Hello there, ${this.name}`)
    }
}
// to export to another modules
module.exports = Person;