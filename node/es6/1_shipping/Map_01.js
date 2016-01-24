/**
 * Created by yakuncyk on 16/1/24.
 */

var map = new Map();
var keyFunc = function() {};
map.set('a', 1);
map.set('b', 'hello');
map.set('c', 'hello');
map.set(keyFunc, 'bug');

console.log(map.size);

//map.clear();
//console.log(map.size);

if(map.has('c')) {
    map.delete('c');
}
//console.log(map.size);


// map.forEach
// callbackFunc(value, key)
function iter(v, k) {
    console.log(this, k, v)
}
// callbackFunc, thisArgs
map.forEach(iter, {self: 'thisArgs'});



// Iterating 游标

//
//for(var [key, value] of map) {
//    console.log(key, value);
//}
//
//
//console.log(map.get('b'), map.keys());
//console.log(map.entries())

