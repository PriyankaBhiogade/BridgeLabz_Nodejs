var async = require("async");

async.parallel({
    task1: function(callback) {
      setTimeout(function() {
        console.log('Task One');
        callback(null, 1);
      }, 100);
    },
    task2: function(callback) {
      setTimeout(function() {
        console.log('Task Two');
        callback(null, 2);
      }, 500);
      },
      task3: function(callback) {
        setTimeout(function() {
          console.log('Task 3');
          callback(null, 3);
        }, 300);
      }
  }, function(err, results) {
    console.log(results);
  });