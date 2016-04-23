var gulp = require('gulp');
var shell = require('gulp-shell');
var jsdoc = require('gulp-jsdoc3');

gulp.task('test', shell.task([
  'mocha'
]));

gulp.task('doc', function (cb) {
    gulp.src(['./src/**/*.js'], {read: false})
        .pipe(jsdoc(cb));
});