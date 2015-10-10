/**
 * Created by yakuncyk on 15/7/18.
 */

"use strict";

var async = require('async');
var fs = require('fs');

process.chdir('./recipes');

async.sortBy(['potato.txt', 'salsa.txt'], function(file, callback) {
    fs.stat(file, function(err, stats) {
        callback(err, stats.mtime);
    })
}, function(err, results) {
    console.log('a',results);
});