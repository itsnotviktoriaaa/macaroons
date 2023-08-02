'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

function fromLess () {
    return gulp.src(['./css/styles.less', './css/adaptive.less'])
        .pipe(less())
        .pipe(concat('all.css'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./src/'))
}

exports.default = fromLess;

exports.watch = function() {
    gulp.watch(['css/styles.less', 'css/adaptive.less'], gulp.series('default'));
}

