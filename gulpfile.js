var gulp = require('gulp');
var mocha = require('gulp-mocha');
var jsdoc = require('gulp-jsdoc3');

exports.test = function () {
  return gulp.src(['./test/**/*.js'], {read: false})
    .pipe(mocha({reporter: 'spec'}));
};

exports.doc = function () {
  return gulp.src(['./src/**/*.js'], {read: false})
    .pipe(jsdoc());
};
