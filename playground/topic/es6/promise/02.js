/**
 * Created by cyk on 15/11/1.
 */

"use strict";
/**
 * Promise构造函数接受一个函数作为参数，
 * 该函数的两个参数分别是resolve和reject。
 * 它们是两个函数，由JavaScript引擎提供，不用自己部署。
 * resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”
 * （即从Pending变为Resolved），在异步操作成功时调用，并将异步操作的结果，
 * 作为参数传递出去；即往外传递一个结果状态, 传递出去时,then 获得了执行
 * reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从Pending变为Rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。
 * @type {Promise}
 */
var p1 = new Promise(function (resolve, reject) {
  /**
   * 这里是异步工作
   */
  setTimeout(() => reject(new Error('fail')), 3000);
});

// var p2 = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(p1), 1000);
// });

p1.then(function () {
  console.log('success');
}).catch(function (err) {
  console.log(32, err)
})
//   .catch(function () {
//     console.log('catch error')
//   })
//   .then(function () {
//     console.log('error')
//   })
//   .catch(function () {
//     console.log('catch error')
//   })

// p2.then(result => console.log(result))
//   .catch(error => console.log(error));

/**
 * result:
 */
// /usr/local/bin/node /promise/02.js
// 22
// (node:10521) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): Error: ...Fail
//
// Process finished with exit code 0
