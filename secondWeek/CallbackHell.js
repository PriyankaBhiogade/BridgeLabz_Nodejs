
const fs = require('fs');
const file = 'input.text';
fs.exists(file,(exists) => {
    if(exists){
        fs.stat(file,(err, status) => {
            if(err){
            throw error;
            }
            if(status){
                fs.readFile(file, 'utf8',(err,data) =>{
                    if(err){
                        throw err;
                    }
                    console.log(data);
                })
            }
        });
    }
 })
    

