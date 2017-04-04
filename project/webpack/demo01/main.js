/**
 * @fileOverview
 * @author yakuncyk
 * @version 15/12/13
 */

"use strict";

function display(str) {
    document.write(str);
}

display("hello world");

var sub1 = require('./sub1');
display(sub1.output());
