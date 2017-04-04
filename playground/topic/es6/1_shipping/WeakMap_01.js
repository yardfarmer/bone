/**
 * Created by yakuncyk on 16/1/24.
 */

// 用于存放引用的数据, api 接口支持少

var map = new WeakMap();
var keyFunc = function () {
};
//map.set('a', 1);
map.set(keyFunc, 'bug');

console.log(map.size); // undefined

//map.clear();
//console.log(map.size);

if (map.has('c')) {
    map.delete('c');
}
//console.log(map.size);


// map.forEach
// callbackFunc(value, key)
function iter(v, k) {
    console.log(this, k, v)
}

// weakMap 没有 forEach
// callbackFunc, thisArgs
//map.forEach(iter, {self: 'thisArgs'});