var gulp = require('gulp');
var mocha = require('gulp-mocha');
var jsdoc = require('gulp-jsdoc3');

gulp.task('test', function(done) {
    gulp.src(['./test/**/*.js'], {read: false})
        .pipe(mocha({reporter: 'spec'}))
    done();
});
  
gulp.task('doc', function (done) {
    gulp.src(['./src/**/*.js'], {read: false})
        .pipe(jsdoc());
    done();
});