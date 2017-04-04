/**
 * Created by yakuncyk on 16/1/24.
 */

console.log('a');


process.nextTick(function() {
    console.log('b');
});

console.log('c');



