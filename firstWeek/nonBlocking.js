console.log("Reading file Asynchronously....");
fs.readFile('./readFile.text','utf8',(err,data) => {
    if(err){
        throw err;
    }
    console.log("Content of File..... ")
    console.log(data);
})