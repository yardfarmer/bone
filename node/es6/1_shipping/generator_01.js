/**
 * Created by yakuncyk on 16/1/24.
 */

// defines a generator function,
// which returns a Generator object.
function* genFunc() {
    var index = 0;
    while (index < 3) {
        yield index++;
    }
}

var gen = genFunc();

console.log(gen.next().value);
console.log(gen.next().value);
