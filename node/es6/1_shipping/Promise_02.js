/**
 * Created by yakuncyk on 16/1/24.
 */
// Promise 的静态方法
// Promise.resolve(value)
Promise.resolve('ok').then(function (value) {
    console.log('then', value)
}, function () {
    // 不会被调用
});


//Promise.resolve(promise)
var p = Promise.resolve([1, 3]);
var followPromise = Promise.resolve(p);
followPromise.then(function (data) {
    console.log('follow', data)
});


