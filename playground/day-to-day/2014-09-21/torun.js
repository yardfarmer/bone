var foo = {
		a: 'abcd'
	};
var bar = foo;

bar.a = 'changeit';

console.log(bar.a,foo.a); // a 的值全部改变了
