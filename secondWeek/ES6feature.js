// Default Parameters
var link = function (height, color, url) {
    var height = height || 50
    var color = color || 'red'
    var url = url || 'http://azat.co'
    console.log(height, color, url);
}

var link = function (height = 50, color = 'red', url = 'http://azat.co') { }

// Template Literals
var name = 'Your name is ' + first + ' ' + last + '.'
var url = 'http://localhost:3000/api/messages/' + id

var name = `Your name is ${first} ${last}.`
var url = `http://localhost:3000/api/messages/${id}`

// Multi-line Strings 
var roadPoem = 'Then took the other, as just as fair,\n\t'
    + 'And having perhaps the better claim\n\t'
    + 'Because it was grassy and wanted wear,\n\t'

var roadPoem = `Then took the other, as just as fair,
    And having perhaps the better claim
    Because it was grassy and wanted wear`

// Arrow Functions
const data = data.map((data) => { })

// Promises
var wait1000 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 1000)
}).then(function () {
    console.log('Yay!')
})

//  const and let keywords
function f() {
    var x = 1
    let y = 2
    const z = 3
    {
      var x = 100
      let y = 200
      const z = 300
      console.log('x in block scope is', x)
      console.log('y in block scope is', y)
      console.log('z in block scope is', z)
    }
    console.log('x outside of block scope is', x)
    console.log('y outside of block scope is', y)
    console.log('z outside of block scope is', z)
  }
  
  f()

  //array function
 // [map ,reeduce,find, some etc] 



 ///////////////////////////////////////////////////


 //  ECMA means European Computer Manufacturer’s Association