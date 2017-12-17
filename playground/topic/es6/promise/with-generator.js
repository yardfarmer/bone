function * gen(x) {
  try {
    var y = yield x + 2;  
  } catch (e) {
    console.log('error', e);
  }

  return y;
}

var g = gen(1);
// generator 函数不同于普通函数，
// 它返回的是指针对象，不是返回结果
// 指向第一个遇到的yield语句 (x+2)
console.log(g.next());

// 每次调用 next 方法，会返回一个对象，表示当前阶段的信息(value 属性和 done 属性)
// value 属性是 yield 语句后面表达式的值，表示当前阶段的值；
console.log(g.next());

// Generator 函数内部还可以部署错误处理代码，捕获函数体外抛出的错误。
// 使用指针对象抛出的错误，可以被函数体内的try...catch代码块捕获
// console.log(g.throw('error le'))
