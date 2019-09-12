const fs = require('fs');
console.log("write Asynchronously.....");
fs.writeFile('./writeFile.text', "Writing to a file from node.js", 'utf8', (err) => {
    if (err) {
        throw err;
    }
    console.log("File write successfully.....");
    fs.readFile('./writeFile.text', 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        console.log("Content of File..... ")
        console.log(data);
    })
});

console.log("write Synchronously.....");
fs.writeFileSync('./writeFile.text', "Writing to a file from node.js", 'utf8', (err) => {
    if (err) {
        throw err;
    }
    console.log("File write successfully.....");
    fs.readFile('./writeFile.text', 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        console.log("Content of File..... ")
        console.log(data);
    })
});
