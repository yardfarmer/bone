/**
 * Created by cyk on 15/10/18.
 */

function makeIterator(array) {
    var nextIndex = 0;
    return {
        next: function () {
            return nextIndex < array.length ?
            {value: array[nextIndex ++], done: false} :
            {value: undefined, done: true};
        }
    }
}

var it= makeIterator([1,3,5]);

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());