var x = 8;
var module = {
    x: 42,
    getX: function() {
      return this.x;
    }
  };
  console.log(module.getX());
  var newValueOfX = module.getX;
  console.log(newValueOfX());
  var boundGetX = newValueOfX.bind(module);
  console.log(boundGetX());