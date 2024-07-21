const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err;
//     console.log("folder created");
// });

fs.writeFile(
    path.join(__dirname, '/test', 'hello.txt'), 'hello World', err => {
    if (err) throw err;
    console.log("file created and written to");
});

// appending to a file
fs.appendFile(
    path.join(__dirname, '/test', 'hello.txt'), '\nI love Node', err => {
    if (err) throw err;
    console.log("file created and written to");
});

// reading a file
fs.readFile(
    path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

fs.rename(
    path.join(__dirname, '/test', 'hello.txt'), 
    path.join(__dirname, '/test', 'helloWorld.txt'),
    (err) => {
    if (err) throw err;
    console.log('name changed...');
});

