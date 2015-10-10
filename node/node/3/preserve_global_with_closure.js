function asyncFunction(callback) {
  console.log("d");                        
  setTimeout(function() {
  console.log("e");                        
    callback()
  }, 200);
}

var color = 'blue';

(function(color) {
  console.log("a");                        

  asyncFunction(function() {
    console.log('The color is ' + color);
    console.log("f");	
  });
     
  console.log("b");
})(color);

  console.log("c");
color = 'green';
