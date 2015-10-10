/**
 * Created by yakuncyk on 15/6/12.
 */

"use strict";

var clock = function* (_) {
    while(true) {
        yield _;
        console.log('Tick!');
        yield _;
        console.log('Tock');
    }
};

var i = clock();
i.next();

i.next();
i.next();

i.next();

i.next();