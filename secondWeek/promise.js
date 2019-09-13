new Promise((resolve, reject) => {
    console.log('Initial');
    resolve();
})
.then(() => {
     throw new Error('Something failed');
        
    console.log('Do this');
})
.catch(() => {
    console.error('Do that');
})
.then(() => {
    console.log('Do this, no matter what happened before');
    console.log("__________________________________________")

});


var promise1 = Promise.resolve(3);
var promise2 = 42;
var promise3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'aaa');
});

Promise.all([promise1, promise2, promise3]).then(function(values) {
  console.log(values);
});