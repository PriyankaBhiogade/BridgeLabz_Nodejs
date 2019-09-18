// provide a function as an argument to another function that executes an asynchronous task.
//  When the asynchronous task completes, 
//  the executing function calls your callback function

/**
 *  @Purpose : Performing addition of two number using Callback 
 */
const read = require('readline-sync')

function addition(a,b, callback) {
    sum = a + b;
    console.log(`Sum of two number is ==> ${sum} `);
    callback();
  }
  
  addition(10,20, () => {
    console.log('Finished  .....');
  });

/********************************************************************************************************* */
  function greeting(name) {
    console.log('Hello ' + name);
  }
  function userInput(callback) {
    var name = read.question('Please enter your name ::');
    callback(name);
  }
  
  userInput(greeting);