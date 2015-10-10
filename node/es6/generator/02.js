/**
 * Created by yakuncyk on 15/6/11.
 */

"use strict";

function *gen1() {
    yield '1-1';

    yield '1-2';
}

function *gen2() {

    yield '2-1';


    yield *gen1();


    yield '2-2';
}

var it;

for(var it of gen2()) {
    console.log(it);
};

