var gulp = require('gulp');
var mocha = require('gulp-mocha');
var jsdoc = require('gulp-jsdoc3');

gulp.task('test', function() {
  gulp.src(['./test/**/*.js'], {read: false})
        .pipe(mocha({reporter: 'spec'}))
})
gulp.task('doc', function (cb) {
    gulp.src(['./src/**/*.js'], {read: false})
        .pipe(jsdoc(cb));
});