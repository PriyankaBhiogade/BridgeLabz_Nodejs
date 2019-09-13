const fs = require('fs');
console.log("Reading file Synchronously.....");
const readFile = fs.readFileSync('./readFile.text', 'utf8');
console.log(readFile);