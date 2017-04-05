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

Promise.all([p1, p2, p3])
  .then(function(valueArr) {
    console.log('dones', valueArr)
  })
  .catch(function(errs) {
    console.error('errors', errs)
  })