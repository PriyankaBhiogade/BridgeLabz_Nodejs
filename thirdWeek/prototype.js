/*As prototype object is an object, 
we can attach properties and methods to the prototype object. 
Thus, enabling all the objects created using the constructor ,
function to share those properties and methods*/


function Human(firstName, lastName) {
	this.firstName = firstName,
	this.lastName = lastName,
	this.fullName = function() {
		return `${this.firstName} ${this.lastName}`;
	}
}
var person1 = new Human("Ram", "giri");
console.log("Person Details before using Prototype ::",person1);
console.log(`Person Details before using Prototype :: ${person1}\n`);
const name = Human.prototype.name = "Priyanka";
console.log(`Name after using Prototype:: ${name}\n`);
const age = Human.prototype["age"] = 24;
console.log(`Age after using Prototype:: ${age}\n`);
console.log(`Person Details after using Prototype :: ${Human.prototype}\n`); 

 // check output ...