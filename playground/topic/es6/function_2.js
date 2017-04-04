// foo::bar

function bar() {
    console.log('i am bar', this);
}

var foo = {
  name: 'foo'
};


function log(x, y = 'World') {
    console.log(x, y);
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello


function fetch(url, { body = '', method = 'GET', headers = {} }){
    console.log(method);
}

fetch('http://example.com', {

});


/**
 * 转成数组
 */
function divs() {
    return [...document.querySelectorAll('div')];
}



