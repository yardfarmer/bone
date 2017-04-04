/**
 * Created by yakuncyk on 15/6/11.
 */

"use strict";


let delegatedIterator = (function* () {
    yield 'Hello!';
    yield 'Bye!';
}());

let delegatingIterator = (function* () {
    yield 'Greetings!';
    yield* delegatedIterator;
    yield 'Ok, bye.';
}());

for(let value of delegatingIterator) {
    console.log(value);
}