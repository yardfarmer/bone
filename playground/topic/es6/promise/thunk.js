// 传值调用
// call by value


// 传名调用
// call by name
var x = 4;

function f(m) {
  return m * 2;
}

// 等同于
// thunk 函数的意义
var thunk = function () {
  return x + 5;
};

function f(thunk) {
  return thunk() * 2;
}

f(thunk);


// 在 JS 中，thunk 函数替换的不是表达式，而是多参数函数
// 替换成只接受以回调函数为唯一参数的单参数函数

// 模拟实现
// var Thunk = function(fn) {
//   let args = {...arguments};
//   return function(callback) {
//     fn.call(this, args, callback);
//   }
// }

// thunk 类型的函数转换器
var Thunk = function(fn) {
  return function(...args) {
    return function(callback) {
      return fn.call(this, ...args, callback)
    }
  }
}

// demo

function f(a, cb) {
  cb(a);
}
const ft = Thunk(f);

ft(1)(console.log) // 1
