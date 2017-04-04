  // for(var i = 0; i < 1000; i++) {
  //   var firstNode = document.querySelectorAll('ul li')[0];
  //   cloneLi = firstNode.cloneNode(true);
  //   document.querySelector('ul').appendChild(cloneLi);
  // }
  
  // for (var i = 0; i < 100; i++) {
  //   
  // }
  
  A();
  B();
  
  function A() {
    a1();
  }
  
  
  function a1() {
    console.log('in a1');
    a2();
  }
  
  function a2() {
    console.log('in a2');
  }
  
  function B() {
    console.log('in B');
  }