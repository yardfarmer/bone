var sum = (num1, num2) => num1 + num2;

sum(1,2);


var getTempItem = id => ({id: id, name: 'temp'})

console.log(getTempItem(333));

// 箭头函数写法
var double = [1,2,3].map(x => x * x);

console.log(double);
