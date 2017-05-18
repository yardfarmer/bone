var dd = {
  ready: function(cb) {
    setTimeout(function() {
      console.log('dd.ready')
      cb && cb()
    }, 100)
  }
}

dd.ready = function() {
  setTimeout()
}
function foo() {
  console.log('foo')
}

dd.ready(foo)