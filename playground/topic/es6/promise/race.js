/**
 * Created by yakuncyk on 2017/4/4.
 */

var p1 = new Promise(function(resolve, reject) {
  resolve('p1 done')
})

var p2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('p2 done')
  }, 3000)
})

var p3 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    // reject('p3 done')
    resolve('p3 done')
  }, 3000)
})

// 上面代码中，只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。
Promise.race([p1, p2, p3])
  .then(function(valueArr) {
    console.log('dones', valueArr)
  })
  .catch(function(errs) {
    console.error('errors', errs)
  })