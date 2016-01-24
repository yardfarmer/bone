/**
 * Created by yakuncyk on 16/1/24.
 */

'use strict';

{
    let a = 10;
    var b = 1;

    {
        var c = a;
    }
}

console.log(b);
console.log(c);
//console.log(a);
