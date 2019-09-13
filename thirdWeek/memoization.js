var num1 = 1;

function sum(num2) {
  console.log( num1 + num2);
}

sum(1);
num1++;
sum(1);
console.log("--------------------------")

function foo(a) {
    var b = a + 2;
    function bar(c) {
      console.log(a, b, c);
  }
    bar(b * 2);
  }
  
  foo(3)