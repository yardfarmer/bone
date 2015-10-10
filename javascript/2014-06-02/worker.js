/**
 * Created by cyk on 14-6-2.
 */



var fibonacci = function ( n ){
    return n < 2 ? n : arguments.callee(n-1) +
        arguments.callee(n-2);
};

onmessage = function ( event ) {

    var n = parseInt(event.data, 10);
    postMessage(fibonacci(n));
}