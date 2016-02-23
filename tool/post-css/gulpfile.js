/**
 * @fileOverview
 * @author yakuncyk
 * @version 15/12/13
 */

"use strict";

var gulp       = require('gulp'),
    postcss    = require('gulp-postcss'),
    processors = [
        require('postcss-mixins'),
        require('postcss-simple-vars'),
        require('postcss-nested'),
        require('autoprefixer')({browsers: ['last 12 versions', 'ie 6-8']})
    ];
    //var autoprefixer = require('autoprefixer');


// compile CSS
gulp.task('css', function () {
    return gulp.src('source/css/styles.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('dest/styles/'));
});
