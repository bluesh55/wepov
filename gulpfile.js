var gulp = require('gulp');
var rename = require('gulp-rename');
var browserify = require('gulp-browserify');
var reactify = require('reactify');

var logError = function(error) {
  console.log(error);
};

gulp.task('browserify', function() {
  return gulp.src('frontend/js/app.js')
    .pipe(browserify({
      transform: reactify
    }))
    .on('error', logError)
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('watch', function() {
  gulp.watch([
    'frontend/js/*',
    'frontend/js/*/**'
  ], ['browserify']);
});

gulp.task('default', ['browserify']);
