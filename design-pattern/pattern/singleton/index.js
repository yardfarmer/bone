var mySingleton = (function() {
  // instance stores a reference to singleton
  var instance;

  function init() {
    // 私有方法
   function privateMethod() {
    console.log('i am private method');
   }

   var privateVariable = 'i am private variable';

   return {
    publicMethod: function() {
      console.log('public method call private var $s', privateVariable);
    },
    publicProperty: 'i am public property'
   };
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = init();
      }

      return instance;
    }
  };
}());

console.log(mySingleton.getInstance());

mySingleton.getInstance().publicMethod();
