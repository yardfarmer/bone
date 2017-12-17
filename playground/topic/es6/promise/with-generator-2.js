var fetch = require('node-fetch');

function * gen() {
  var url = 'https://api.github.com/users/github';
  var result = yield fetch(url);

  console.log('display::', result.bio);
}

var g = gen();
var result = g.next();

// g.next(result)
result.value
  .then(data => {
    console.log(data);
    return data.json();
  })
  .then(data => {
    g.next(data);
  })