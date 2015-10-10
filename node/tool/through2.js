/**
 * @fileOverview
 * @author yakuncyk
 * @version 15/9/21
 */

"use strict";

var fs = require('fs');
var through2 = require('through2');

fs.createReadStream('commander.sh')
    .pipe(through2(function(chunk, encoding, callback){
        for( var i = 0; i < chunk.length; i++ ) {
            //console.log(chunk[i]);
        }
        console.log(this);
        this.push(chunk);
        callback();
    }))
    .pipe(fs.createWriteStream('out.txt'));
