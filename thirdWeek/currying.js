

function volume1(length) {
    return function(width) {
      return function(height) {
        console.log( height * width * length)
        return height * width * length;
      }
    }
  }
  
  volume1(2)(3)(4);




  