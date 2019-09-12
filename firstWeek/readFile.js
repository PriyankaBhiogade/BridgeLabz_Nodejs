const fs = require('fs');
console.log("Reading file Synchronously.....");
const readFile = fs.readFileSync('./readFile.text', 'utf8');
console.log(readFile);

console.log("---------------------------------------------")

console.log("Reading file Asynchronously....");
fs.readFile('./readFile.text','utf8',(err,data) => {
    if(err){
        throw err;
    }
    console.log("Content of File..... ")
    console.log(data);
})
