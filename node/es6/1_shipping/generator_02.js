/**
 * Created by yakuncyk on 16/1/24.
 */

// defines a generator function,
// which returns a Generator object.

function* anotherGenerator(i) {

    console.log('an', i);
    yield i + 1;
    yield i + 2;
    yield i + 3;
}

function* generator(i) {
    console.log('_0');
    yield i;
    console.log('_1');
    yield* anotherGenerator(i);
    console.log('_2');
    yield i + 10;
}


var gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

var x = function*(y) {
    yield y * y;
};

var g = x(5);
console.log(g.next().value);
//console.log(g.next().value);
