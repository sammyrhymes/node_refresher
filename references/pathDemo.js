const path = require('path');


// print out the filename 
console.log(path.basename(__filename));

// print out the dirname 
console.log(path.dirname(__filename));

// print out the filename 
console.log(path.extname(__filename));

// create an object with different parts of the file path
console.log(path.parse(__filename));

// concantinate paths using join
// ../text/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'));