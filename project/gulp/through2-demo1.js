/**
 * @fileOverview
 * @author yakuncyk
 * @version 15/10/7
 */

"use strict";
var fs       = require('fs'),
    through2 = require('through2');

//fs.createReadStream('r.md')
//    .pipe(through2(function (chunk, encoding, callback) {
//        for (var i = 0; i < chunk.length; i++) {
//            if (chunk[i] == 97) {
//                chunk[i] = 122 // swap 'a' for 'z'
//            }
//        }
//        this.push(chunk);
//        callback()
//    }))
//    .pipe(fs.createWriteStream('out.txt'))


//fs.createReadStream('r.md')
//    .pipe(through2.obj(function (chunk, encoding, callback) {
//        //for (var i = 0; i < chunk.length; i++) {
//        //    if (chunk[i] == 97) {
//        //        chunk[i] = 122 // swap 'a' for 'z'
//        //    }
//        //}
//        this.push({a:1,b:2});
//        callback()
//    }))
//    .pipe(fs.createWriteStream('out.txt'))