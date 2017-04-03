/**
 * Created by cyk on 15-4-22.
 */

/**
 * destructuring
 * 解构
 * iojs 目前还不支持
 */

var [a, b, c] = [1, 2, 3];
console.log(a);

var [foo = true] = [];
console.log(foo);

var { foo, bar } = {
    foo: "aaa",
    bar: "bbb"
};

