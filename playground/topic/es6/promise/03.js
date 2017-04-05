/**
 * Created by yakuncyk on 2017/4/4.
 */

// then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）

var p1 = new Promise(function(resolve, reject) {
  resolve('promise1 Success');
});

var p2 = new Promise(function(resolve, reject) {
  resolve('promise2 Success');
});

p1.then(function(value) {
  console.log(value); // "Success!"
  throw 'oh, no!';
}).catch(function(e) {
  console.log(1, e); // "oh, no!"
}).catch(function(e) {
  console.log(2, e); // "oh, no!"
}).then(function(){
  console.log('after a catch the chain is restored');
  return 3;
}, function () {
  console.log('Not fired due to the catch');
}).then(function (value) {
  console.log(4, value);

  /**
   * 这里注意  then() 和其内部的 callback 的返回值，不要搞混
   * 1. then 固定返回一个 promise
   * 2. then 的参数方法内部的返回值 作为 「resolve」后的参数
   */
  // return p2;
  // return {p2: 666}
}).then(function (value) {
  console.log(5, value)
}).then(function (value) {
  console.log(6, 'done!')
})

//
// // The following behaves the same as above
// p1.then(function(value) {
//   console.log(value); // "Success!"
//   return Promise.reject('oh, no!');
// }).catch(function(e) {
//   console.log(e); // "oh, no!"
// }).then(function(){
//   console.log('after a catch the chain is restored');
// }, function () {
//   console.log('Not fired due to the catch');
// });