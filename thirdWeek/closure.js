function makeFunc() {
    var name = 'Mozilla';
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  var myFunc = makeFunc();
  myFunc();
  
////////////////////////////////////////////////


  function setLocation(city) {
    var country = "France"; 
  
    function printLocation() {       
      console.log("You are in " + city + ", " + country);  
    }
  
    printLocation();
  }
  
  setLocation ("Paris");

////////////////////////////////////////////
  let name = "John";

function sayHi() {
    console.log("Hi, " + name);
}

name = "Pete";

sayHi();