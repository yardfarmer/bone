/**
 * Created by cyk on 15/10/17.
 */

"use strict";

var Readable = require('stream').Readable;
var rs = Readable();

var c = 97;
rs._read = function () {
    rs.push(String.fromCharCode(c++));

    /**
     * buffer
     */
    if (c > 'z'.charCodeAt(0)) {
        rs.push(null);
    }
};

rs.pipe(process.stdout);