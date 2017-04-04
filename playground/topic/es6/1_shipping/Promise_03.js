/**
 * Created by yakuncyk on 16/1/24.
 */
//Promise.resolve(promise)
var p = Promise.resolve([1, 3]);
var followPromise = Promise.resolve(p);
followPromise.then(function (data) {
    console.log('follow', data)
});


// Thenable在callback之后抛出异常
// Promise resolves
var thenable = {
    then: function (resolve) {
        console.log('...');
        resolve('Resolving');
        throw new TypeError("Throwing");
    }
};

var p3 = Promise.resolve(thenable);
p3.then(function (v) {
    console.log(v); // 输出"Resolving"
}, function (e) {
    // 不会被调用
});