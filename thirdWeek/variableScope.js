var a = 10;     //global variable -- var
var b = 20;     //global variable -- var
let aa = 5;     //global variable -- let
const bb = 7;   //global variable -- const

console.log("a+b =", a + b);

function sum() {
    // bb = 20; // try to reinitialize bb variable -- const // throw error {Assignment to constant variable}
    aa = 10;   //reinitialize  aa variable -- let 

    const c = 10;  //local variable for sum function
    var d = 20;  //local variable for sum function
    let cc = 40;

    console.log("sum function.........");
    console.log("aa + bb", aa + bb);
    console.log("a + b =", a + b);
    console.log("c + d =", c + d);
}
function sub() {
    var e = 50;
    var f = 30;
    a = 20; //reinitialize  aa variable -- var
    console.log("sub function..........");
    console.log("a + b =", a + b); // new value of a is used 
    // console.log("c + d =", c + d);  // error  [c is not defined]

    // console.log("c + bb",c + bb); //error [ c is not defined]
    // console.log("cc + aa",cc + aa) //error [ cc is not defined]
    console.log("e + f =", e - f);
    console.log("aa + bb", aa + bb);

}
sum();
 sub();