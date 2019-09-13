var obj = {name:"priyanka"};

var greeting = function(a,b,c){
    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};

var args = ("bridgeLabz","mumbai","MH");  
console.log("Output using .call() below ")
console.log("1",greeting.call(obj,args));    //call




function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }
  
  console.log("2",new Food('cheese', 5).name);

  