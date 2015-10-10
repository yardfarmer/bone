/**
 * @fileOverview
 * @author yakuncyk
 * @version 15/9/13
 */

"use strict";

var gulp = require('gulp');
var rsync = require('gulp-rsync');

gulp.task('deploy', function() {
    gulp.src('build/**')
        .pipe(rsync({
            root: 'build',
            hostname: 'example.com',
            destination: '/path/to/site'
        }));
});

