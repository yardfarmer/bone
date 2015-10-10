/**
 * @fileOverview
 * @author yakuncyk
 * @version 15/10/7
 */
var fs = require('fs');

//fs.createReadStream('r.md').on('data', function(chunk) {
//    console.log('Read %d bytes of data', chunk.length);
//});

var gulp = require('gulp');

gulp.src('*.md').on('data', function(file) {
    console.log('%s', file.contents);
});