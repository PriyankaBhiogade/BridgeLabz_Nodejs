const csvtojson = require('csvjson');
const readFile = require('fs').readFile;
readFile('./csv.csv', 'utf-8', (err, fileContent) => {
    if(err) {
        console.log(err); 
        throw new Error(err);
    }
    const jsonObj = csvtojson.toObject(fileContent);
    console.log(jsonObj);
});


