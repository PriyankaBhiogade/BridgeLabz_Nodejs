const person = {
    firstName: "Priyanka",
    lastName: "Bhiogade",
    get fullName() {
       return this.firstName + ' ' + this.lastName;
    },

    set fullName(name) {
        const words = name.toString().split(' ');
        this.firstName = words[0] || '';
        this.lastName = words[1] || '';
    }
}
console.log("FullName is", person.fullName);
person.fullName = "Ram Giri";
console.log("name is", person.firstName);
console.log("lastName is", person.lastName);


