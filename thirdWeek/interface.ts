interface Person { 
    firstName:string, 
    lastName:string, 
    sayHi: ()=>string 
 } 
 
 var customer:Person = { 
    firstName:"Priyanka",
    lastName:"Bhiogade", 
    sayHi: ():string =>{return "Hi !!!!"} 
 } 
 
 console.log("Customer Object ") 
 console.log(customer.firstName) 
 console.log(customer.lastName) 
 console.log(customer.sayHi())  
 
 var employee:Person = { 
    firstName:"Ram",
    lastName:"Giri", 
    sayHi: ():string =>{return "Hello  !!!"} 
 } 
   
 console.log("Employee  Object ") 
 console.log(employee.firstName);
 console.log(employee.lastName);


