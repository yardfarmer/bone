/**
 * Created by cyk on 15-4-22.
 */

const PI = 3.14;

// const 变量不许再赋值
// 赋值了也不管用, 这个很危险
PI = 5;


// 光声明不赋值, 然后再赋值也不行
// 赋值也不管用, 默认是 undefined
const Be;
Be = "beauty";


console.log(PI, Be);