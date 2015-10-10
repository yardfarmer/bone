/**
 * @fileOverview
 * @author yakuncyk
 * @version 15/9/8
 */

"use strict";

var gulp = require('gulp');
var rsync = require('gulp-rsync');

gulp.task('deploy', function() {
    gulp.src('view/**')
        .pipe(rsync({
            root: '.',
            hostname: '192.168.1.81',
            username: 'pi',
            destination: '/home/pi'
        }));
});

gulp.task('default',['deploy']);